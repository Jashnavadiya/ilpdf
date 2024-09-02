import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <div  
   className='main_body  w-10/12 m-auto'>
                <div  className='banner-1  flex'>
                    <div data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="700" className='w-6/12 flex align-middle'>
                        <div className='m-auto px-2'>

                            <br />
                            <h1 className='flex flex-column '>
                                <span className='w-12/12 font-bold text-5xl'>An ideal PDF editor, </span>
                                <span className='flex w-12/12  font-bold text-5xl'>

                                    found at last<img src="/other/1-arrow.png" alt="" className='w-4/12' />
                                </span>


                            </h1>
                            <h3 className='text-slate-600 w-10/12 text-2xl' style={{ fontWeight: '600', letterSpacing: '0.2px' }}>
                                With Fizz Wizard You can convert, edit and work with pdf tools online.Without any  programs!
                            </h3>
                            <button className="btn mt-3 w-3/12 rounded-full" style={{ backgroundColor: "#181D39", color: "white" }}>Learn More</button>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="700" className='w-6/12 '>
                        <div className='w-11/12 m-auto p-2' >
                            <img src="./other/main-hi.png" className='w-12/12 m-auto' alt="" />
                        </div>
                    </div>
                </div>
                <br />
                <br /><br /><br />
                <div data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="500" className='banner-2'>
                    <h2 className='flex'><span className='text-5xl font-bold'>Our Most Popular Tools&nbsp;</span><img src="/other/2-arrow.png" className='h-20' alt="" /></h2>
                    <div className='mt-4 grid grid-cols-3 gap-4'>
                        <div data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="500" className=' m-1 rounded-3xl align-bottom flex justify-between p-2' style={{ backgroundColor: "#ECFBFF" }}>
                            <div className='relative w-3/12 h-1/6' style={{}}>
                                <img src="/other/sp_blue.png" className='absolute w-10' alt="" style={{ top: "", left: '' }} />
                                <img src="/other/word.png" className='w-16 mx-4 mt-4 mb-3' alt="" style={{}} />

                            </div>
                            <div className="relative w-8/12 flex justify-around align-middle">
                                <span className='h-min w-12/12 my-auto text-3xl font-bold' style={{fontWeight:"500"}}>
                                   PDF To Word
                                </span>
                                <span className='h-min w-12/12 my-auto'><i class="fa-solid fa-chevron-right"></i></span>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="500" className='w-12/12 m-1 rounded-3xl align-bottom flex justify-between p-2' style={{ backgroundColor: "#FFEEF8" }}>
                            <div className='relative w-3/12 h-1/6' style={{}}>
                                <img src="/other/sp_pink.png" className='absolute w-10' alt="" style={{ top: "", left: '' }} />
                                <img src="/other/divide.png" className='w-16 mx-4 mt-4 mb-3' alt="" style={{}} />

                            </div>
                            <div className="relative w-8/12 flex justify-around align-middle">
                                <span className='h-min w-12/12 my-auto text-3xl font-bold' style={{fontWeight:"500"}}>
                                   Divide PDF
                                </span>
                                <span className='h-min w-12/12 my-auto'><i class="fa-solid fa-chevron-right"></i></span>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="500" className='w-12/12 m-1 rounded-3xl align-bottom flex justify-between p-2' style={{ backgroundColor: "#F2FFE5" }}>
                            <div className='relative w-3/12 h-1/6' style={{}}>
                                <img src="/other/sp_green.png" className='absolute w-10' alt="" style={{ top: "", left: '' }} />
                                <img src="/other/edit.png" className='w-16 mx-4 mt-4 mb-3' alt="" style={{}} />

                            </div>
                            <div className="relative w-8/12 flex justify-around align-middle">
                                <span className='h-min w-12/12 my-auto text-3xl font-bold' style={{fontWeight:"500"}}>
                                   Edit PDF
                                </span>
                                <span className='h-min w-12/12 my-auto'><i class="fa-solid fa-chevron-right"></i></span>
                            </div>
                        </div>
                        <div data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="500" className='w-12/12 m-1 rounded-3xl align-bottom flex justify-between p-2' style={{ backgroundColor: "#FFF6E4" }}>
                            <div className='relative w-3/12 h-1/6' style={{}}>
                                <img src="/other/sp_orange.png" className='absolute w-10' alt="" style={{ top: "", left: '' }} />
                                <img src="/other/jpg.png" className='w-16 mx-4 mt-4 mb-3' alt="" style={{}} />

                            </div>
                            <div className="relative w-8/12 flex justify-around align-middle">
                                <span className='h-min w-12/12 my-auto text-3xl font-bold' style={{fontWeight:"500"}}>
                                   PDF To JPG
                                </span>
                                <span className='h-min w-12/12 my-auto'><i class="fa-solid fa-chevron-right"></i></span>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="500" className='w-12/12 m-1 rounded-3xl align-bottom flex justify-between p-2' style={{ backgroundColor: "#FFEEEE" }}>
                            <div className='relative w-3/12 h-1/6' style={{}}>
                                <img src="/other/sp_red.png" className='absolute w-10' alt="" style={{ top: "", left: '' }} />
                                <img src="/other/add.png" className='w-16 mx-4 mt-4 mb-3' alt="" style={{}} />

                            </div>
                            <div className="relative w-8/12 flex justify-around align-middle">
                                <span className='h-min w-12/12 my-auto text-3xl ' style={{fontWeight: `500`}}>
                                  Join PDF
                                </span>
                                <span className='h-min w-12/12 my-auto'><i class="fa-solid fa-chevron-right"></i></span>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="500" className='w-12/12 m-1 rounded-3xl align-bottom flex justify-between p-2' style={{ backgroundColor: "#E4FFFA" }}>
                            <div className='relative w-3/12 h-1/6' style={{}}>
                                <img src="/other/sp_cyan.png" className='absolute w-10' alt="" style={{ top: "", left: '' }} />
                                <img src="/other/sign.png" className='w-16 mx-4 mt-4 mb-3' alt="" style={{}} />

                            </div>
                            <div className="relative w-8/12 flex justify-around align-middle">
                                <span className='h-min w-12/12 my-auto text-3xl font-bold' style={{fontWeight:"500"}}>
                                   Sign PDF
                                </span>
                                <span className='h-min w-12/12 my-auto'><i class="fa-solid fa-chevron-right"></i></span>
                            </div>
                        </div>
                       
                    </div>
                       <br />

  </div>

                {/* <div className='main_cards w-75 m-auto d-flex flex-row justify-content-left mt-4 flex-wrap'>
                <Link className='text-decoration-none mx-1 ' to='/merge' style={{width:"calc(100%/6)"}}>
                <div className="card  px-4 py-2  pb-5 h-100" >
                        <div className="img_card ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50"><g fill="rgb(93.333333%,42.352941%,30.196078%)" fill-rule="evenodd"><path d="M5.488.363h21.75c1.78 0 2.43.184 3.082.535a3.66 3.66 0 0 1 1.512 1.512c.348.652.535 1.297.535 3.082v21.746c0 1.78-.187 2.43-.535 3.082a3.66 3.66 0 0 1-1.512 1.512c-.652.348-1.3.535-3.082.535H5.488c-1.78 0-2.43-.187-3.082-.535A3.66 3.66 0 0 1 .895 30.32c-.348-.652-.535-1.3-.535-3.082V5.488c0-1.78.188-2.43.535-3.082A3.71 3.71 0 0 1 2.406.895c.652-.348 1.3-.53 3.082-.53zm0 0"></path><path d="M44.563 49.69H22.816c-1.78 0-2.43-.184-3.082-.535-.645-.34-1.172-.867-1.512-1.512-.348-.652-.535-1.297-.535-3.082V22.816c0-1.78.184-2.43.535-3.082.34-.645.867-1.172 1.512-1.512.652-.348 1.3-.535 3.082-.535h21.746c1.785 0 2.43.188 3.082.535.645.34 1.172.867 1.512 1.512.352.652.535 1.3.535 3.082v21.746c0 1.785-.184 2.43-.535 3.082-.34.645-.867 1.172-1.512 1.512-.652.352-1.297.535-3.082.535zm0 0"></path></g><path d="M17.906 10.965c-.484 0-.875.387-.875.86v3.8L9.84 8.523c-.344-.336-.895-.336-1.238 0-.164.16-.254.38-.254.605a.86.86 0 0 0 .254.6l7.195 7.098h-3.875c-.484 0-.875.387-.875.86s.4.86.875.86h5.984a.88.88 0 0 0 .332-.066.86.86 0 0 0 .473-.465.79.79 0 0 0 .066-.328v-5.87c.004-.473-.387-.86-.87-.86zm14.418 28.008c.48 0 .87-.383.87-.86v-3.797l7.195 7.098a.88.88 0 0 0 1.234 0 .85.85 0 0 0 .258-.605c0-.23-.094-.45-.258-.605l-7.2-7.102h3.875c.484 0 .875-.383.875-.86s-.4-.855-.875-.855h-5.984a.92.92 0 0 0-.336.066c-.2.086-.383.25-.473.46a.88.88 0 0 0-.066.328v5.87c0 .477.4.86.875.86zm-10.1-10.1c-.355.352-.93.352-1.285 0s-.355-.934 0-1.3a.91.91 0 0 1 1.285 0c.355.352.355.934 0 1.3zm3.374-3.357a.91.91 0 0 1-1.285 0 .91.91 0 0 1 0-1.285c.352-.352.93-.352 1.285 0a.91.91 0 0 1 0 1.285zm3.36-3.364a.91.91 0 0 1-1.285 0 .91.91 0 0 1 0-1.285.91.91 0 0 1 1.285 0 .91.91 0 0 1 0 1.285zm0 0" fill="rgb(100%,100%,100%)"></path></svg>
                        </div>
                        <h3 className="heading_card">
                            Merge PDF
                        </h3>
                        <h5 className='content_card  text-secondary' style={{fontSize:'13px'}}>
                        Combine PDFs in the order you want with the easiest PDF merger available.
                        </h5>
                    </div>
                </Link>
                <Link className='text-decoration-none mx-1' to='/split' style={{width:"calc(100%/6)"}}>
                <div className="card px-4 py-2 h-100 pb-5 " >
                        <div className="img_card ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50"><g fill="rgb(93.333333%,42.352941%,30.196078%)" fill-rule="evenodd"><path d="M5.488.363h21.75c1.78 0 2.43.184 3.082.535a3.66 3.66 0 0 1 1.512 1.512c.348.652.535 1.297.535 3.082v21.746c0 1.78-.187 2.43-.535 3.082a3.66 3.66 0 0 1-1.512 1.512c-.652.348-1.3.535-3.082.535H5.488c-1.78 0-2.43-.187-3.082-.535A3.66 3.66 0 0 1 .895 30.32c-.348-.652-.535-1.3-.535-3.082V5.488c0-1.78.188-2.43.535-3.082A3.71 3.71 0 0 1 2.406.895c.652-.348 1.3-.53 3.082-.53zm0 0"></path><path d="M44.563 49.69H22.816c-1.78 0-2.43-.184-3.082-.535-.645-.34-1.172-.867-1.512-1.512-.348-.652-.535-1.297-.535-3.082V22.816c0-1.78.184-2.43.535-3.082.34-.645.867-1.172 1.512-1.512.652-.348 1.3-.535 3.082-.535h21.746c1.785 0 2.43.188 3.082.535.645.34 1.172.867 1.512 1.512.352.652.535 1.3.535 3.082v21.746c0 1.785-.184 2.43-.535 3.082-.34.645-.867 1.172-1.512 1.512-.652.352-1.297.535-3.082.535zm0 0"></path></g><path d="M9.22 15.87c.484 0 .875-.387.875-.86v-3.8l7.195 7.102a.88.88 0 0 0 1.234 0 .85.85 0 0 0 0-1.215L11.328 10h3.875c.484 0 .875-.387.875-.86s-.4-.86-.875-.86H9.22a.88.88 0 0 0-.332.066.86.86 0 0 0-.539.793v5.875c0 .473.4.86.87.86zm31.793 18.2c-.484 0-.875.383-.875.855v3.8L32.94 31.63a.88.88 0 0 0-1.234 0c-.164.156-.258.375-.258.605a.85.85 0 0 0 .258.605l7.2 7.1H35.02c-.48 0-.87.387-.87.86a.86.86 0 0 0 .871.855H41a.88.88 0 0 0 .805-.527.86.86 0 0 0 .066-.328v-5.883a.87.87 0 0 0-.87-.855zm-18.78-5.187c-.355.352-.93.352-1.285 0s-.355-.934 0-1.3a.91.91 0 0 1 1.285 0c.355.352.355.934 0 1.3zm3.365-3.367a.91.91 0 0 1-1.285 0 .91.91 0 0 1 0-1.285c.352-.352.93-.352 1.285 0a.91.91 0 0 1 0 1.285zm3.36-3.364a.91.91 0 0 1-1.285 0 .91.91 0 0 1 0-1.285.91.91 0 0 1 1.285 0 .91.91 0 0 1 0 1.285zm0 0" fill="rgb(100%,100%,100%)"></path></svg></div>
                        <h3 className="heading_card">
                            Split PDF
                        </h3>
                        <h5 className='content_card  text-secondary' style={{fontSize:'13px'}}>
                        Separate one page or a whole set for easy conversion into independent PDF files.
                        </h5>
                    </div>
                </Link>
                <Link className='text-decoration-none mx-1' to='/compress' style={{width:"calc(100%/6)"}}>
                <div className="card h-100 px-4 py-2  pb-5 " >
                        <div className="img_card ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50"><path d="M31.523 28h14.953c1.223 0 1.668.13 2.117.367.44.234.805.598 1.04 1.04.242.45.367.895.367 2.117v14.953c0 1.223-.13 1.668-.367 2.117-.234.44-.598.805-1.04 1.04-.45.242-.895.367-2.117.367H31.523c-1.223 0-1.668-.13-2.117-.367-.44-.234-.805-.598-1.04-1.04-.242-.45-.367-.895-.367-2.117V31.523c0-1.223.13-1.668.367-2.117.234-.44.598-.805 1.04-1.04.45-.242.895-.367 2.117-.367zm0-28h14.953c1.223 0 1.668.13 2.117.367.44.234.805.598 1.04 1.04.242.45.367.895.367 2.117v14.953c0 1.223-.13 1.668-.367 2.117-.234.44-.598.805-1.04 1.04-.45.242-.895.367-2.117.367H31.523c-1.223 0-1.668-.13-2.117-.367-.44-.234-.805-.598-1.04-1.04-.242-.45-.367-.895-.367-2.117V3.523c0-1.223.13-1.668.367-2.117.234-.44.598-.805 1.04-1.04C29.855.125 30.3 0 31.523 0zm-28 28h14.953c1.223 0 1.668.13 2.117.367.44.234.805.598 1.04 1.04.242.45.367.895.367 2.117v14.953c0 1.223-.13 1.668-.367 2.117-.234.44-.598.805-1.04 1.04-.45.242-.895.367-2.117.367H3.523c-1.223 0-1.668-.13-2.117-.367-.44-.234-.805-.598-1.04-1.04C.125 48.145 0 47.7 0 46.477V31.523c0-1.223.13-1.668.367-2.117.234-.44.598-.805 1.04-1.04.45-.242.895-.367 2.117-.367zm0-28h14.953c1.223 0 1.668.13 2.117.367.44.234.805.598 1.04 1.04.242.45.367.895.367 2.117v14.953c0 1.223-.13 1.668-.367 2.117-.234.44-.598.805-1.04 1.04-.45.242-.895.367-2.117.367H3.523c-1.223 0-1.668-.13-2.117-.367-.44-.234-.805-.598-1.04-1.04C.125 20.145 0 19.7 0 18.477V3.523C0 2.3.13 1.852.367 1.406A2.56 2.56 0 0 1 1.406.367C1.855.13 2.3 0 3.523 0zm0 0" fill-rule="evenodd" fill="rgb(56.078431%,73.72549%,36.470588%)"></path><path d="M35 41.8c0 .48.398.867.883.867a.88.88 0 0 0 .883-.867v-3.844l5.145 5.05a.89.89 0 0 0 1.246 0 .85.85 0 0 0 .262-.613c0-.23-.094-.45-.262-.613l-5.14-5.047h3.914a.88.88 0 0 0 .883-.867c0-.48-.395-.867-.883-.867h-6.05c-.117 0-.23.023-.34.066-.215.086-.387.258-.477.47-.047.102-.066.22-.066.328zm7.3-26.387c.48 0 .867-.398.867-.883a.88.88 0 0 0-.867-.883h-3.844l5.05-5.14a.9.9 0 0 0 0-1.25.86.86 0 0 0-1.227 0l-5.047 5.148V8.492c0-.488-.39-.883-.867-.883a.87.87 0 0 0-.867.879v6.05c0 .113.023.23.066.336.086.215.254.387.47.477.105.047.215.07.332.07H42.3zM8.46 35c-.48 0-.867.398-.867.883s.387.883.867.883h3.844L7.254 41.9c-.34.348-.34.902 0 1.25a.86.86 0 0 0 .613.258c.23 0 .45-.094.613-.258l5.047-5.145v3.914c0 .488.387.883.867.883s.867-.402.867-.883v-6.05c0-.113-.023-.23-.066-.336-.086-.215-.258-.387-.47-.477a.82.82 0 0 0-.332-.07H8.46zm6.074-27.406c-.488 0-.883.387-.883.867v3.844l-5.145-5.05a.9.9 0 0 0-1.25 0A.86.86 0 0 0 7 7.867c0 .23.094.45.258.613l5.145 5.047H8.488c-.488 0-.883.387-.883.867s.402.867.883.867h6.05a.89.89 0 0 0 .336-.066c.215-.1.39-.258.477-.47.05-.102.07-.22.07-.332V8.46c0-.48-.395-.867-.883-.867zm0 0" fill="rgb(100%,100%,100%)"></path></svg></div>
                        <h3 className="heading_card">
                            Compress PDF
                        </h3>
                        <h5 className='content_card  text-secondary' style={{fontSize:'13px'}}>
                        Reduce file size while optimizing for maximal PDF quality.
                        </h5>
                    </div>
                </Link>
                <Link className='text-decoration-none mx-1' to='/compress' style={{width:"calc(100%/6)"}}>
                <div className="card h-100 px-4 py-2  pb-5 " >
                        <div className="img_card ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50"><path d="M17.676 34.344h9.55c2.477 0 3.375-.258 4.28-.742a5.04 5.04 0 0 0 2.098-2.102c.484-.902.742-1.8.742-4.277v-9.547H44.82c1.8 0 2.453.188 3.113.54s1.176.87 1.527 1.527.54 1.31.54 3.113V44.82c0 1.8-.187 2.453-.54 3.113a3.69 3.69 0 0 1-1.527 1.527c-.66.352-1.312.54-3.113.54H22.855c-1.8 0-2.453-.187-3.113-.54s-1.172-.87-1.527-1.527-.54-1.312-.54-3.113zm0 0" fill-rule="evenodd" fill="rgb(37.254902%,51.372549%,77.647059%)"></path><path d="M43.94 37.137c0-.477-.395-.863-.883-.863s-.883.387-.883.863v3.844l-5.145-5.047c-.348-.34-.902-.34-1.25 0a.85.85 0 0 0-.258.609.86.86 0 0 0 .258.613l5.145 5.05h-3.914c-.488 0-.883.387-.883.867s.395.867.883.867h6.05c.113-.004.227-.023.336-.07a.87.87 0 0 0 .477-.465c.05-.105.066-.22.066-.332l.004-5.934zm0 0" fill="rgb(100%,100%,100%)"></path><path d="M27.145 32.324H5.18c-1.8 0-2.453-.187-3.113-.543S.89 30.914.54 30.254 0 28.95 0 27.145V5.18c0-1.8.188-2.453.54-3.113A3.69 3.69 0 0 1 2.066.539C2.727.188 3.38 0 5.18 0h21.965c1.8 0 2.453.188 3.113.54s1.172.87 1.527 1.527.54 1.313.54 3.113v21.965c0 1.8-.187 2.453-.54 3.113s-.87 1.176-1.527 1.527-1.312.54-3.113.54zm0 0" fill-rule="evenodd" fill="rgb(86.27451%,89.803922%,98.039216%)"></path><path d="M20.844 8.61h2.96l-2.94 14.64H17.77l-1.777-9.035-1.824 9.035h-3.203L8.04 8.61h3.164l1.508 9.363 1.938-9.363h3.004l.04.203 1.688 9.1zm0 0" fill="rgb(16.078431%,34.117647%,58.431373%)"></path></svg></div>
                        <h3 className="heading_card">
                            Word to PDF
                        </h3>
                        <h5 className='content_card  text-secondary' style={{fontSize:'13px'}}>
                        Make DOC and DOCX files easy to read by converting them to PDF.
                        </h5>
                    </div>
                </Link>
                <Link className='text-decoration-none mx-1' to='/compress' style={{width:"calc(100%/6)"}}>
                <div className="card h-100 px-4 py-2  pb-5 " >
                        <div className="img_card ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50"><path d="M17.676 34.344h9.55c2.477 0 3.375-.258 4.28-.742a5.04 5.04 0 0 0 2.098-2.102c.484-.902.742-1.8.742-4.277v-9.547H44.82c1.8 0 2.453.188 3.113.54s1.176.87 1.527 1.527.54 1.31.54 3.113V44.82c0 1.8-.187 2.453-.54 3.113a3.69 3.69 0 0 1-1.527 1.527c-.66.352-1.312.54-3.113.54H22.855c-1.8 0-2.453-.187-3.113-.54s-1.172-.87-1.527-1.527-.54-1.312-.54-3.113zm0 0" fill-rule="evenodd" fill="rgb(36.862745%,63.137255%,38.431373%)"></path><path d="M43.94 37.137c0-.477-.395-.863-.883-.863s-.883.387-.883.863v3.844l-5.145-5.047c-.348-.34-.902-.34-1.25 0a.85.85 0 0 0-.258.609.86.86 0 0 0 .258.613l5.145 5.05h-3.914c-.488 0-.883.387-.883.867s.395.867.883.867h6.05c.113-.004.227-.023.336-.07a.87.87 0 0 0 .477-.465c.05-.105.066-.22.066-.332l.004-5.934zm0 0" fill="rgb(100%,100%,100%)"></path><g fill-rule="evenodd"><path d="M27.145 32.324H5.18c-1.8 0-2.453-.187-3.113-.543S.89 30.914.54 30.254 0 28.95 0 27.145V5.18c0-1.8.188-2.453.54-3.113A3.69 3.69 0 0 1 2.066.539C2.727.188 3.38 0 5.18 0h21.965c1.8 0 2.453.188 3.113.54s1.172.87 1.527 1.527.54 1.313.54 3.113v21.965c0 1.8-.187 2.453-.54 3.113s-.87 1.176-1.527 1.527-1.312.54-3.113.54zm0 0" fill="rgb(76.078431%,89.803922%,76.470588%)"></path><path d="M19.11 23.5l-2.508-4.72c-.102-.176-.195-.5-.3-.973h-.04c-.047.223-.16.56-.336 1.012L13.4 23.5H9.5l4.64-7.25L9.895 9h3.992l2.082 4.348c.164.344.313.754.438 1.227h.04c.082-.285.234-.703.457-1.266L19.22 9h3.66l-4.37 7.19L23 23.5zm0 0" fill="rgb(18.039216%,44.705882%,21.568627%)"></path></g></svg></div>
                        <h3 className="heading_card">
                            Excel to PDF
                        </h3>
                        <h5 className='content_card  text-secondary' style={{fontSize:'13px'}}>
                        Make EXCEL spreadsheets easy to read by converting them to PDF.
                        </h5>
                    </div>
                </Link>
                <Link className='text-decoration-none mx-1' to='/compress' style={{width:"calc(100%/6)"}}>
                <div className="card h-100 px-4 py-2  pb-5 " >
                        <div className="img_card ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50"><path d="M17.676 34.344h9.55c2.476 0 3.375-.258 4.28-.742a5.04 5.04 0 0 0 2.097-2.102c.495-.902.743-1.8.743-4.277v-9.547H44.82c1.8 0 2.453.187 3.114.54.656.355 1.175.87 1.527 1.527s.54 1.31.54 3.113V44.82c0 1.8-.187 2.453-.54 3.114-.35.656-.87 1.175-1.526 1.527S46.62 50 44.82 50H22.855c-1.8 0-2.453-.187-3.113-.54s-1.172-.87-1.527-1.526-.54-1.312-.54-3.113zm0 0" fill-rule="evenodd" fill="rgb(100%,46.27451%,31.764706%)"></path><path d="M43.94 37.137c0-.477-.393-.864-.88-.864s-.884.387-.884.864v3.843l-5.146-5.046c-.346-.34-.9-.34-1.25 0-.163.16-.257.38-.257.61a.86.86 0 0 0 .258.613l5.145 5.05h-3.914c-.49 0-.882.387-.882.867s.393.867.882.867H43.063c.113-.002.227-.022.335-.07.215-.085.387-.253.477-.464a.75.75 0 0 0 .065-.332l.005-5.934zm0 0" fill="rgb(100%,100%,100%)"></path><g fill-rule="evenodd"><path d="M27.145 32.324H5.18c-1.8 0-2.453-.187-3.113-.543S.89 30.914.54 30.254 0 28.95 0 27.145V5.18c0-1.8.188-2.453.54-3.113A3.69 3.69 0 0 1 2.066.539C2.727.188 3.38 0 5.18 0h21.965c1.8 0 2.453.188 3.113.54s1.172.87 1.527 1.527.54 1.313.54 3.113v21.965c0 1.8-.187 2.453-.54 3.113s-.87 1.176-1.527 1.527-1.312.54-3.113.54zm0 0" fill="rgb(95.294118%,85.098039%,80%)"></path><path d="M19.367 17.156c-1.086.898-2.54 1.348-4.36 1.348H13.39V23.5H10V9h5.313C19.102 9 21 10.54 21 13.62c0 1.453-.543 2.637-1.633 3.535zM14.82 11.5H13.5V16h1.32c1.785 0 2.68-.758 2.68-2.273 0-1.484-.89-2.227-2.68-2.227zm0 0" fill="rgb(81.568627%,27.058824%,14.901961%)"></path></g></svg></div>
                        <h3 className="heading_card">
                            Powerpoint to PDF
                        </h3>
                        <h5 className='content_card  text-secondary' style={{fontSize:'13px'}}>
                        Make PPT and PPTX slideshows easy to view by converting them to PDF.
                        </h5>
                    </div>
                </Link>
                <Link className='text-decoration-none mx-1' to='/compress' style={{width:"calc(100%/6)"}}>
                <div className="card h-100 px-4 py-2  pb-5 " >
                        <div className="img_card ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 50 50"><path d="M17.676 34.344h9.55c2.477 0 3.375-.258 4.28-.742a5.04 5.04 0 0 0 2.098-2.102c.484-.902.742-1.8.742-4.277v-9.547H44.82c1.8 0 2.453.188 3.113.54s1.176.87 1.527 1.527.54 1.31.54 3.113V44.82c0 1.8-.187 2.453-.54 3.113a3.69 3.69 0 0 1-1.527 1.527c-.66.352-1.312.54-3.113.54H22.855c-1.8 0-2.453-.187-3.113-.54s-1.172-.87-1.527-1.527-.54-1.312-.54-3.113zm0 0" fill-rule="evenodd" fill="rgb(98.431373%,93.72549%,65.882353%)"></path><path d="M43.94 37.137c0-.477-.395-.863-.883-.863s-.883.387-.883.863v3.844l-5.145-5.047c-.348-.34-.902-.34-1.25 0a.85.85 0 0 0-.258.609.86.86 0 0 0 .258.613l5.145 5.05h-3.914c-.488 0-.883.387-.883.867s.395.867.883.867h6.05c.113-.004.227-.023.336-.07a.87.87 0 0 0 .477-.465c.05-.105.066-.22.066-.332l.004-5.934zm0 0" fill="rgb(71.764706%,62.745098%,0.392157%)"></path><g fill-rule="evenodd"><path d="M5.184 0h21.988c1.8 0 2.453.188 3.113.54.652.344 1.184.88 1.527 1.53.352.656.54 1.313.54 3.113v21.984c0 1.805-.187 2.457-.54 3.117-.344.648-.875 1.184-1.527 1.527-.66.352-1.312.54-3.113.54H5.184c-1.8 0-2.457-.187-3.113-.54-.652-.344-1.184-.88-1.527-1.527C.188 29.625 0 28.973 0 27.168V5.184c0-1.8.188-2.457.54-3.113.344-.652.88-1.184 1.53-1.53S3.383 0 5.184 0zm0 0" fill="rgb(83.921569%,74.901961%,17.647059%)"></path><path d="M10.28 12.945v4.688c0 1.66-.926 2.66-2.707 2.66C5.406 20.293 5 18.852 5 18.07c0-.668.31-1.098.86-1.098.648 0 .813.504.813 1.05 0 .516.242.89.88.89.594 0 .926-.44.926-1.3V12.95c0-.54.352-.898.902-.898s.902.36.902.898zm1.672 6.402v-6.102c0-.8.418-1.055 1.055-1.055h2.762c1.516 0 2.738.75 2.738 2.508 0 1.44-1 2.508-2.75 2.508h-2v2.152c0 .54-.355.902-.902.902s-.902-.363-.902-.902zm1.805-5.773v2.242h1.68c.727 0 1.266-.437 1.266-1.12 0-.793-.56-1.12-1.45-1.12zm13.285 3.1v2.984c0 .332-.254.602-.613.602-.52 0-.66-.32-.773-1.023-.516.648-1.23 1.066-2.352 1.066-2.793 0-3.863-1.926-3.863-4.145 0-2.676 1.672-4.148 4.125-4.148 2.004 0 3.07 1.2 3.07 1.902 0 .63-.46.793-.848.793-.89 0-.56-1.242-2.32-1.242-1.242 0-2.223.813-2.223 2.816 0 1.56.77 2.637 2.246 2.637.957 0 1.793-.648 1.88-1.617H24.2c-.383 0-.812-.14-.812-.69 0-.44.254-.69.703-.69h2.223c.527 0 .738.262.738.758zm0 0" fill="rgb(100%,100%,100%)"></path></g></svg></div>
                        <h3 className="heading_card">
                            JPG to PDF
                        </h3>
                        <h5 className='content_card  text-secondary' style={{fontSize:'13px'}}>
                        Convert JPG images to PDF in seconds. Easily adjust orientation and margins.
                        </h5>
                    </div>
                </Link>

                </div> */}
            </div>

        </>
    )
}

export default Home