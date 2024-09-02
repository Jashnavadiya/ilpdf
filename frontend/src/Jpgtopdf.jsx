import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const ImageToPDFConverter = () => {
  const [images, setImages] = useState([]);

  const handleDrop = (result) => {
    if (!result.destination) return;

    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setImages(items);
  };

  const handleFiles = (event) => {
    const fileList = event.target.files;
    const newImages = Array.from(fileList).map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  const convertToPDF = () => {
    const doc = new jsPDF();

    images.forEach((image, index) => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const imgData = canvas.toDataURL('image/jpeg');

        if (index !== 0) doc.addPage();
        doc.addImage(imgData, 'JPEG', 0, 0);
        
        if (index === images.length - 1) doc.save('output.pdf');
      };
    });
  };

  return (
    <div>
      <h2>Drag and drop images to reorder and convert to PDF</h2>
      <input type="file" accept="image/jpeg" multiple onChange={handleFiles} />
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="images">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {images.map((image, index) => (
                <Draggable key={image} draggableId={image} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <img src={image} alt={`Image ${index}`} />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <button onClick={convertToPDF}>Convert to PDF</button>
    </div>
  );
};

export default ImageToPDFConverter;
