function StatusBadge({ status }) {
  const colors = {
    QUEUED: "#6b7280",
    PROCESSING: "#2563eb",
    COMPLETED: "#16a34a",
    FAILED: "#dc2626",
  };

  return (
    <span
      style={{
        backgroundColor: colors[status] || "#6b7280",
        color: "white",
        padding: "2px 10px",
        borderRadius: "12px",
        fontSize: "0.8rem",
        marginLeft: "8px",
      }}
    >
      {status}
    </span>
  );
}

export default StatusBadge;