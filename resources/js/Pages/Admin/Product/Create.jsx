import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import ReactQuill from "react-quill";
import Select from 'react-select';
import Swal from 'sweetalert2';

export default function Index({auth,categories}) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        thumbnail_1: '',
        thumbnail_2: '',
        thumbnail_3: '',
        price: '',
        discount_price: '',
        category_id: '',
    });

    const categoryOptions =  categories.map((category) => ({
        value: category.id,
        label:category.name
    }))

    const submit = (e) => {
        e.preventDefault();
        Swal.fire({
            text: 'Sure you want to save?',
            icon: 'question',
            showCancelButton: true,
            showConfirmButton:true,
        }).then((result) => {
            if (result.isConfirmed) {
                post(route('admin.product.store'));
            }
        });
    };
    
    return (
        <Authenticated user={auth.user}>
            <Head title='Create Product' />
            <div className="flex justify-center w-full">
                <form onSubmit={submit} className="w-full bg-white rounded-md shadow-md md:w-1/2">
                    <div className="px-5 py-3 font-semibold text-gray-800 uppercase border-b">Create New Product</div>
                    <div className="p-3 md:p-5">
                        <div className="mb-5">
                            <InputLabel htmlFor="category_id" value="Category" required/>
                            <Select
                                name="category_id"
                                options={categoryOptions}
                                isClearable={true}
                                className="block w-full mt-1"
                                placeholder="Select Category"
                                value={categoryOptions.find(option => option.value === data.category_id)}
                                onChange={selectedOption => setData('category_id', selectedOption ? selectedOption.value : null)}
                            />
                            <InputError message={errors.category_id} className="mt-1"/>
                        </div>
                        <div className='mb-3 md:mb-5'>
                            <InputLabel htmlFor="name" value="Name" required/>
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="block w-full mt-1"
                                autoComplete="name"
                                placeholder="Product Name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 mb-3 md:gap-5 md:mb-5">
                            <div className=''>
                                <InputLabel htmlFor="price" value="Price" required/>
                                <TextInput
                                    id="price"
                                    type="number"
                                    name="price"
                                    value={data.price}
                                    className="block w-full mt-1"
                                    autoComplete="price"
                                    placeholder="Price"
                                    onChange={(e) => setData('price', e.target.value)}
                                />
                                <InputError message={errors.price} className="mt-2" />
                            </div>
                            <div className=''>
                                <InputLabel htmlFor="discount_price" value="Discount Price" required/>
                                <TextInput
                                    id="discount_price"
                                    type="number"
                                    name="discount_price"
                                    value={data.discount_price}
                                    className="block w-full mt-1"
                                    autoComplete="discount_price"
                                    placeholder="Discount price"
                                    onChange={(e) => setData('discount_price', e.target.value)}
                                />
                                <InputError message={errors.discount_price} className="mt-2" />
                            </div>
                        </div>
                        <div className='mb-3 md:mb-5'>
                            <InputLabel htmlFor="description" value="Description" required/>
                            <ReactQuill
                                theme="snow"   
                                className="h-44 md:h-64 mt-1 mb-[80px] md:mb-[60px]" 
                                value={data.description} 
                                onChange={(content) => setData('description', content)}
                            />
                            <InputError message={errors.description} className="mt-2" />
                        </div>
                        <div className="grid gap-3 mb-3 gird-cols-1 md:grid-cols-3">
                            <div className=''>
                                <InputLabel htmlFor="thumbnail" value="Thumbnail" required/>
                                {data.thumbnail_1 ? (
                                    <div className="mt-2">
                                        <img
                                            src={URL.createObjectURL(data.thumbnail_1)}
                                            alt="Uploaded Photo"
                                            className="object-contain object-left w-full mb-2 max-h-24"
                                        />
                                        <div className="">
                                            <span className="mr-2 text-sm font-light text-gray-600">{data.thumbnail_1.name}</span>
                                            <button
                                                type="button"
                                                className="text-red-600 underline"
                                                onClick={(e) => setData('thumbnail_1',null)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ):(
                                    <TextInput
                                        id="thumbnail_1"
                                        type="file"
                                        name="thumbnail_1"
                                        className="block w-full mt-1 shadow-none"
                                        onChange={(e) => setData('thumbnail_1', e.target.files[0])}
                                    />
                                    )}
                                <InputError message={errors.thumbnail_1} className="mt-2" />
                            </div>
                            <div className=''>
                                <InputLabel htmlFor="thumbnail_2" value="Thumbnail 2" required/>
                                {data.thumbnail_2 ? (
                                    <div className="mt-2">
                                        <img
                                            src={URL.createObjectURL(data.thumbnail_2)}
                                            alt="Uploaded Photo"
                                            className="object-contain object-left w-full mb-2 max-h-24"
                                        />
                                        <div className="">
                                            <span className="mr-2 text-sm font-light text-gray-600">{data.thumbnail_2.name}</span>
                                            <button
                                                type="button"
                                                className="text-red-600 underline"
                                                onClick={(e) => setData('thumbnail_2',null)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ):(
                                    <TextInput
                                        id="thumbnail_2"
                                        type="file"
                                        name="thumbnail_2"
                                        className="block w-full mt-1 shadow-none"
                                        onChange={(e) => setData('thumbnail_2', e.target.files[0])}
                                    />
                                    )}
                                <InputError message={errors.thumbnail_2} className="mt-2" />
                            </div>
                            <div className=''>
                                <InputLabel htmlFor="thumbnail_3" value="Thumbnail 3" required/>
                                {data.thumbnail_3 ? (
                                    <div className="mt-2">
                                        <img
                                            src={URL.createObjectURL(data.thumbnail_3)}
                                            alt="Uploaded Photo"
                                            className="object-contain object-left w-full mb-2 max-h-24"
                                        />
                                        <div className="">
                                            <span className="mr-2 text-sm font-light text-gray-600">{data.thumbnail_3.name}</span>
                                            <button
                                                type="button"
                                                className="text-red-600 underline"
                                                onClick={(e) => setData('thumbnail_3',null)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ):(
                                    <TextInput
                                        id="thumbnail_3"
                                        type="file"
                                        name="thumbnail_3"
                                        className="block w-full mt-1 shadow-none"
                                        onChange={(e) => setData('thumbnail_3', e.target.files[0])}
                                    />
                                    )}
                                <InputError message={errors.thumbnail_3} className="mt-2" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 px-3 py-3 md:flex md:items-center md:justify-end bg-slate-100 md:px-5">
                        <PrimaryButton href={route('admin.product.index')} className="bg-gray-600 hover:bg-gray-700 active:bg-gray-700 focus:bg-gray-700 focus:ring-gray-500">CANCEL</PrimaryButton>
                        <PrimaryButton className="" disabled={processing}>
                            Save
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </Authenticated>
    )
}