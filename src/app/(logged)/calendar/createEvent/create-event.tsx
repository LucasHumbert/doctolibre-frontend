'use client'

import {useState} from "react";
import BlueButton from "@/app/components/blue-button";
import SelectWeekday from "@/app/(logged)/calendar/createEvent/select-weekday";

export default function CreateEvent() {
    const [openModal, setModal] = useState(false);
    const handleModal = () => {
        setModal(!openModal)
    }

    return <div>

        <BlueButton text='Add an event' onClick={handleModal} />

        {openModal && (<>
                <div className='fixed top-0 left-0 w-full h-full bg-gray-500 opacity-80'></div>
                <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center'>
                    <div className='bg-white shadow-lg py-2 rounded-md'>
                        <h2 className='text-sm text-center font-medium text-gray-900 border-b border-gray-300 py-3 px-4 mb-4'>Add an event</h2>
                        <div className='px-4 pb-4 min-w-[500px] text-sm font-medium text-gray-700'>
                            <SelectWeekday/>

                            <div className='w-full mb-5 mt-4 flex justify-between items-center'>
                                <div className='w-full mr-1'>
                                    <label htmlFor="start_time"
                                           className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Start time *
                                    </label>
                                    <div className="relative">
                                        <div
                                            className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd"
                                                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        <input type="time" id="start_time"
                                               className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                               required
                                        />
                                    </div>
                                </div>

                                <div className='w-full ml-1'>
                                    <label htmlFor="end_time"
                                           className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        End time *
                                    </label>
                                    <div className="relative">
                                        <div
                                            className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd"
                                                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        <input type="time" id="end_time"
                                               className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                               required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='w-full mb-5 mt-4'>
                                <label htmlFor='title' className="block mb-1 text-sm font-medium text-gray-900">
                                    Title *
                                </label>
                                <input type='text' id='title' name='title'
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       required/>
                            </div>

                            <div className='w-full mb-5 mt-4'>
                                <label htmlFor='title' className="block mb-1 text-sm font-medium text-gray-900">
                                    Description
                                </label>
                                <textarea id='title' name='title'
                                          className="min-h-[42px] max-h-[400px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                          required/>
                            </div>
                        </div>
                        <div
                            className='border-t border-gray-300 cursor-pointer flex justify-between items-center px-4 pt-2'>
                            <button
                                type='button'
                                className='cursor-pointer text-white bg-gray-700 whitespace-nowrap hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5'
                                onClick={handleModal}
                            >
                                Cancel
                            </button>

                            <BlueButton text='Add' onClick={handleModal}/>
                        </div>
                    </div>
                </div>
            </>
        )}
    </div>
}