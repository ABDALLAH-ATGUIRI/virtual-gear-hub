import { useEffect, useState } from 'react'
import { Avatar, Button, IconButton, Typography } from '@material-tailwind/react'
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import DialogDefault from '../../../../components/DialogDefault'
import { PNGS } from '../../../../assets'

const PRODUCTS = [
    {
        name: 'Product1',
        category: 'Category1',
        color: 'blue',
        quantity: 2,
        price: 100
    },
    {
        name: 'Product2',
        category: 'Category2',
        color: 'green',
        quantity: 4,
        price: 200
    },
    {
        name: 'Product2',
        category: 'Category2',
        color: 'red',
        quantity: 6,
        price: 300
    },
    {
        name: 'Product2',
        category: 'Category2',
        color: 'blue',
        quantity: 8,
        price: 400
    },
]

const PanelDialog = () => {
    const [subtotal, setSubTotal] = useState(0);

    const contePriceFinal = (price) => setSubTotal(subtotal + price)

    useEffect(() => {
        const totalPrice = PRODUCTS.map((item) => item.price * item.quantity).reduce((a, b) => a + b, 0)
        setSubTotal(totalPrice)
    }, [])
    return (
        <DialogDefault title={'Product Panel'} dialogId={'shopping-panel'} className={'bg-blue-gray-900 [&_*]:text-white md:!min-w-[90vw] xl:!min-w-[70vw]'}>
            {{
                body: <div
                    data-te-perfect-scrollbar-init
                    className='flex flex-col gap-8 py-6 px-2 overflow-y-scroll overflow-x-hidden'
                >
                    {PRODUCTS.map((product, index) => <ProductCard key={`${product.name + index}`} product={product} handelCount={contePriceFinal} />)}
                </div>,
                footer: <div className='w-full flex flex-row justify-between items-center'>
                    <div className='flex gap-10'>
                        <Button className='w-52 py-6 bg-black/40 rounded-sm flex items-center justify-evenly'>
                            Go to shopping page
                        </Button>
                    </div>
                    <div className='px-8 py-1 rounded-sm text-center bg-gradient-to-tl from-purple-500 via-indigo-500 to-purple-600'>
                        <Typography className="font-medium !text-[12px]" > The total amount is </Typography>
                        <Typography variant="h4" className="font-semibold">{subtotal} DH</Typography>
                    </div>
                </div>
            }}

        </DialogDefault >
    )
}


const ProductCard = ({ product, handelCount }) => {
    const [quantity, setQuantity] = useState(product.quantity);

    const next = () => {
        setQuantity(quantity + 1)
        product.quantity += 1;
        handelCount(+product.price)
    };

    const prev = () => {
        if (quantity === 1) return;
        setQuantity(quantity - 1)
        product.quantity += 1;
        handelCount((-product.price))
    };

    return <div className={`reactive hover:border-2 hover:border-primary bg-black/20 rounded-md w-full flex items-center cursor-pointer`}>
        <div className='relative w-full flex justify-evenly py-6 shadow-l-2xl'>
            <div className='mx-12 p-8'>
                <Avatar src={PNGS.glassvr_1} alt={name} size="xl" className="absolute h-[160%] -top-8 -left-10 w-auto" />
            </div>
            <div className='w-full flex justify-around gap-2'>
                <div className='flex gap-2 items-center flex-col'>
                    <Typography className="font-bold !text-xl " >
                        {product.name}
                    </Typography>
                    <Typography variant="small" className='!text-gray-500' >
                        {product.category}
                    </Typography>
                </div>
                <hr className='h-16 w-[0.5px] bg-gray-100/50' />
                <div className="flex items-center gap-3">
                    <Typography
                        variant="paragraph"
                        color="white"
                        className="font-medium"
                    >
                        {product.color}
                    </Typography>
                </div>
                <hr className='h-16 w-[0.5px] bg-gray-100/50' />
                <div className="w-full !max-w-[120px] flex items-center justify-around">
                    <IconButton
                        size="sm"
                        onClick={prev}
                        disabled={quantity === 1}
                        className='rounded-full w-7 h-7'
                    >
                        <MinusCircleIcon className="h-8 w-8 text-gray-500" />
                    </IconButton>
                    <Typography
                        variant="paragraph"
                        color="gray"
                        className="font-bold"
                    >
                        {quantity}
                    </Typography>
                    <IconButton onClick={next} className='rounded-full w-7 h-7'>
                        <PlusCircleIcon className="h-8 w-8 text-gray-500" />
                    </IconButton>
                </div>
                <hr className='h-16 w-[0.5px] bg-gray-100/50' />
                <div className="flex items-center gap-3 flex-col">
                    <Typography
                        variant="paragraph"
                        className="font-normal text-sm !text-blue-gray-400"
                    >
                        Pricing
                    </Typography>
                    <Typography
                        variant="h5"
                        color="white"
                        className="font-semibold"
                    >
                        {product.price} DH
                    </Typography>
                </div>
            </div>
            <IconButton size='sm' className={`absolute right-0 top-0 rounded-sm bg-red-600/50 hover:bg-red-500`}>
                <TrashIcon className="h-4 w-5" />
            </IconButton>
        </div>
    </div>
}

export default PanelDialog