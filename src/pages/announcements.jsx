
// import Layout from "@/components/layout/Layout"
// import div from "next/div"
import React, { useState , useEffect} from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';
// import dummyimgsrc from "./events-v1-img1.jpg"
import dummyimgsrc from "./Yellp.jpg"


// const server = "http://localhost:4100"
const server = "http://134.209.155.253:4100"


export default function Home() {


  const [bannervisiblity, setbannervisiblity] = useState(true);
    const [anounsmentsstate, setanounsmentsstate] = useState([  ]);

  useEffect(() => {
    fetch(server+'/getallannouncements')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        setanounsmentsstate(data);
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
  }, []); // The empty array [] means this useEffect will run once when the component mounts



    return (
        <div className='   '>
        <div className={((bannervisiblity)? " ":" hidden ") + " relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"}>
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">Urja City</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          building a sustainable future.
        </p>
        <a
          href="#"
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Contact Us <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button"  onClick={()=>{setbannervisiblity(false)}} className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-gray-900 hover:scale-110" aria-hidden="true" />
        </button>
      </div>
    </div>
            {/* <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Events 1"> */}
            <div className="w-full">
                {/*Start Events-style2 */}
                 
                    <div className="w-[100%]   ">
                        <div className="sec-title text-center ">
                            <div className="sub-title mt-6">
                                <h6>Delhi</h6>
                            </div>
                            <h2>Explore and Act for sustainable living <br />around you</h2>
                        </div>
                         
                         {/* <div className="flex justify-center my-4" >
                          
                         <button className="bg-black rounded-xl  w-[100px]  p-1 hover:scale-105" onClick={()=>{ 
                                var temp54544 = [...anounsmentsstate]

                                temp54544.push(2)

                                setanounsmentsstate(temp54544)
                            

                            }}>
                         <h1 className="text-white" >Add</h1>
                         </button>

                         </div> */}
                        
                        
                        
                        <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-2  md:grid-cols-3   mx-5 ">
                            {/*Start Events Style2 Single */}
                          
                         

                         {

                            anounsmentsstate.map( (element , index) => (

                                
                                <div key={index} className="   w-full  wow animated fadeInUp hover:scale-105 transition-all duration-300 hover:drop-shadow-xl" data-wow-delay="0.1s">
                                <div className="events-style2__single">
                                    <div className="events-style2__single-img  ">
                                        <div className="inner ">
                                        <div className=''>
                                        <img className='h-[240px] w-[220px] object-cover' src={element.imagesrc} alt="#" />
                                        </div>
                                            
                                        </div>
                                        <div className=" absolute inset-x-0 bottom-[-20px] w-[145px] shadow-inner border-2 border-[var(--thm-base)] text-[var(--thm-base)] text-md font-semibold shadow-xl bg-white shadow-[0_15px_40px_10px_rgba(0,0,0,0.07)] rounded-[7px] p-[10px_0] flex items-center justify-center mx-auto z-10 ">
                                            <p><span className="icon-calendar-1"></span>{new Date(element.todate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                                        </div>
                                    </div>

                                    <div className=" events-style2__single-content text-center  h-[450px] group">
                                    
                                    <div className='  w-full h-[155px]     '> 
  <h2 className="multi-line-truncate group-hover:text-white text-sm h-full"> {element.title}   </h2>
</div>

                                        
                                      

  {/* New relative container for positioning the p element and the button */}
  <div className="absolute inset-x-0 bottom-0 mx-auto flex flex-col items-center pb-5    ">
    {/* Absolute positioning for the p element */}
    <div className="absolute bottom-full   -mb-4"> {/* Adjust bottom-full and mb-2 as needed */}
      <p className="flex items-center font-semibold group-hover:text-white"><FontAwesomeIcon className='mx-1' icon={faStore} /> {element.VendorName} </p>
    </div>

    {/* Existing button structure */}
    <a className="events-style2__single-btn" href={element.ctaLink} target="_blank" rel="noopener noreferrer">
      <div  className="btn-one hover:cursor-pointer hover:scale-105 bg-red-500 shadow-sm w-[130px]" >
        <span className="txt">{element.ctaCategory}</span>
      </div>
    </a>
  </div>
                                       
                                    </div>
                                </div>
                            </div>
                                
                            ))


                         }

                            
                         
                        </div>

                     

                    </div>
                
               
                </div>

            {/* </Layout> */}
        </div>
    )
}