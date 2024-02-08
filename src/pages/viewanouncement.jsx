import React, { useState } from 'react';
import dummyimgsrc from "./Yellp.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalendarDays , faClock ,  faLayerGroup  ,  faTags   ,  faLocationDot   ,  faPhone ,  faEnvelope  } from '@fortawesome/free-solid-svg-icons';

 

export default function Home() {
 
    


    const announcementvar = {
        imagesrc : dummyimgsrc , 
        title: "The Youth Event Things To Remember" , 
        textcontent:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        startdate:"May 10, 2023" , 
        enddate:"May 13, 2023" , 
        time:"10:00AM - 02:30PM",
        category:"Sale",
        location:"Bengaluru,marathali",
        contact:"9945027502"


    }



    
    return (
        <>
        <div>
            <section className="event-details">
                <div className="max-w-7xl mx-auto"> {/* Replaces 'auto-container' with Tailwind's max-width and auto margin */}
                    <div className="  bg-gray-100 rounded-xl mx-2 ">
                        <div className="flex justify-center "> {/* Replaces 'row' */}
                           
                                        <img  className='w-auto h-[400px] rounded-2xl m-2 object-cover' src={announcementvar.imagesrc} alt="#" />
                                     
                             
                        </div>
                    </div>
                    <div className="event-details__bottom mx-3">
                        <div className="flex flex-wrap"> {/* Replaces 'row' */}
                            <div className="w-full lg:w-8/12 mb-10"> {/* Approximates 'col-xl-8 col-lg-7' */}
                                <div className="event-details__content">
                                    <div className="event-details__content-text1  px-2">
                                        <h2 className='font-bold ' >{announcementvar.title}</h2>
                                        <p className="text1"> {announcementvar.textcontent}</p>
                                         
                                    </div>
                                   
                                    
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 flex justify-center " > {/* Approximates 'col-xl-4 col-lg-5' */}
                            <div className="max-w-[500px]  px-[15px]">
                                                <div className="event-details__sidebar-single info-box">
                                                    <div className="title">
                                                        <h2 className='font-bold' >Event details</h2>
                                                    </div>
                                                    <ul className="event-details__sidebar-single-list">
                                                    <li>
                                                            <div className="icon-box">
                                                                
                                                                <FontAwesomeIcon className='mx-1 text-red-500' icon={faPhone} />
                                                                
                                                            </div>
        
                                                            <div className="text-box">
                                                                <h4>Contact:</h4>
                                                                <p>{announcementvar.contact}</p>
                                                            </div>
                                                        </li>

                                                    <li>
                                                            <div className="icon-box">
                                                                
                                                                <FontAwesomeIcon className='mx-1 text-red-500' icon={faLocationDot} />
                                                                
                                                            </div>
        
                                                            <div className="text-box">
                                                                <h4>Location:</h4>
                                                                <p>{announcementvar.location}</p>
                                                            </div>
                                                        </li>
                                                     

                                                        <li>
                                                            <div className="icon-box">
                                                                 
                                                                
                                                                <FontAwesomeIcon className='mx-1 text-red-500' icon={faCalendarDays} />
                                                            </div>
        
                                                            <div className="text-box">
                                                                <h4>Start Date:</h4>
                                                                <p>{announcementvar.startdate}</p>
                                                            </div>
                                                        </li>
        
                                                        <li>
                                                            <div className="icon-box">
                                                            <FontAwesomeIcon className='mx-1 text-red-500' icon={faCalendarDays} />
                                                            </div>
        
                                                            <div className="text-box">
                                                                <h4>End Date:</h4>
                                                                <p>{announcementvar.enddate}</p>
                                                            </div>
                                                        </li>
        
                                                        <li>
                                                            <div className="icon-box">
                                                                 
                                                                <FontAwesomeIcon className='mx-1 text-red-500' icon={faClock} />
                                                                
                                                            </div>
        
                                                            <div className="text-box">
                                                                <h4>Time:</h4>
                                                                <p>{announcementvar.time}</p>
                                                            </div>
                                                        </li>
                                                      
        
                                                        <li>
                                                            <div className="icon-box">
                                                                
                                                                <FontAwesomeIcon className='mx-1 text-red-500' icon={faLayerGroup} />
                                                                
                                                            </div>
        
                                                            <div className="text-box">
                                                                <h4>Category:</h4>
                                                                <p>{announcementvar.category}</p>
                                                            </div>
                                                        </li>
        
                                                        
                                                    </ul>
                                                </div>
        
        
                                                <div className="event-details__sidebar-map">
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                                                        className="event-details__map"></iframe>
                                                </div>
        
                                                <div className="event-details__sidebar-single contact-info">
                                                    <div className="title">
                                                        <h2>Vendor Details</h2>
                                                    </div>
                                                    <div className="text-box">
                                                        <p>Mauris magna sit elementum elit facilis lacusacphar.</p>
                                                    </div>
        
                                                    <ul className="event-details__sidebar-single-contact-list">
                                                        <li>
                                                            <div className="icon-box">
                                                                
                                                                
                                                                <FontAwesomeIcon className='mx-1 text-white' icon={faLocationDot} />
                                                            </div>
                                                            <div className="text">
                                                                <p>New Hyde Park, NY 11040</p>
                                                            </div>
                                                        </li>
        
                                                        <li>
                                                            <div className="icon-box">
                                                                 
                                                                
                                                                <FontAwesomeIcon className='mx-1 text-white' icon={faPhone} />
                                                            </div>
                                                            <div className="text">
                                                                <p><div href="tel:913336660021">(+91) 333 666 0021</div></p>
                                                            </div>
                                                        </li>
        
                                                        <li>
                                                            <div className="icon-box">
                                                                
                                                                
                                                                <FontAwesomeIcon className='mx-1 text-white' icon={faEnvelope} />
                                                            </div>
                                                            <div className="text">
                                                                <p><div href="mailto:yourmail@email.com">example@govarnex.com</div></p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}











