import FlashMessage from '@/Components/FlashMessage';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextArea from '@/Components/TextArea';
import TextInput from '@/Components/TextInput';
import Guest from '@/Layouts/GuestLayout';
import BreadCrumb from '@/Parts/Breadcrumb';
import Header from '@/Parts/Header';
import { Head, useForm } from '@inertiajs/react';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2';

export default function Contact({ flashMessage }) {
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

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
        captcha: '',
    });

    const submit = (e) => {
        e.preventDefault();
        Swal.fire({
            text: 'Kirim Pesan Ini?',
            icon: 'question',
            showCancelButton: true,
            showConfirmButton:true,
        }).then((result) => {
            if (result.isConfirmed) {
                post(route('contactStore'));
            }
        });
    };

    return (
        <Guest>
            <Head>
                <title>Kontak | Hubungi CV Putra Abadi Tenda untuk Layanan Tenda dan Terpal TERMURAH dan TERBAIK di Tangerang</title>
                <meta name="description" content="Temukan cara terbaik untuk menghubungi CV Putra Abadi Tenda di Tangerang. Kami menyediakan layanan tenda dan terpal terbaik untuk acara, bisnis, dan proyek konstruksi. Hubungi kami sekarang untuk informasi lebih lanjut, permintaan penawaran, atau pertanyaan. Layanan pelanggan kami siap membantu Anda!" />
            </Head>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} type={flashMessage.type}/>
            )}
            <Header label="Kontak Kami" />
            <div className="pb-10">
                <BreadCrumb items={breadCrumbItem}/>
                <div className="container px-3 mx-auto md:px-0">
                    <div className="grid w-full grid-cols-1 gap-4 mb-10 md:gap-6 md:grid-cols-3">
                        <div className="flex flex-col items-center justify-center w-full p-5 bg-white border rounded-md shadow-md">
                            <span className="px-3 py-2 mb-3 text-2xl text-white bg-blue-300 border rounded-full bi-geo-alt"></span>
                            <h3 className='text-xl font-semibold text-gray-800'>Alamat Kami</h3>
                            <p className='text-center text-gray-500'>Ds. Ciangir RT 01 RW 04 Kec. Legok, Kab. Tangerang - Indonesia</p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full p-5 bg-white border rounded-md shadow-md">
                            <span className="px-3 py-2 mb-3 text-2xl text-white bg-blue-300 border rounded-full bi-whatsapp"></span>
                            <h3 className='text-xl font-semibold text-gray-800'>Whatshapp</h3>
                            <p className='text-center text-gray-500'>0857-7755-8494</p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full p-5 bg-white border rounded-md shadow-md">
                            <span className="px-3 py-2 mb-3 text-2xl text-white bg-blue-300 border rounded-full bi-envelope"></span>
                            <h3 className='text-xl font-semibold text-gray-800'>Alamat Email</h3>
                            <p className='text-center text-gray-500'>info@putraabaditenda.com</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <h2 className='mb-3 text-2xl font-semibold text-gray-800'>Hubungi kami</h2>
                        <div className="flex flex-col gap-4 md:gap-6 md:flex-row">
                            <iframe className="order-last w-full md:w-3/5 md:order-first h-52 md:h-[550px] overflow-hidden rounded-md shadow-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507589.1483072589!2d106.19559029678241!3d-6.323956602534884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4209cb96f49035%3A0xe2033ed636ad6f55!2sPutra%20Abadi%20Tenda!5e0!3m2!1sid!2sid!4v1704471371368!5m2!1sid!2sid" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            <form onSubmit={submit} className="p-4 border rounded-md shadow-lg md:p-8 w-fukk md:w-2/5">
                                <div className='mb-3 md:mb-5'>
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
                                <div className='order-first mb-3 md:mb-5 md:order-last'>
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
                                <div className='mb-3 md:mb-5'>
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
                                <div className='mb-3 md:mb-5'>
                                    <InputLabel htmlFor="message" value="Pesan" />
                                    <TextArea
                                        id="message"
                                        name="message"
                                        value={data.message}
                                        className="block w-full h-24 mt-1 md:h-32"
                                        autoComplete="message"
                                        placeholder="Masukkan Pesan"
                                        onChange={(e) => setData('message', e.target.value)}
                                    />

                                    <InputError message={errors.message} className="mt-2" />
                                </div>
                               <div className="flex flex-col items-end mb-3">
                                    <ReCAPTCHA sitekey="6LckzmwpAAAAAJDXPOEoQOHkbL_719NwF7tJMDwv" onChange={(value) => setData('captcha', value)} />
                                    <InputError message={errors.captcha} className="mt-2" />
                               </div>
                                <PrimaryButton className="w-full py-3" disabled={processing}>
                                    <span className='mr-3 bi-send'/>
                                    <span className="">Kirim</span>
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
                
        </Guest>

    );
}
