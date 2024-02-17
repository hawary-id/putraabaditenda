import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextArea from '@/Components/TextArea';
import TextInput from '@/Components/TextInput';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import Swal from 'sweetalert2';

export default function Index({auth}) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        thumbnail: '',
    });

    const submit = (e) => {
        e.preventDefault();
        Swal.fire({
            text: 'Sure you want to save?',
            icon: 'question',
            showCancelButton: true,
            showConfirmButton:true,
        }).then((result) => {
            if (result.isConfirmed) {
                post(route('admin.category.store'));
            }
        });
    };
    
    return (
        <Authenticated user={auth.user}>
            <Head title='Create Category' />
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
                                    <img
                                        src={URL.createObjectURL(data.thumbnail)}
                                        alt="Uploaded Photo"
                                        className="object-contain object-left w-full mb-2 max-h-24"
                                    />
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