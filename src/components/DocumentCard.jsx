import StatusBadge from "./StatusBadge";

function DocumentCard({ doc }) {
  const inProgress = doc.status === "QUEUED" || doc.status === "PROCESSING";

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "10px",
      }}
    >
      <strong>{doc.fileName}</strong>
      <StatusBadge status={doc.status} />

      {inProgress && <p>Processing your document...</p>}
      {doc.status === "FAILED" && (
        <p style={{ color: "#dc2626" }}>Processing failed for this document.</p>
      )}
      {doc.documentCategory && <p>Category: {doc.documentCategory}</p>}
      {doc.aiSummary && <p>Summary: {doc.aiSummary}</p>}
    </div>
  );
}

export default DocumentCard;