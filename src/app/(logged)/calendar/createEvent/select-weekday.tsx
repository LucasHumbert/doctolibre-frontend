import {useState} from "react";

export default function SelectWeekday() {
    type Day = {
        code: number,
        value: string,
        text: string
    };

    const weekDays: Day[] = [
        { code: 1, value: 'Monday', text: 'Mon.' },
        { code: 2, value: 'Tuesday', text: 'Tue.' },
        { code: 3, value: 'Wednesday', text: 'Wed.' },
        { code: 4, value: 'Thursday', text: 'Thu.' },
        { code: 5, value: 'Friday', text: 'Fri.' },
        { code: 6, value: 'Saturday', text: 'Sat.' },
        { code: 7, value: 'Sunday', text: 'Sun.' },
    ]

    const [selectedDays, setSelectDays] = useState<number[]>([])

    function handleSelect(selectedDayCode: number) {
        if (selectedDays.includes(selectedDayCode)) {
            setSelectDays(selectedDays.filter((code) => code !== selectedDayCode))
        } else {
            setSelectDays([...selectedDays, selectedDayCode])
        }
    }

    return <>
        <p className='mb-1 text-sm font-medium text-gray-900'>Select days *</p>
        <div className='flex flex-row justify-between items-center'>
            { weekDays.map((day) =>
                <div
                    key={day.code}
                    title={day.value}
                    className={`
                    cursor-pointer border rounded-[50%] w-12 h-12 mx-1 flex justify-center items-center
                    ${selectedDays.includes(day.code) ? "bg-blue-500 text-white border-gray-500" : ""}
                `}
                    onClick={() => handleSelect(day.code)}
                >
                    {day.text}
                </div>
            )
            }
        </div>
    </>
}