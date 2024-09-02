import React, { useEffect, useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDropzone } from 'react-dropzone';
import PDFViewer from './test';
import { type } from 'jquery';

const SplitPdf = () => {
    const [pdfFiles, setPdfFiles] = useState([]);
    const [splitrange, setsplitrange] = useState({ min: 1, max: 1 })
    const [restrct,setrestrict]=useState({min:1,max:1})
    

    const minvaluepage = (e) => {

        setsplitrange((prevval) => {
            return {
                min: JSON.parse(e.target.value), max: JSON.parse(prevval.max)
            }
        })
    }
    const onDrop = (acceptedFiles) => {
        setPdfFiles([...pdfFiles, ...acceptedFiles]);
    };
    const maxvaluepage = (e) => {
        console.log(e.target.value.length);
        if (e.target.value == "" || e.target.value == 0) {
            e.target.value = 1
        }

        setsplitrange((prevval) => {
            console.log(e.target.value.length);
            if (prevval.max == 1 && e.target.value.length !== 0) {
                e.target.value = e.target.value % 10
            }
            if(e.target.value<1){
                return {
                    min: JSON.parse(prevval.min),
                    max: 1
                } 
            }
            else if(e.target.value>restrct.max){
                return {
                    min: JSON.parse(prevval.min),
                    max: JSON.parse(restrct.max)
                } 
            }
            return {
                min: JSON.parse(prevval.min),
                max: JSON.parse(e.target.value)
            }
        })
        console.log(restrct);
    }

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        // files=console.log([...files]);
        setPdfFiles([...pdfFiles, ...files]);
        e.target.value = null;

    };

    const removeDoc = (id) => {
        setPdfFiles((prevFiles) => prevFiles.filter((_, index) => index !== id));
    };

    const getinfo=async(file)=>{
        for (const file of pdfFiles) {
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            const copiedPages = await pdfDoc.getPageCount()
            console.log(copiedPages);
            setrestrict((prevval) => {
                return {
                    min:1,
                    max: JSON.parse(copiedPages)
                }
            })
            
        }
        }
    

    const splitPDFs = async () => {
        if (pdfFiles.length == 0) {
            alert('Please select at least two PDF files.');
        }

        const mergedPdf = await PDFDocument.create();
        for (const file of pdfFiles) {
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
            console.log();

            copiedPages.forEach((page, inde) => { if (inde >= splitrange.min - 1 && inde < splitrange.max) { mergedPdf.addPage(page) } });
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

useEffect(()=>{
    getinfo()
},[pdfFiles])
     const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: '.pdf' });
    return (
        <>
            <div className="mian-body d-flex">
            {pdfFiles.length === 0 && (
                <div>
                    <div className='banner-1 flex'>
                        <div className='tool-info w-1/2 flex align-middle'>
                            <div className='w-9/12 my-auto ms-auto'>
                                <p className='text-gray-400'>Tools / PDF Spliter</p>
                                <br />
                                <h1 className='flex'>
                                    <span className='font-bold text-4xl'>PDF Spliter</span><img src="/other/1-arrow.png" alt="" className='w-3/12' />
                                </h1>
                                <br />
                                <h3 className='text-slate-600' style={{ fontWeight: '600', letterSpacing: '0.2px' }}>
                                    An all-in-one online PDF editor that lets you edit text and add images, highlights, and hand annotations to your documents.
                                </h3>
                            </div>
                        </div>
                        <div className='drop_area w-1/2'>
                            <div {...getRootProps()} className='dropzone w-4/6 m-auto d-flex justify-content-center align-items-center mt-3 rounded'>
                                <input {...getInputProps() } />
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
                        <DragDropContext onDragEnd={onDragEnd} direction="horizontal">
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
            
            {pdfFiles.length>0 && (
                <>
                    <div className="merge_body w-75">
                   
                   <div className="merge_main_body">
                      
                       <DragDropContext onDragEnd={onDragEnd}>
                           <Droppable droppableId="pdfFiles" direction="horizontal" >
                               {(provided) => (
                                   <div
                                       className="w-10/12 grid grid-cols-4 mx-auto gap-4"
                                       {...provided.droppableProps}
                                       ref={provided.innerRef}
                                       style={{ paddingBottom: "30px" }}
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
                                                    
                                                       <span>{file.name}</span>
                                                       <div className='show-pdfs'><PDFViewer url={file}/></div>
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
                   
               </div>
               <div className="merge-info  w-25 shadow pt-5 px-3" style={{ height: '92.5vh' }}>
                       <h2 className='text-center pb-3 border-bottom'>
                           Split PDF
                       </h2>
                   <div className=" pt-5">
                       <label htmlFor="minvaluepage">From</label>
                   <input type="number" className='w-25 mx-1 minvaluepage' value={splitrange.min} onChange={minvaluepage} />
                       <label htmlFor="maxvaluepage">to</label>
                   <input type="number" className='w-25 mx-1 maxvaluepage' value={splitrange.max} onChange={maxvaluepage} />
                   <div className="merge_div bg-white d-flex flex-column mt-5 bottom-0 left-0">
                       <button className='m-auto border-0 rounded p-2 px-5 bg-danger' onClick={splitPDFs}>
                           Merge PDFs
                       </button>
                       <span className='m-auto text-black text-opacity-75'>
                           * Download Your Merged File From Here
                       </span>

                   </div>
                   </div>
               </div>
                </>
            )}
            </div>
        </>
    );
};

export default SplitPdf;
