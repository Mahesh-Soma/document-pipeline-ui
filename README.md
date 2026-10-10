# Document Pipeline UI

React frontend for the [Document Processing Pipeline](https://github.com/Mahesh-Soma/document-processing-pipeline) backend.

**Live app:** https://document-pipeline-ui.vercel.app
**Backend API (Swagger):** https://document-processing-pipeline-xord.onrender.com/swagger-ui/index.html

> Demo only. Please don't upload personal or sensitive documents.
> The backend runs on Render's free tier, so the first request after a period of inactivity can take 30-50 seconds.

## Features

- Upload a PDF (checked in the browser: PDF only, under 5 MB)
- Status updates automatically every 4 seconds: QUEUED, PROCESSING, COMPLETED or FAILED
- Shows each document's category and summary
- Each browser only sees the documents it uploaded (ids stored in localStorage)

## Tech stack

React, Vite, JavaScript (ES6), fetch API, deployed on Vercel.

## Structure

- `src/api.js` - all backend calls in one place
- `src/components/UploadForm.jsx` - file picker and upload
- `src/components/DocumentList.jsx` - loads and polls the user's documents
- `src/components/DocumentCard.jsx` and `StatusBadge.jsx` - display

## Run locally

```
npm install
```

Create a `.env` file containing `VITE_API_URL=https://document-processing-pipeline-xord.onrender.com`, then:

```
npm run dev
```