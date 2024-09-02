import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDropzone } from 'react-dropzone';
import PdfViewer from './test';

const MergePDFPages = () => {
    const [pdfFiles, setPdfFiles] = useState([]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setPdfFiles([...pdfFiles, ...files]);
        e.target.value = null;
    };

    const onDrop = (acceptedFiles) => {
        setPdfFiles([...pdfFiles, ...acceptedFiles]);
    };

    const removeDoc = (id) => {
        setPdfFiles((prevFiles) => prevFiles.filter((_, index) => index !== id));
    };

    const mergePDFs = async () => {
        if (pdfFiles.length < 2) {
            alert('Please select at least two PDF files.');
            return;
        }

        const mergedPdf = await PDFDocument.create();
        for (const file of pdfFiles) {
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
            copiedPages.forEach((page) => mergedPdf.addPage(page));
        }

        const mergedPdfBytes = await mergedPdf.save();
        const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'merged.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(pdfFiles);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setPdfFiles(items);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: '.pdf' });

    return (
        <div className="merge_body">
            {pdfFiles.length === 0 && (
                <div>
                    <div className='banner-1 flex'>
                        <div className='tool-info w-1/2 flex align-middle'>
                            <div className='w-9/12 my-auto ms-auto'>
                                <p className='text-gray-400'>Tools / PDF Merger</p>
                                <br />
                                <h1 className='flex'>
                                    <span className='font-bold text-4xl'>PDF Merger</span><img src="/other/1-arrow.png" alt="" className='w-3/12' />
                                </h1>
                                <br />
                                <h3 className='text-slate-600' style={{ fontWeight: '600', letterSpacing: '0.2px' }}>
                                    An all-in-one online PDF editor that lets you edit text and add images, highlights, and hand annotations to your documents.
                                </h3>
                            </div>
                        </div>
                        <div className='drop_area w-1/2'>
                            <div {...getRootProps()} className='dropzone w-4/6 m-auto d-flex justify-content-center align-items-center mt-3 rounded'>
                                <input {...getInputProps()} />
                                <div>
                                    <div className='m-auto p-2 relative' style={{ backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='19' ry='19' stroke='%23C8F4FFFF' stroke-width='5' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`, borderRadius: '19px' }}>
                                        <img src="./other/merge-pdf.png" className='w-11/12 m-auto' alt="" />
                                        <span className='absolute w-max h-min top-1/3 bottom-0 m-auto left-0 right-0'>
                                            <button className="btn rounded-full" style={{ backgroundColor: "#181D39", color: "white" }}>Choose Files <div class="divider" style={{ height: "100%", backgroundColor: "white", width: "1px", padding: "0", margin: "0" }}></div> <i class="fa-solid fa-chevron-down"></i></button>
                                            <br />
                                            <p>Or Drop the files here ...</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='banner-2 w-9/12 m-auto'>
                        <h1 className='text-4xl my-12 font-bold'>Easy as it comes!</h1>
                        <div className='grid grid-cols-3 gap-7 m-auto'>
                            <div className='relative py-5 rounded-2xl z-3' style={{ backgroundColor: "#FFF8E4" }}>
                                <img src="/other/1-easy.png" alt="" className='w-3/6 m-auto' />
                                <p className='text-center my-3 text-xl text-slate-500' style={{ fontWeight: "600" }}>
                                    Upload Your <br /> Document
                                </p>
                            </div>
                            <div className='relative py-5 rounded-2xl z-2' style={{ backgroundColor: "#FFEEF8" }}>
                                <img src="/other/2-easy.png" alt="" className='w-3/6 m-auto' />
                                <p className='text-center my-3 text-xl text-slate-500' style={{ fontWeight: "600" }}>
                                    Edit & convert Your <br /> Document
                                </p>
                                <img src="/other/arrow_transfer.png" className='absolute top-0 bottom-0 m-auto w-1/4 h-max' alt="" style={{ left: "calc(-12%)" }} />
                            </div>
                            <div className='relative py-5 rounded-2xl z-1' style={{ backgroundColor: "#F2FFE5" }}>
                                <img src="/other/3-easy.png" alt="" className='w-3/6 m-auto' />
                                <p className='text-center my-3 text-xl text-slate-500' style={{ fontWeight: "600" }}>
                                    Download Your <br /> modified Document!
                                </p>
                                <img src="/other/arrow_transfer.png" className='absolute top-0 bottom-0 m-auto w-1/4 h-max' alt="" style={{ left: "calc(-12%)" }} />
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="merge_main_body">
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="pdfFiles" direction="horizontal">
                                {(provided) => (
                                    <div
                                        className="File_shown w-50 m-auto mb-5 d-flex"
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {pdfFiles.map((file, index) => (
                                            <Draggable key={file.name + index} draggableId={file.name + index} index={index}>
                                                {(provided) => (
                                                    <div
                                                        className="file_card shadow d-flex justify-content-around rounded-2 py-3 px-2 mx-5 my-3"
                                                        style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
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
                        {pdfFiles.length > 0 && (
                            <div className="merge_div overflow-hidden bg-white shadow d-flex flex-column position-fixed bottom-0 p-3 w-100">
                                <button className='m-auto border-0 rounded p-2 px-5 bg-danger' onClick={mergePDFs}>
                                    Merge PDFs
                                </button>
                                <span className='m-auto text-black text-opacity-75'>
                                    * Download Your Merged File From Here
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {pdfFiles.length > 0 && (
                <div className='selected flex' style={{ backgroundColor: "#FAFAFC" }}>
                    <div className='w-9/12 relative' style={{ height: "86vh" }}>
                        <div className="merge_main_body">
                            <DragDropContext onDragEnd={onDragEnd}>
                                <Droppable droppableId="pdfFiles" direction="horizontal">
                                    {(provided) => (
                                        <div
                                            className="w-10/12 grid grid-cols-4 mx-auto gap-4"
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                        >
                                            {pdfFiles.map((file, index) => (
                                                <Draggable key={file.name + index} draggableId={file.name + index} index={index}>
                                                    {(provided) => (
                                                        <div
                                                            className="file_card shadow d-flex justify-content-around rounded-2 m-2"
                                                            style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <div className='flex-col pb-2' style={{ padding: 0 }}>
                                                                <span className='flex justify-between'>{file.name} <button
                                                                    className='bg-transparent border-0 rounded'
                                                                    onClick={() => removeDoc(index)}
                                                                >
                                                                    {console.log(file)}
                                                                    <i className="fa-solid fa-xmark" ></i>
                                                                </button></span>
                                                                <div className='show-pdfs'><PdfViewer url={file}/></div>
                                                            </div>
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
                        <div className='absolute right-0' style={{ top: "10%" }}>
                            <label htmlFor="fileInput" className='rounded-full p-2 px-3' style={{ backgroundColor: "#181D39", color: "white" }}>
                                <i className="fa-solid fa-plus" style={{color:"white"}}></i>
                            </label>
                            <input id="fileInput" type="file" {...getInputProps()} style={{ display: "none" }} />
                        </div>
                    </div>
                    <div className='w-3/12 bg-white relative right-0 rounded-2xl py-3 px-1 m-9' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", height: "75vh" }}>
                        <h1 className='text-center text-3xl'>Merge PDF</h1>
                        <hr className='my-4 w-10/12 mx-auto' />
                        <div className='bottom-4 absolute w-100 flex-col'>
                            <div className='w-100 flex'>
                                <button className='m-auto border-0 rounded p-3 px-5' onClick={mergePDFs} style={{ backgroundColor: "#181D39", color: "white" }}>
                                    Merge PDFs
                                </button>
                            </div>
                            <p className='w-100 text-black text-center text-opacity-75'>
                                * Download Your Merged File From Here
                            </p>
                        </div>
                    </div>
                </div>

            )}
           
        </div>
    );
};

export default MergePDFPages;
