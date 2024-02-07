
// import Layout from "@/components/layout/Layout"
// import div from "next/div"
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';
// import dummyimgsrc from "./events-v1-img1.jpg"
import dummyimgsrc from "./Yellp.jpg"

export default function Home() {


     
    const [anounsmentsstate, setanounsmentsstate] = useState([1 ]);


    return (
        <div className='   '>
            {/* <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Events 1"> */}
            <div className="w-full">
                {/*Start Events-style2 */}
                 
                    <div className="w-[100%]   ">
                        <div className="sec-title text-center">
                            <div className="sub-title">
                                <h6>upcoming Events</h6>
                            </div>
                            <h2>Explore Upcoming City <br />Event Schedule</h2>
                        </div>
                         
                         <div className="flex justify-center my-4" >
                          
                         <button className="bg-black rounded-xl  w-[100px]  p-1 hover:scale-105" onClick={()=>{ 
                                var temp54544 = [...anounsmentsstate]

                                temp54544.push(2)

                                setanounsmentsstate(temp54544)
                            

                            }}>
                         <h1 className="text-white" >Add</h1>
                         </button>

                         </div>
                        
                        
                        
                        <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-2  md:grid-cols-3   mx-5 ">
                            {/*Start Events Style2 Single */}
                          
                         

                         {

                            anounsmentsstate.map( (element , index) => (

                                
                                <div key={index} className="   w-full  wow animated fadeInUp hover:scale-105 transition-all duration-300 hover:drop-shadow-xl" data-wow-delay="0.1s">
                                <div className="events-style2__single">
                                    <div className="events-style2__single-img  ">
                                        <div className="inner ">
                                        <div className=''>
                                        <img className='h-[240px] w-[220px] object-cover' src={dummyimgsrc} alt="#" />
                                        </div>
                                            
                                        </div>
                                        <div className=" absolute inset-x-0 bottom-[-20px] w-[145px] shadow-inner border-2 border-[var(--thm-base)] text-[var(--thm-base)] text-md font-semibold shadow-xl bg-white shadow-[0_15px_40px_10px_rgba(0,0,0,0.07)] rounded-[7px] p-[10px_0] flex items-center justify-center mx-auto z-10 ">
                                            <p><span className="icon-calendar-1"></span>Apr 17, 2023</p>
                                        </div>
                                    </div>

                                    <div className=" events-style2__single-content text-center  h-[400px] group">
                                    
                                    <div className='  w-full h-[105px]    '> 
  <h2 className="multi-line-truncate group-hover:text-white">The Youth Event Things To Remember      </h2>
</div>

                                        
                                      

  {/* New relative container for positioning the p element and the button */}
  <div className="absolute inset-x-0 bottom-0 mx-auto flex flex-col items-center pb-5  ">
    {/* Absolute positioning for the p element */}
    <div className="absolute bottom-full   -mb-3"> {/* Adjust bottom-full and mb-2 as needed */}
      <p className="flex items-center font-semibold group-hover:text-white"><FontAwesomeIcon className='mx-1' icon={faStore} /> Farm Green Organic </p>
    </div>

    {/* Existing button structure */}
    <div className="events-style2__single-btn">
      <div className="btn-one hover:cursor-pointer hover:scale-105 bg-red-500 shadow-sm">
        <span className="txt">Know More</span>
      </div>
    </div>
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