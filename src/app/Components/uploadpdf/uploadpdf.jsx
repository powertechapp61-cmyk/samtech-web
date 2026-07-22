"use client";
import { useState } from 'react';

export default function PdfUploader() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [error, setError] = useState('');

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/uploads', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Upload failed.');
      } else {
        setPdfUrl(data.url);
      }
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setUploading(false);
    }
  };

  // Forces a real "download" instead of opening inline in the browser tab
const handleDownload = async () => {
  if (!pdfUrl) return;

  try {
    const downloadUrl = pdfUrl.replace('/upload/', '/upload/fl_attachment/');
    const response = await fetch(downloadUrl);
    const blob = await response.blob();

    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'document.pdf'; // sets the saved filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  } catch (err) {
    console.error('Download failed:', err);
  }
};

  const MAX_SIZE = 10 * 1024 * 1024; // 10MB in bytes

const handleFileChange = (e) => {
  const selectedFile = e.target.files[0];
  if (!selectedFile) return;

  if (selectedFile.type !== 'application/pdf') {
    setError('Only PDF files are allowed.');
    return;
  }

  if (selectedFile.size > MAX_SIZE) {
    setError(`File is too large (${(selectedFile.size / 1024 / 1024).toFixed(1)}MB). Maximum allowed is 10MB.`);
    return;
  }

  setError('');
  setFile(selectedFile);
};

  return (
    <div>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) =>{
            handleFileChange(e)
            setFile(e.target.files[0])}}
      />
      <button onClick={handleUpload} disabled={!file || uploading} className="mainbtn">
        {uploading ? 'Uploading...' : 'Upload PDF'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {pdfUrl && (
        <div>
          <p>Uploaded successfully.</p>
          <button onClick={handleDownload} className="mainbtn">
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
}