export default function TitleInput({ title, setTitle }: { title: string, setTitle: (value: string) => void }) {
    return <>
        <label htmlFor='title' className="block mb-1 text-sm font-medium text-gray-900">
            Title *
        </label>
        <input type='text' id='title' name='title'
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               required
        />
    </>
}