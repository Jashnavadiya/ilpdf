import React from 'react';
import { Document, Page } from 'react-pdf';
const PDFViewer = ({url}) => {
 const pdfURL = '/pdfs/1.pdf';
return (
 <div>
 <Document file={url}>
 <Page height={200} width={150} pageNumber={1} />
 </Document>
 </div>
 );
};
export default PDFViewer;