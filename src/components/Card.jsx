import { useState } from 'react'

const Card = ({ item }) => {
    const [colors, setColors] = useState({
        jus: 'text-yellow-500', salad: 'text-green-500', food: 'text-orange-500'
    })

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <div className='p-4'>
                <img className="rounded-t-lg h-56 w-5/6 p-2 mx-auto" src={`http://localhost:8000/storage/${item.image}`} alt="" />
            </div>


            <div className="p-5">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                <span className={`${colors[item.category.name.toLowerCase()]} font-semibold`}>#{item.category.name}</span>
                <p className="font-normal text-gray-700 dark:text-gray-400 py-4">{item?.description}</p>
                <div className="flex items-center justify-between py-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{item.price} DH</span>
                    <button className="text-white bg-green-400  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2 text-center dark:hover:bg-primary">Order Now</button>
                </div>
            </div>
        </div>

    )
}

export default Card