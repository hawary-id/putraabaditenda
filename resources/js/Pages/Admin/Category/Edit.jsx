import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextArea from '@/Components/TextArea';
import TextInput from '@/Components/TextInput';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm } from '@inertiajs/react';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function Index({auth,category,categories}) {
    const [errors, setErrors] = useState({});
    const { data, setData, processing } = useForm({
        name: category.name,
        description: category.description,
        thumbnail: category.thumbnail,
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};
        
        if (!data.name) {
          newErrors.name = "The name field is required.";
          isValid = false;
        }else {
            const categoryExist = categories.some(category => category.name === data.name);
            if (categoryExist && (data.name != category.name)) {
                newErrors.name = 'The name has already been taken.';
                isValid = false;
            }
        }
        if (!data.description) {
            newErrors.description = "The description field is required.";
            isValid = false;
        }
        if (!data.thumbnail) {
            newErrors.thumbnail = "The thumbnail field is required.";
            isValid = false;
        } else {
            const allowedFormats = ["image/jpeg", "image/png"];
            const maxSize = 2 * 1024 * 1024; // 2MB
          
            if ((data.thumbnail != category.thumbnail) && !allowedFormats.includes(data.thumbnail.type)) {
                newErrors.thumbnail = "The thumbnail format must be 'JPG/PNG'";
                isValid = false;
            } else if (data.thumbnail.size > maxSize) {
                newErrors.thumbnail = "The thumbnail size must be 2MB maximum";
                isValid = false;
            }
        }
        setErrors(newErrors);
        return isValid;
    };

    const submit = (e) => {
        e.preventDefault();
        Swal.fire({
            text: 'Sure you want to save?',
            icon: 'question',
            showCancelButton: true,
            showConfirmButton:true,
        }).then((result) => {
            if (result.isConfirmed) {
                if(validateForm()){
                    router.post(route('admin.category.update',category.id),{
                        ...data,
                        _method: 'put'
                    });
                }
            }
        });
    };
    
    return (
        <Authenticated user={auth.user}>
            <Head title='Edit Category' />
            <div className="flex justify-center w-full">
                <form onSubmit={submit} className="w-full bg-white rounded-md shadow-md md:w-1/4">
                    <div className="px-5 py-3 font-semibold text-gray-800 uppercase border-b">Create New Category</div>
                    <div className="p-3 md:p-5">
                        <div className='mb-3 md:mb-5'>
                            <InputLabel htmlFor="name" value="Name" required/>
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="block w-full mt-1"
                                autoComplete="name"
                                placeholder="Category Name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div className='mb-3 md:mb-5'>
                            <InputLabel htmlFor="description" value="Description" required/>
                            <TextArea
                                id="description"
                                name="description"
                                value={data.description}
                                className="block w-full h-32 mt-1"
                                autoComplete="description"
                                placeholder="Description"
                                onChange={(e) => setData('description', e.target.value)}
                            />
                            <InputError message={errors.description} className="mt-2" />
                        </div>
                        <div className=''>
                            <InputLabel htmlFor="thumbnail" value="Thumbnail" required/>
                            {data.thumbnail ? (
                                <div className="mt-2">
                                    {data.thumbnail != category.thumbnail ? (
                                        <img
                                            src={URL.createObjectURL(data.thumbnail)}
                                            alt="Uploaded Photo"
                                            className="object-contain object-left w-full mb-2 max-h-24"
                                        />
                                    ):(
                                        <img
                                            src={`/storage/${data.thumbnail}`}
                                            alt="Uploaded Photo"
                                            className="object-contain object-left w-full mb-2 max-h-24"
                                        />
                                    )}
                                    <div className="flex items-center">
                                        <span className="mr-2 text-sm font-light text-gray-600">{data.thumbnail.name}</span>
                                        <button
                                            type="button"
                                            className="text-red-600 underline"
                                            onClick={(e) => setData('thumbnail',null)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ):(
                                <TextInput
                                    id="thumbnail"
                                    type="file"
                                    name="thumbnail"
                                    className="block w-full mt-1 shadow-none"
                                    onChange={(e) => setData('thumbnail', e.target.files[0])}
                                />
                                )}
                            <InputError message={errors.thumbnail} className="mt-2" />
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-3 px-3 py-3 bg-slate-100 md:px-5">
                        <PrimaryButton href={route('admin.category.index')} className="bg-gray-600 hover:bg-gray-700 active:bg-gray-700 focus:bg-gray-700 focus:ring-gray-500">CANCEL</PrimaryButton>
                        <PrimaryButton className="" disabled={processing}>
                            Save
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </Authenticated>
    )
}