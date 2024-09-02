import React, { useState } from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import exceljs from 'exceljs';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ExcelToPdfConverter = () => {
  const [excelFiles, setExcelFiles] = useState([]);
  const [pdfUrl, setPdfUrl] = useState('');

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(excelFiles);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setExcelFiles(items);
  };

  const handleFilesChange = (event) => {
    const files = Array.from(event.target.files);
    setExcelFiles(files);
  };

  const handleConvertToPdf = async () => {
    if (excelFiles.length === 0) return;

    try {
      const pdfDoc = await PDFDocument.create();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

      for (const file of excelFiles) {
        const workbook = new exceljs.Workbook();
        await workbook.xlsx.load(file);

        workbook.eachSheet((worksheet) => {
          const rows = worksheet.getSheetValues();
          const lines = rows.map(row => row.join('\t'));

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
        });
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (error) {
      console.error('Error converting Excel to PDF:', error);
    }
  };

  return (
    <div>
      <h2>Excel to PDF Converter</h2>
      <input type="file" onChange={handleFilesChange} multiple />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="excel-files">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {excelFiles.map((file, index) => (
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
          <a href={pdfUrl} target="_blank" download="Exceltopdf.pdf" rel="noopener noreferrer">Download PDF</a>
        </div>
      )}
    </div>
  );
};

export default ExcelToPdfConverter;
