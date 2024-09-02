// SecurePDF.js
import React, { useState } from 'react';
import { PDFDocument, PDFName, PDFString } from 'pdf-lib';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const SecurePDF = () => {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const createAndSecurePDF = async () => {
    if (!file) {
      alert('Please upload a PDF file');
      return;
    }
    if (!password) {
      alert('Please enter a password');
      return;
    }

    try {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = async () => {
        const pdfBytes = new Uint8Array(reader.result);
        const pdfDoc = await PDFDocument.load(pdfBytes);

        const pdfOwnerPassword = PDFName.of('OwnerPassword');
        const pdfUserPassword = PDFName.of('UserPassword');
        const pdfEncryption = pdfDoc.context.obj({
          Filter: PDFName.of('Standard'),
          V: PDFName.of('2'),
          Length: PDFName.of('128'),
          P: PDFString.fromText(password),
          O: PDFString.fromText(password),
        });
        pdfDoc.context.assign(
          pdfDoc.catalog.context.obj({
            Encrypt: pdfEncryption,
          }),
          pdfOwnerPassword,
          pdfUserPassword
        );

        const pdfBytesEncrypted = await pdfDoc.save();
        const zip = new JSZip();
        zip.file(file.name, pdfBytesEncrypted);
        const zipBlob = await zip.generateAsync({ type: 'blob' });
        saveAs(zipBlob, `secure-${file.name}.zip`);
      };
    } catch (error) {
      console.error('Error securing PDF:', error);
      alert('An error occurred while securing the PDF. Please try again.');
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
      <button onClick={createAndSecurePDF}>Generate Secure PDF</button>
    </div>
  );
};

export default SecurePDF;
