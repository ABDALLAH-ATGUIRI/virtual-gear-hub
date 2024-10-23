import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Option, Select, Textarea } from '@material-tailwind/react'
import DialogDefault from '../../../../components/DialogDefault'

import { useFetchCategoriesMutation } from '@features/categories/categoryApiSlice'
import { selectCurrentCategories, setCategoriesCredentials } from '@features/categories/categorySlice'
import { useCreateProductMutation, useUpdateProductMutation } from '@features/products/productApiSlice'

const DEFAULTFORM = {
    name: "",
    category_id: "",
    price: "",
    description: "",
    image: "",
}

export const CreateEdit = (values) => {
    const [form, setForm] = useState({})
    const dispatch = useDispatch();
    const [fetchCategories] = useFetchCategoriesMutation();
    const [create] = useCreateProductMutation()
    const [update] = useUpdateProductMutation()
    const categories = useSelector(selectCurrentCategories)


    const handle = useCallback(async () => {
        if (!form.id) {
            new Promise((resolve, reject) => {
                create(form).unwrap().then((response) => resolve(response)).catch((error) => reject(error))
            })
        } else {
            new Promise((resolve, reject) => {
                update(form).unwrap().then((response) => resolve(response)).catch((error) => reject(error))
            })
        }
    }, [create, form]);

    const uploadImage = (e) => {
        e.preventDefault();
        const acceptedImgFiles = ['png', 'jpg', 'jpeg', 'webp']
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            if (acceptedImgFiles.includes(file.name.split('.').pop())) {
                setForm({ ...form, image: file })
            } else {
                e.target.files = null
            }
        }
    }

    useEffect(() => {
        new Promise((resolve, reject) => {
            dispatch(fetchCategories).unwrap().then((result) => {
                if (result.total !== 0) {
                    dispatch(setCategoriesCredentials(result))
                }
                resolve(result)
            }).catch((err) => reject(err));
        })
    }, [dispatch])

    useEffect(() => {
        if (values?.product?.id) {
            setForm(values.product)
        } else {
            setForm(DEFAULTFORM)
        }
    }, [values])

    return (
        <DialogDefault title={"Create New Product"} dialogId={'create-edit-product'} handle={handle} >
            {{
                body: <form className="p-6 flex flex-col gap-8" encType="multipart/form-data">
                    <div className="mb-4 flex flex-col lg:flex-row gap-6 ">
                        <Input
                            size="lg"
                            type='text'
                            color="orange"
                            value={form.name}
                            label="Product Name"
                            required
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                        <Input
                            type='number'
                            color="orange"
                            value={form.price}
                            min={1}
                            size="lg"
                            label="Price"
                            required
                            onChange={(e) => setForm({ ...form, price: e.target.value })}
                        />
                    </div>
                    <div className='mb-4 flex flex-col lg:flex-row gap-6'>
                        <Select
                            label="Select Category"
                            color="orange"
                            value={form.category_id?.toString()}
                            required
                            onChange={(value) => setForm({ ...form, category_id: value })}
                        >
                            {
                                categories?.map((category) => (<Option key={category?.id} value={category?.id.toString()}>{category?.name}</Option>))
                            }
                        </Select>
                        <Input
                            type='file'
                            color="orange"
                            size="lg"
                            label="Picture of product"
                            required
                            className="text-sm text-stone-500
                        file:mr-5 file:py-1 file:px-3 file:border-[1px]
                        file:text-xs file:font-medium
                        file:bg-orange-50 file:text-stone-700
                        hover:file:cursor-pointer
                         hover:file:bg-orange-50
                        hover:file:text-orange-700"
                            onChange={(e) => uploadImage(e)}
                        />
                    </div>

                    <div className="relative w-full min-w-[200px]">
                        <Textarea
                            label="Description"
                            color="orange"
                            value={form.description}
                            required
                            onChange={(e) => setForm({ ...form, description: e.target.value })}
                        />
                    </div>
                </form>
            }}
        </DialogDefault>
    )
}