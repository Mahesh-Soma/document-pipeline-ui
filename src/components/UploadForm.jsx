
import { useState } from "react";
import { uploadDocument, saveMyDocumentId } from "../api";

function UploadForm({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (!file) {
      setError("Please choose a PDF file first.");
      return;
    }
    if (file.type !== "application/pdf") {
      setError("Only PDF files are allowed.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError("File size must be under 10 MB.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await uploadDocument(file);
      saveMyDocumentId(result.id);
     onUploadSuccess(result);
      setFile(null);
      form.reset();
    } catch (err) {
      setError("Upload failed. If the server was asleep, wait a few seconds and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button type="submit" disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default UploadForm;