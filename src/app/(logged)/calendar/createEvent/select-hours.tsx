export default function SelectHours({ startTime, setStartTime, endTime, setEndTime }: { startTime: string, setStartTime: (value: string) => void, endTime: string, setEndTime: (value: string) => void }) {
    return <div className='w-full mb-5 mt-4 flex justify-between items-center'>
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
                       value={startTime}
                       onChange={(e) => setStartTime(e.target.value)}
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
                       value={endTime}
                       onChange={(e) => setEndTime(e.target.value)}
                       required
                />
            </div>
        </div>
    </div>
}