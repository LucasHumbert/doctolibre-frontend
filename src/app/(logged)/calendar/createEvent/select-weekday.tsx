import {useState} from "react";

export default function SelectWeekday() {
    type Day = {
        code: number,
        value: string,
        text: string
    };

    const weekDays: Day[] = [
        { code: 1, value: 'Monday', text: 'M' },
        { code: 2, value: 'Tuesday', text: 'T' },
        { code: 3, value: 'Wednesday', text: 'W' },
        { code: 4, value: 'Thursday', text: 'T' },
        { code: 5, value: 'Friday', text: 'F' },
        { code: 6, value: 'Saturday', text: 'S' },
        { code: 7, value: 'Sunday', text: 'S' },
    ]

    const [selectedDays, setSelectDays] = useState<number[]>([])

    function handleSelect(selectedDayCode: number) {
        if (selectedDays.includes(selectedDayCode)) {
            setSelectDays(selectedDays.filter((code) => code !== selectedDayCode))
        } else {
            setSelectDays([...selectedDays, selectedDayCode])
        }
    }

    return <div className='flex flex-row justify-between items-center'>
        { weekDays.map((day) =>
            <div
                key={day.code}
                title={day.value}
                className={`
                    cursor-pointer border rounded-[50%] w-8 h-8 mx-1 flex justify-center items-center
                    ${selectedDays.includes(day.code) ? "bg-blue-500 text-white border-gray-500" : ""}
                `}
                onClick={() => handleSelect(day.code)}
            >
                {day.text}
            </div>
        )
        }
    </div>
}