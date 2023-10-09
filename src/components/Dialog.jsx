import Swal from "sweetalert2";
import { useProductContext } from "../context/Product"

const Dialog = ({ show, close, title, form, setForm, handle }) => {
    const { categories } = useProductContext();


    const uploadImage = (e) => {
        e.preventDefault();
        const acceptedImgFiles = ['png', 'jpg', 'jpeg', 'webp']
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            if (acceptedImgFiles.includes(file.name.split('.').pop())) {
                setForm({ ...form, image: file })
            } else {
                e.target.files = null
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid file type'
                })
            }

        }

    }

    return (
        <div className={`w-full ${!show ? 'hidden' : 'block'} h-screen absolute bg-gray-200 top-0 bg-transparent/30`}>
            <div className="w-2/5 min-w-[600px] bg-white h-5/6 m-auto p-4 mt-14 shadow-xl rounded-md">
                <div className="p-4">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <div className=" py-10 flex flex-col gap-6">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
                            <input type="text" value={form.name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => { setForm({ ...form, name: e.target.value }) }} />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                            <select value={form.category_id} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => { setForm({ ...form, category_id: +e.target.value }) }}>
                                <option value="">Select Category</option>
                                {
                                    categories?.map((item, i) => <option key={i} value={item.id}>{item.name}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                            <input type="number" value={form.price} min={1} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => { setForm({ ...form, price: +e.target.value }) }} />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                            <textarea value={form.description} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline h-28" onChange={(e) => { setForm({ ...form, description: e.target.value }) }} /></div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Image</label>
                            <input type="file" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => { uploadImage(e) }} />
                        </div>

                        <div className="w-full flex justify-end gap-10 mt-6">
                            <button className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline" onClick={() => close()}>Cancel</button>
                            <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline" onClick={() => handle()}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialog