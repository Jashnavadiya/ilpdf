// SecurePDF.js
import React, { useState } from 'react';
import axios from 'axios';

const SecurePDF = () => {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const encryptPDF = async () => {
    if (!file) {
      alert('Please upload a PDF file');
      return;
    }
    if (!password) {
      alert('Please enter a password');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('password', password);

      const response = await axios.post('https://api.example.com/encrypt-pdf', formData, {
        responseType: 'blob',
      });

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `secure-${file.name}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error encrypting PDF:', error);
      alert('An error occurred while encrypting the PDF. Please try again.');
    }
  };

  return (
    <div>
      <h1>Secure PDF Generator</h1>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={encryptPDF}>Encrypt PDF</button>
    </div>
  );
};

export default SecurePDF;
