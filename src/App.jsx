import { useState } from "react";
import UploadForm from "./components/UploadForm";
import DocumentList from "./components/DocumentList";

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h1>Document Processing Pipeline</h1>
      <UploadForm onUploadSuccess={() => setRefreshKey((k) => k + 1)} />
      <h2>Uploaded documents</h2>
      <DocumentList refreshKey={refreshKey} />
    </div>
  );
}

export default App;