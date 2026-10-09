import { useEffect, useState } from "react";
import { getDocument, getMyDocumentIds } from "../api";
import DocumentCard from "./DocumentCard";

function DocumentList({ refreshKey }) {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
    const ids = getMyDocumentIds();
    const results = await Promise.all(
      ids.map((id) => getDocument(id).catch(() => null))
    );
    if (!cancelled) {
      setDocuments(results.filter(Boolean).sort((a, b) => b.id - a.id));
      setError("");
    }
  } catch (err) {
    if (!cancelled) setError("Could not load documents.");
  } finally {
    if (!cancelled) setLoading(false);
  }
    };

    load();
    const intervalId = setInterval(load, 4000);

    return () => {
      cancelled = true;
      clearInterval(intervalId);
    };
  }, [refreshKey]);

  if (loading) return <p>Loading documents...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (documents.length === 0) return <p>No documents yet. Upload one above.</p>;

  return (
    <div>
      {documents.map((doc) => (
        <DocumentCard key={doc.id} doc={doc} />
      ))}
    </div>
  );
}

export default DocumentList;