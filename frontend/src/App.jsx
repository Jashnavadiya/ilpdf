import React from 'react'
import ReactDOM from 'react-dom'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Navbar from './navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();
import MergePDFPages from './merge'
import Home from './home'
import Split from './split'
import ComPDF from './compress'
import WordToPdfConverter from './Wordtopdf'
import PDFViewer from './test'
import ExcelToPdfConverter from './Exceltopdf'
import PowerPointToPdfConverter from './Powertopdf'
import ImageToPDFConverter from './Jpgtopdf'
import PasswordProtectPDF from './protect'
import SecurePDF from './protect'
import Aos from 'aos'
const App = () => {
  Aos.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  const router = createBrowserRouter([
    {
      path:"/", 
      element: <><Navbar/><Home/></>
    },
    {
      path:"/merge",
      element: <><Navbar/><MergePDFPages/></>
    },
    {
      path:"/split",
      element: <><Navbar/><Split/></>
    },
    {
      path:"/Compress",
      element: <><Navbar/><ComPDF/></>
    },
    {
      path:"/wordToPdf",
      element: <><Navbar/><WordToPdfConverter/></>
    },
    {
      path:"/excelToPdf",
      element: <><Navbar/><ExcelToPdfConverter/></>
    },
    {
      path:"/powerToPdf",
      element: <><Navbar/><PowerPointToPdfConverter/></>
    },
    {
      path:"/jpgToPdf",
      element: <><Navbar/><ImageToPDFConverter/></>
    },
    {
      path:"/protectpdf",
      element: <><Navbar/><SecurePDF/></>
    }
    ,
    {
      path:"/test",
      element: <><Navbar/><PDFViewer/></>
    }
  ])
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App