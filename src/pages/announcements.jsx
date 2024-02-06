
// import Layout from "@/components/layout/Layout"
// import div from "next/div"
import React, { useState } from 'react';
import dummyimgsrc from "./events-v1-img1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';

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

                                
                                <div key={index} className="group   w-full  wow animated fadeInUp hover:scale-105 transition-all duration-300 hover:drop-shadow-xl" data-wow-delay="0.1s">
                                <div className="events-style2__single">
                                    <div className="events-style2__single-img  ">
                                        <div className="inner">
                                            <img src={dummyimgsrc} alt="#" />
                                        </div>
                                        <div className="date-box  ">
                                            <p><span className="icon-calendar-1"></span>Apr 17, 2023</p>
                                        </div>
                                    </div>

                                    <div className="events-style2__single-content text-center  h-[400px]">
                                        <h2 className="group-hover:text-white" > The Youth Event Things <br /> To Remember  </h2>
                                        <ul className="contact-info">
                                             

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-pin"></span>
                                                </div>
                                                <div className="text">
                                                 <p> <FontAwesomeIcon icon={faStore} /> Farm Green Organic</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="events-style2__single-btn">
                                            <div className="btn-one hover:cursor-pointer hover:scale-105"  >
                                                <span className="txt">Know More</span>
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