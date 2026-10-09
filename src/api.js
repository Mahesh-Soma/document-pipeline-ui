const BASE_URL = import.meta.env.VITE_API_URL;

export async function uploadDocument(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${BASE_URL}/documents/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Upload failed");
  }

  return response.json();
}

export async function getDocument(id) {
  const response = await fetch(`${BASE_URL}/documents/${id}`);
  if (!response.ok) {
    throw new Error("Document not found");
  }
  return response.json();
}

export async function getAllDocuments() {
  const response = await fetch(`${BASE_URL}/documents`);
  if (!response.ok) {
    throw new Error("Failed to fetch documents");
  }
  return response.json();
}
  const STORAGE_KEY = "myDocumentIds";


 export function getMyDocumentIds() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

export function saveMyDocumentId(id) {
  const ids = getMyDocumentIds();
  if (!ids.includes(id)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids, id]));
  }
}

