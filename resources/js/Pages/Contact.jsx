import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextArea from '@/Components/TextArea';
import TextInput from '@/Components/TextInput';
import Guest from '@/Layouts/GuestLayout';
import BreadCrumb from '@/Parts/Breadcrumb';
import Header from '@/Parts/Header';
import { Head, useForm } from '@inertiajs/react';

export default function Contact({ auth, laravelVersion, phpVersion }) {
    const breadCrumbItem = [
        {
            label:'Beranda',
            url:'home'
        },
        {
            label:'Kontak Kami',
            url:'contact'
        },
    ]

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Guest>
            <Head title="Kontak" />
            <Header label="Kontak Kami" />
            <div className="pb-10">
                <BreadCrumb items={breadCrumbItem}/>
                <div className="container mx-auto">
                    <div className="grid w-full grid-cols-3 gap-6 mb-10">
                        <div className="flex flex-col items-center justify-center w-full p-5 bg-white border rounded-md shadow-md">
                            <span className="px-3 py-2 mb-3 text-2xl text-white bg-blue-300 border rounded-full bi-geo-alt"></span>
                            <h3 className='text-xl font-semibold text-gray-800'>Alamat Kantor</h3>
                            <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full p-5 bg-white border rounded-md shadow-md">
                            <span className="px-3 py-2 mb-3 text-2xl text-white bg-blue-300 border rounded-full bi-telephone"></span>
                            <h3 className='text-xl font-semibold text-gray-800'>Hubungi Kami</h3>
                            <p className='text-gray-500'>085775539967</p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full p-5 bg-white border rounded-md shadow-md">
                            <span className="px-3 py-2 mb-3 text-2xl text-white bg-blue-300 border rounded-full bi-envelope"></span>
                            <h3 className='text-xl font-semibold text-gray-800'>Kirim Kami Pesan</h3>
                            <p className='text-gray-500'>info@putraabaditenda.com</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <h2 className='mb-3 text-2xl font-semibold text-gray-800'>Hubungi kami</h2>
                        <div className="flex gap-6">
                        <iframe className="w-3/5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507589.1483072589!2d106.19559029678241!3d-6.323956602534884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4209cb96f49035%3A0xe2033ed636ad6f55!2sPutra%20Abadi%20Tenda!5e0!3m2!1sid!2sid!4v1704471371368!5m2!1sid!2sid" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            <form onSubmit={submit} className="w-2/5 p-8 border rounded-md shadow-lg">
                                <div className='mb-5'>
                                    <InputLabel htmlFor="name" value="Nama Lengkap" />
                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="block w-full mt-1"
                                        autoComplete="name"
                                        placeholder="Masukkan nama lengkap"
                                        onChange={(e) => setData('name', e.target.value)}
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div className='mb-5'>
                                    <InputLabel htmlFor="email" value="Alamat Email" />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="block w-full mt-1"
                                        autoComplete="email"
                                        placeholder="Masukkan alamat email"
                                        onChange={(e) => setData('email', e.target.value)}
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div className='mb-5'>
                                    <InputLabel htmlFor="subject" value="Subjek" />
                                    <TextInput
                                        id="subject"
                                        name="subject"
                                        value={data.subject}
                                        className="block w-full mt-1"
                                        autoComplete="subject"
                                        placeholder="Masukkan subjek"
                                        onChange={(e) => setData('subject', e.target.value)}
                                    />

                                    <InputError message={errors.subject} className="mt-2" />
                                </div>
                                <div className='mb-5'>
                                    <InputLabel htmlFor="message" value="Pesan" />
                                    <TextArea
                                        id="message"
                                        name="message"
                                        value={data.message}
                                        className="block w-full mt-1"
                                        autoComplete="message"
                                        placeholder="Masukkan Pesan"
                                        onChange={(e) => setData('message', e.target.value)}
                                    />

                                    <InputError message={errors.message} className="mt-2" />
                                </div>
                                <PrimaryButton className="w-full py-3">
                                    <span className='mr-3 bi-send'></span>
                                    Kirim
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
                
        </Guest>

    );
}
