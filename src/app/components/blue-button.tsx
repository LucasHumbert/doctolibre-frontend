export default function BlueButton({ text, onClick }: { text: string, onClick?: () => void }) {
    return <button
        onClick={onClick}
        className="cursor-pointer text-white bg-blue-500 whitespace-nowrap hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5"
    >
        {text}
    </button>
}