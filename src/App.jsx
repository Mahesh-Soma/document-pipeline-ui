import { useState } from "react";
import UploadForm from "./components/UploadForm";
import DocumentList from "./components/DocumentList";

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h1>Document Processing Pipeline</h1>
         <p style={{ color: "#6b7280" }}>
     Upload a PDF and watch it move from QUEUED to COMPLETED. Demo only: please
     don't upload personal or sensitive documents. The first request may take
     up to 50 seconds while the server wakes up.
   </p>
      <UploadForm onUploadSuccess={() => setRefreshKey((k) => k + 1)} />
      <h2>Uploaded documents</h2>
      <DocumentList refreshKey={refreshKey} />
    </div>
  );
}

export default App;