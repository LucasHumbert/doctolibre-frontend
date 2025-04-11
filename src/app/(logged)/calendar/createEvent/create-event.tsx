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
    const [errors, setErrors] = useState({
        days: '',
        times: '',
        title: '',
        description: ''
    })

    const resetValues = () => {
        setSelectedDays([])
        setStartTime('')
        setEndTime('')
        setTitle('')
        setDescription('')
    }

    const handleModal = () => {
        if (openModal) {
            resetValues()
        }

        setModal(!openModal)
    }

    const handleSubmit = () => {
        let hasError = false
        const newErrors: { days: string; times: string, title: string, description: string } = {
            days: '',
            times: '',
            title: '',
            description: ''
        }

        if (!selectedDays.length) {
            hasError = true
            newErrors.days = 'At least 1 day should be selected !'
        } else {
            newErrors.days = ''
        }

        if (!startTime || !endTime) {
            hasError = true
            newErrors.times = 'Both times must be set !'
        } else if (startTime >= endTime) {
            hasError = true
            newErrors.times = 'The end time should be after the start time !'
        } else {
            newErrors.times = ''
        }

        if (title.length < 2) {
            hasError = true
            newErrors.title = 'Title must be at least 2 characters !'
        } else {
            newErrors.title = ''
        }

        setErrors(newErrors)
        if (hasError) return

        createRepetitiveEvent(selectedDays, startTime, endTime, title, description.length ? description : null)
            .then(r => {
                if (r?.success) {
                    handleModal()
                }
            })
    }

    return <div>
        <BlueButton text='Add an event' onClick={handleModal} />

        {openModal && (<>
                <div className='fixed top-0 left-0 w-full h-full bg-gray-500 opacity-80'></div>
                <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center'>
                    <div className='bg-white shadow-lg py-2 rounded-md'>
                        <h2 className='text-sm text-center font-medium text-gray-900 border-b border-gray-300 py-3 px-4 mb-4'>Add an event</h2>
                        <div className='px-4 pb-4 min-w-[500px] text-sm font-medium text-gray-700'>

                            { errors.days && <p className='text-red-500'>{errors.days}</p> }
                            <SelectWeekday selectedDays={selectedDays} setSelectedDays={setSelectedDays} />

                            <div className='w-full mb-5 mt-4'>
                                { errors.times && <p className='text-red-500'>{errors.times}</p> }
                                <SelectHours startTime={startTime} setStartTime={setStartTime} endTime={endTime} setEndTime={setEndTime} />
                            </div>

                            <div className='w-full mb-5 mt-4'>
                                { errors.title && <p className='text-red-500'>{errors.title}</p> }
                                <TitleInput title={title} setTitle={setTitle} />
                            </div>

                            <div className='w-full mb-5 mt-4'>
                                { errors.description && <p className='text-red-500'>{errors.description}</p> }
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

                            <BlueButton text='Add' onClick={() => handleSubmit()}/>
                        </div>
                    </div>
                </div>
            </>
        )}
    </div>
}