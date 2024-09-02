// import React, { useState } from 'react';
// 

// // Mocked compressPDF function (replace this with your actual compressPDF function)
// const compressPDF = async (arrayBuffer, quality) => {
//     // Simulate a delay for compression
//     await new Promise(resolve => setTimeout(resolve, 500));

//     // Return the same arrayBuffer for the sake of this example
//     return arrayBuffer;
// };

// const ComPDF = () => {
//     const [pdfFiles, setPdfFiles] = useState([]);

//     const handleFileChange = (e) => {
//         const files = Array.from(e.target.files);
//         setPdfFiles([...pdfFiles, ...files]);
//         e.target.value = null;
//     };

//     const removeDoc = (id) => {
//         setPdfFiles((prevFiles) => prevFiles.filter((_, index) => index !== id));
//     };

//     const compressFiles = async () => {
//         if (pdfFiles.length === 0) {
//             alert('Please select at least one PDF file.');
//             return;
//         }

//         try {
//             for (const file of pdfFiles) {
//                 const arrayBuffer = await file.arrayBuffer();
//                 const compressedPdfBytes = await compressPDF(arrayBuffer, 0.2); // Assuming 0.8 is the quality parameter

//                 if (compressedPdfBytes) {
//                     const blob = new Blob([compressedPdfBytes], { type: 'application/pdf' });
//                     const url = URL.createObjectURL(blob);

//                     const link = document.createElement('a');
//                     link.href = url;
//                     link.setAttribute('download', `compressed_${file.name}`);
//                     document.body.appendChild(link);
//                     link.click();
//                     document.body.removeChild(link);
//                 } else {
//                     throw new Error('Compression returned an empty result.');
//                 }
//             }
//         } catch (error) {
//             console.error('Error compressing PDF: ', error);
//         }
//     };


//     return (

//     );
// };

// export default ComPDF;



// ComPDF.js
import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const ComPDF = () => {
    const [pdfFile, setPdfFile] = useState(null);
    const [compressedPdfUrl, setCompressedPdfUrl] = useState('');
    const [comlvls, setcomlvls] = useState(0.5)
    const handleFileChange = (event) => {
        setPdfFile(event.target.files[0]);
    };

    const compressPdf = async () => {
        if (!pdfFile) return;

        const fileReader = new FileReader();
        fileReader.onload = async (e) => {
            const arrayBuffer = e.target.result;

            const pdfDoc = await PDFDocument.load(arrayBuffer);

            const pages = pdfDoc.getPages();
            pages.forEach(page => {
                console.log(comlvls);
                const { width, height } = page.getSize();
                page.scale(0.9, 0.9);  // Example of scaling down
            });

            // Save the compressed PDF
            const compressedPdfBytes = await pdfDoc.save();

            // Create a blob URL for the compressed PDF
            const blob = new Blob([compressedPdfBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            setCompressedPdfUrl(url);
        };

        fileReader.readAsArrayBuffer(pdfFile);
    };
    const comlvl = (lvl) => {
        if (lvl == 'High_com') {
            setcomlvls(0.3)
        }
        else if (lvl == 'med_com') {
            setcomlvls(0.5)
        }
        else if (lvl == 'low_com') {
            setcomlvls(0.7)
        }
        console.log(comlvls);
    }
    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(pdfFile);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setPdfFile(items);
    };

    return (
        <>
            <div className='d-flex'>


                <div className="merge_body w-75">
                    <div className="merge_header">
                        <h2 className="text-center mt-5">Compress PDF file</h2>
                        <h5 className="text-center text-black text-opacity-75 w-75 m-auto">
                            Reduce file size while optimizing for maximal PDF quality.
                        </h5>
                    </div>
                    <div className="merge_main_body">
                        <div className="w-100 d-flex">
                            <label className="p-5 m-auto mt-3 py-3 bg-danger rounded" htmlFor="File_select">
                                Select File Here
                            </label>

                            <input
                                type="file"
                                id="File_select"
                                onChange={handleFileChange}
                                multiple
                                accept=".pdf"
                                style={{ display: 'none' }}
                            />

                        </div>
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="pdfFiles">
                                {(provided) => (
                                    <div
                                        className="File_shown w-50 m-auto mb-5"
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{ paddingBottom: '30px' }}
                                    >
                                        
                                           
                                           {pdfFile && 
                                                    <div
                                                        className="file_card shadow d-flex justify-content-around rounded-2 py-3 px-2 mx-5 my-3"
                                                        style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <span>{pdfFile.name}</span>
                                                        <button
                                                            className="bg-transparent border-0 rounded"
                                                            onClick={() => removeDoc(index)}
                                                        >
                                                            <i className="fa-solid fa-xmark"></i>
                                                        </button>
                                                    </div>}
                                          
                                           
                                        
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>

                    </div>
                </div>



                <div className="merge-info  w-25 shadow pt-5 px-3" style={{ height: '92.5vh' }}>
                    <h2 className='text-center pb-3 border-bottom'>
                        Compress PDF
                    </h2>
                    <div className=" pt-5">

                        {/* <form action="">
                            <label className='d-flex'>
                                <div className='w-75'>
                                    <span>Higest Compress</span>
                                    <h6>Less Quality,high Compression</h6>
                                </div>
                                <input type="radio" className='High_com' onChange={() => comlvl('High_com')} name='compress' selected />
                            </label>
                            <label className='d-flex'>
                                <div className='w-75'>
                                    <span>Medium Compress</span>
                                    <h6>Medium Quality,Medium Compression</h6>
                                </div>
                                <input type="radio" className='med_com' defaultChecked onChange={() => comlvl('med_com')} name='compress' selected />
                            </label>
                            <label className='d-flex'>
                                <div className='w-75'>
                                    <span>Low Compress</span>
                                    <h6>High Quality,Less Compression</h6>
                                </div>
                                <input type="radio" className='low_com' onChange={() => comlvl('low_com')} name='compress' selected />
                            </label>

                        </form> */}
                        {pdfFile && (
                            <div className="merge_div overflow-hidden d-flex flex-column position-fixed bottom-0 p-3 w-75">
                                <button className="w-25 border-0 rounded p-2 px-5 bg-danger" onClick={compressPdf}>Compress PDF</button>
                                <span className="m-auto text-black text-opacity-75">
                                    * Download Your Compressed Files From Here
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {
                compressedPdfUrl && <div className='w-75 position-fixed  text-center bottom-0 left-0 right-0 z-3 d-flex justify-content-center align-items-center py-4' >
                    <div>
                        <h2>Your file is Ready For download</h2>
                        <a href={compressedPdfUrl} download="compressed.pdf"><button className="m-auto border-0 rounded p-2 px-5 bg-danger" >
                            Download PDF
                        </button></a>
                    </div>
                </div>
            }
        </>
    );
};

export default ComPDF;
