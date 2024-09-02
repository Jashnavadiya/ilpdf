import React, { useState } from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import mammoth from 'mammoth';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const WordToPdfConverter = () => {
  const [wordFiles, setWordFiles] = useState([]);
  const [pdfUrl, setPdfUrl] = useState('');

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(wordFiles);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setWordFiles(items);
  };

  const handleFilesChange = (event) => {
    const files = Array.from(event.target.files);
    setWordFiles(files);
  };

  const handleConvertToPdf = async () => {
    if (wordFiles.length === 0) return;

    try {
      const pdfDoc = await PDFDocument.create();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

      for (const file of wordFiles) {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer });
        const htmlContent = result.value;

        const lines = htmlContent.replace(/<\/?[^>]+(>|$)/g, "").split('\n');

        let page = pdfDoc.addPage();
        const { width, height } = page.getSize();
        const fontSize = 12;
        const margin = 50;

        let y = height - margin;

        lines.forEach(line => {
          if (y < margin) {
            page = pdfDoc.addPage();
            y = height - margin;
          }
          page.drawText(line, {
            x: margin,
            y,
            size: fontSize,
            font,
            color: rgb(0, 0, 0),
          });
          y -= fontSize + 5;
        });
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (error) {
      console.error('Error converting Word to PDF:', error);
    }
  };

  return (
    <div>
      <h2>Word to PDF Converter</h2>
      <input type="file" onChange={handleFilesChange} multiple />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="word-files">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {wordFiles.map((file, index) => (
                <Draggable key={index} draggableId={index.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <span>{file.name}</span>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button onClick={handleConvertToPdf}>Convert to PDF</button>
      {pdfUrl && (
        <div>
          <h3>Converted PDF:</h3>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">Download PDF</a>
        </div>
      )}
    </div>
  );
};

export default WordToPdfConverter;
