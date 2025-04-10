'use client'

import {useState} from "react";
import BlueButton from "@/app/components/blue-button";
import SelectWeekday from "@/app/(logged)/calendar/createEvent/select-weekday";
import SelectHours from "@/app/(logged)/calendar/createEvent/select-hours";
import TitleInput from "@/app/(logged)/calendar/createEvent/title-input";
import DescriptionInput from "@/app/(logged)/calendar/createEvent/description-input";
import {createRepetitiveEvent} from "@/app/lib/actions/events";

export default function CreateEvent() {
    const [openModal, setModal] = useState(false);
    const [selectedDays, setSelectedDays] = useState<number[]>([])
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

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
                            <SelectWeekday selectedDays={selectedDays} setSelectedDays={setSelectedDays} />

                            <SelectHours startTime={startTime} setStartTime={setStartTime} endTime={endTime} setEndTime={setEndTime} />

                            <div className='w-full mb-5 mt-4'>
                                <TitleInput title={title} setTitle={setTitle} />
                            </div>

                            <div className='w-full mb-5 mt-4'>
                                <DescriptionInput description={description} setDescription={setDescription} />
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

                            <BlueButton text='Add' onClick={createRepetitiveEvent}/>
                        </div>
                    </div>
                </div>
            </>
        )}
    </div>
}