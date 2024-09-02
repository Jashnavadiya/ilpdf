import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { jsPDF } from 'jspdf';

const PowerPointToPdfConverter = () => {
  const [powerPointFiles, setPowerPointFiles] = useState([]);
  const [pdfUrl, setPdfUrl] = useState('');

  const removeDoc = (id) => {
    setPowerPointFiles((prevFiles) => prevFiles.filter((_, index) => index !== id));
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(powerPointFiles);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPowerPointFiles(items);
  };

  const handleFilesChange = (event) => {
    const files = Array.from(event.target.files);
    setPowerPointFiles(files);
  };

  const handleConvertToPdf = async () => {
    if (powerPointFiles.length === 0) return;

    try {
      const doc = new jsPDF();

      for (let i = 0; i < powerPointFiles.length; i++) {
        const file = powerPointFiles[i];
        const reader = new FileReader();

        reader.onload = () => {
          const imgData = reader.result;

          if (i < powerPointFiles.length - 1) {
            doc.addPage();
          } else {
            const url = doc.output('bloburl');
            setPdfUrl(url);
          }
          doc.addImage(imgData, 'JPEG', 10, 10, doc.internal.pageSize.getWidth() - 20, doc.internal.pageSize.getHeight() - 20);
        };

        reader.readAsDataURL(file);
      }
    } catch (error) {
      console.error('Error converting PowerPoint to PDF:', error);
    }
  };

  return (
    <>
      <div className="main-body d-flex h-100">
        <div className='w-75 pt-5 text-center'>
          <h2>PowerPoint to PDF Converter</h2>
          <div >
            <label className='p-5 m-auto mt-3 py-3 bg-danger rounded' htmlFor="File_select">
              Select File Here
            </label>
            <input type="file" onChange={handleFilesChange} multiple style={{ display: 'none' }} />
          </div>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="powerpoint-files">
              {(provided) => (
                <div className='w-50 m-auto' {...provided.droppableProps} ref={provided.innerRef}>
                  {powerPointFiles.map((file, index) => (
                    <Draggable key={index} draggableId={index.toString()} index={index}>
                      {(provided) => (
                        <div
                          className=' rounded d-flex justify-content-between my-2 shadow px-5 py-3'
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <span>{file.name}</span>
                          <button
                            className='bg-transparent border-0 rounded'
                            onClick={() => removeDoc(index)}
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>


        </div>
        <div className="main-sidebar d-flex flex-column justify-content-between position-fixed end-0 ms-auto top-0 bottom-0 z-0 w-25 shadow pt-5 h-100">
          <h2 className='mt-4 text-center border-bottom pb-3'>Powerpoint To Pdf</h2>

          <div className='d-flex flex-column  align-items-center py-2'>
            <button className='py-3 w-50 my-auto px-5 border-0 rounded bg-danger' style={{ outline: "none" }} onClick={handleConvertToPdf}>
              Convert to Pdf
            </button>
            <span>*Click Here For converion of your file</span>
          </div>
        </div>
      </div>
      {pdfUrl && (
        <div className='w-75 position-fixed  text-center bottom-0 left-0 right-0 z-3 d-flex flex-column justify-content-center align-items-center py-4 pb-1' >

          <a href={pdfUrl} target="_blank" rel="noopener noreferrer"> <button className='py-3 w-100  px-5 border-0 rounded bg-danger' style={{ outline: "none" }} >
            Download Pdf
          </button></a>
          <span>
            *Your File IS Ready For Download from above
          </span>
        </div>
      )}
    </>
  );
};

export default PowerPointToPdfConverter;
