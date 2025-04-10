export default function DescriptionInput({ description, setDescription }: { description: string, setDescription: (value: string) => void }) {
    return <>
        <label htmlFor='title' className="block mb-1 text-sm font-medium text-gray-900">
            Description
        </label>
        <textarea id='title' name='title'
                  className="min-h-[84px] max-h-[400px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required/>
    </>
}