import React, { useState , Fragment , useEffect , useRef  } from 'react';
 
import { Dialog ,Menu, Transition } from '@headlessui/react'
 
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'

import "./adminpage.css"

 

// const server = "http://localhost:4100"
const server = "http://134.209.155.253:4100"

 
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }



const Form = () => {
    const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    
    setcurrenteditinganouncement(null)
    setIsOpen(false);
    setFormData({
        imagesrc: '',
        announcementUniqueId: '',
        title: '',
        VendorName: '',
        fromdate: '',
        todate: '',
        timeString: '',
        ctaCategory: '',
        ctaLink: '',
        announcementVisiblity: true,
      })
  }

  function openModal() {
    setIsOpen(true);
  }


    const [allannouncements , setallannouncements] =  useState (  [] )
    const [currenteditinganouncement,setcurrenteditinganouncement] = useState ( null )
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState('');
  
    const postData = async (url = '', data = {}) => {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
  
      return response.json(); // parses JSON response into native JavaScript objects
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

       
      postData(server+'/addnewannouncements', {... formData })
        .then(data => {
          console.log(data); // JSON data parsed by `response.json()` call
          setResponseData(data);
        
          setFormData({
            imagesrc: '',
            announcementUniqueId: '',
            title: '',
            VendorName: '',
            fromdate: '',
            todate: '',
            timeString: '',
            ctaCategory: '',
            ctaLink: '',
            announcementVisiblity: true,
          })
          setIsModalOpen(false)
          setIsOpen(false)

        })
        .catch(error => {
          console.error('Error:', error);
          setError('Failed to fetch data');
        });
    };


    const  handleanouncementEditSubmit = (e) => {
        e.preventDefault();

        const tempformdata =  {...formData}
        tempformdata.fromdate =    new Date(tempformdata.fromdate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })  
        tempformdata.todate   =   new Date(tempformdata.todate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })  

        postData(server+'/editannouncement', { announcementUniqueId: tempformdata.announcementUniqueId  , updateData: tempformdata })
        .then(data => {
          console.log(data); // JSON data parsed by `response.json()` call
          setResponseData(data);
        
          setcurrenteditinganouncement(null)
          setFormData({
            imagesrc: '',
            announcementUniqueId: '',
            title: '',
            VendorName: '',
            fromdate: '',
            todate: '',
            timeString: '',
            ctaCategory: '',
            ctaLink: '',
            announcementVisiblity: true,
          })
          setIsModalOpen(false)
          setIsOpen(false)

        })
        .catch(error => {
          console.error('Error:', error);
          setError('Failed to fetch data');
        });
  
         
        
      };



    useEffect(() => {
        fetch(server+'/getallannouncements')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setallannouncements(data);
          })
          .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
          });
      }, [responseData]);



    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalContentRef = useRef(null);

    const handleOutsideClick = (e) => {
        if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
          setIsModalOpen(false);
        }
      };


  const [formData, setFormData] = useState({
    imagesrc: '',
    announcementUniqueId: '',
    title: '',
    VendorName: '',
    fromdate: '',
    todate: '',
    timeString: '',
    ctaCategory: '',
    ctaLink: '',
    announcementVisiblity: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

   

  return (
    <div className='m-4'>
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn-primary mb-3"
      >
        Add Announcement
      </button>



       
    

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                   
                  <div className="bg-white  rounded-lg max-w-2xl w-full   "   >
          <div className='flex justify-end w-full    '>
          <button
              onClick={() => setIsOpen(false)}
              className="  text-white font-semibold bg-red-300 hover:bg-red-500 px-4 p-1  rounded-lg   mr-2"
            >
              X
            </button>
          </div>
            
{ (currenteditinganouncement != null)?    <form onSubmit={handleanouncementEditSubmit} className="max-w-2xl mx-auto mt-5 mb-5">
      <div className="flex flex-col gap-6">
        <input
          type="text"
          name="imagesrc"
          value={formData.imagesrc}
          onChange={handleChange}
          placeholder="Image Source URL"
          required
          className="input"
        />
         
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="input"
        />
        <input
          type="text"
          name="VendorName"
          value={formData.VendorName}
          onChange={handleChange}
          placeholder="Vendor Name"
          required
          className="input"
        />
        <input
          type="date"
          name="fromdate"
          value={formData.fromdate instanceof Date ? formData.fromdate  : new Date(formData.fromdate).toISOString().split('T')[0]}
          
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="date"
          name="todate"
          value={formData.todate instanceof Date ? formData.todate  : new Date(formData.todate).toISOString().split('T')[0]}
           
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="text"
          name="timeString"
          value={formData.timeString}
          onChange={handleChange}
          placeholder="Time String"
          required
          className="input"
        />
         <select
        name="ctaCategory"
        value={formData.ctaCategory}
        onChange={handleChange}
        className="input"
        required
      >
        <option value="">Select CTA Category</option>
        <option value="Join In">Join In</option>
        <option value="Buy">Buy</option>
        <option value="Attend">Attend</option>
      </select>
        <input
          type="text"
          name="ctaLink"
          value={formData.ctaLink}
          onChange={handleChange}
          placeholder="CTA Link"
          required
          className="input"
        />
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="announcementVisiblity"
            id="announcementVisiblity"
            checked={formData.announcementVisiblity}
            onChange={handleChange}
            className="checkbox"
          />
          <label htmlFor="announcementVisiblity">Announcement Visibility</label>
        </div>
        <button type="submit" className="btn-primary">
          Edit Announcement
        </button>
      </div>
    </form> : null}

    </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
     






      <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
      {allannouncements.map((client , index) => (
        <li key={client.announcementUniqueId} className="overflow-hidden rounded-xl border border-gray-200">
          <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
            <img
              src={client.imagesrc}
               
              className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
            />
            <div className="text-sm font-medium leading-6 text-gray-900">{client.title}</div>
            <Menu as="div" className="relative ml-auto">
              <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Open options</span>
                <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        View<span className="sr-only">, {client.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                       data-id={ index}

                        onClick={(e)=>{  
                            console.log(e.currentTarget.getAttribute('data-id'));
                             setcurrenteditinganouncement(e.currentTarget.getAttribute('data-id'))
                             setFormData(allannouncements[e.currentTarget.getAttribute('data-id')])
                             setIsOpen(true)
                        }}
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        Edit 
                      </div>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Vendor Name</dt>
              <dd className="font-medium text-gray-900">
                <p >  {client.VendorName} </p>
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Date</dt>
              <dd className="flex items-start gap-x-2">
                <div className="font-medium text-gray-900">
                {new Date(client.fromdate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                {" - "}
                { new Date(client.todate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                
                </div>
                
              </dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>



      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center overflow-auto"  onClick={handleOutsideClick}  >
          <div className="bg-white p-5 rounded-lg max-w-2xl w-full   " ref={modalContentRef} >
          <div className='flex justify-end w-full  mt-5 '>
          <button
              onClick={() => setIsModalOpen(false)}
              className="  text-white font-semibold bg-red-300 hover:bg-red-500 px-4 p-1  rounded-lg mt-1 mr-2"
            >
              X
            </button>
          </div>
            
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-5 mb-5">
      <div className="flex flex-col gap-6">
        <input
          type="text"
          name="imagesrc"
          value={formData.imagesrc}
          onChange={handleChange}
          placeholder="Image Source URL"
          required
          className="input"
        />
         
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="input"
        />
        <input
          type="text"
          name="VendorName"
          value={formData.VendorName}
          onChange={handleChange}
          placeholder="Vendor Name"
          required
          className="input"
        />
        <input
          type="date"
          name="fromdate"
          value={formData.fromdate}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="date"
          name="todate"
          value={formData.todate}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="text"
          name="timeString"
          value={formData.timeString}
          onChange={handleChange}
          placeholder="Time String"
          required
          className="input"
        />
         <select
        name="ctaCategory"
        value={formData.ctaCategory}
        onChange={handleChange}
        className="input"
        required
      >
        <option value="">Select CTA Category</option>
        <option value="Join In">Join In</option>
        <option value="Buy">Buy</option>
        <option value="Attend">Attend</option>
      </select>
        <input
          type="text"
          name="ctaLink"
          value={formData.ctaLink}
          onChange={handleChange}
          placeholder="CTA Link"
          required
          className="input"
        />
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="announcementVisiblity"
            id="announcementVisiblity"
            checked={formData.announcementVisiblity}
            onChange={handleChange}
            className="checkbox"
          />
          <label htmlFor="announcementVisiblity">Announcement Visibility</label>
        </div>
        <button type="submit" className="btn-primary">
          Add Announcement
        </button>
      </div>
    </form>
    </div>
        </div>
      )}


       


    </div>
  );
};

export default Form;
