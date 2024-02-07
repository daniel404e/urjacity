import React, { useState } from 'react';
import dummyimgsrc from "./Yellp.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalendarDays , faClock ,  faLayerGroup  ,  faTags   ,  faLocationDot   ,  faPhone ,  faEnvelope  } from '@fortawesome/free-solid-svg-icons';

 

export default function Home() {
     

    
    return (
        <>
        <div>
            <section className="event-details">
                <div className="max-w-7xl mx-auto"> {/* Replaces 'auto-container' with Tailwind's max-width and auto margin */}
                    <div className="  bg-gray-100 rounded-xl mx-2 ">
                        <div className="flex justify-center "> {/* Replaces 'row' */}
                           
                                        <img  className='w-auto h-[400px] rounded-2xl m-2 object-cover' src={dummyimgsrc} alt="#" />
                                     
                             
                        </div>
                    </div>
                    <div className="event-details__bottom mx-3">
                        <div className="flex flex-wrap"> {/* Replaces 'row' */}
                            <div className="w-full lg:w-8/12 mb-10"> {/* Approximates 'col-xl-8 col-lg-7' */}
                                <div className="event-details__content">
                                    <div className="event-details__content-text1">
                                        <h2 className='font-bold ' >Event Overview</h2>
                                        <p className="text1">Lorem ipsum dolor sit amet </p>
                                        <p className="text2">Fringilla mauris magna sit elementum elit. Facilisi lacus, pharetra.</p>
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
                                                                 
                                                                
                                                                <FontAwesomeIcon className='mx-1 text-red-500' icon={faCalendarDays} />
                                                            </div>
        
                                                            <div className="text-box">
                                                                <h4>Start Date:</h4>
                                                                <p>May 10, 2023: 10:00AM</p>
                                                            </div>
                                                        </li>
        
                                                        <li>
                                                            <div className="icon-box">
                                                            <FontAwesomeIcon className='mx-1 text-red-500' icon={faCalendarDays} />
                                                            </div>
        
                                                            <div className="text-box">
                                                                <h4>End Date:</h4>
                                                                <p>May 13, 2023: 02:30PM</p>
                                                            </div>
                                                        </li>
        
                                                        <li>
                                                            <div className="icon-box">
                                                                 
                                                                <FontAwesomeIcon className='mx-1 text-red-500' icon={faClock} />
                                                                
                                                            </div>
        
                                                            <div className="text-box">
                                                                <h4>Time:</h4>
                                                                <p>10:00AM - 02:30PM</p>
                                                            </div>
                                                        </li>
        
                                                        <li>
                                                            <div className="icon-box">
                                                                
                                                                <FontAwesomeIcon className='mx-1 text-red-500' icon={faLayerGroup} />
                                                                
                                                            </div>
        
                                                            <div className="text-box">
                                                                <h4>Category:</h4>
                                                                <p><span>Sale</span></p>
                                                            </div>
                                                        </li>
        
                                                        <li>
                                                            <div className="icon-box">
                                                            
                                                            <FontAwesomeIcon className='mx-1 text-red-500' icon={faTags} />
                                                            </div>
        
                                                            <div className="text-box">
                                                                <h4>Tags:</h4>
                                                                <p><span>Covernment,</span> Meeting, City</p>
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
                                                        <h2>Event Venue</h2>
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











