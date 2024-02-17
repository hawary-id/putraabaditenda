import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <div className="flex items-center justify-center h-screen p-3 bg-gray-100 md:p-0">
            <Head title="Forgot Password" />
            <div className="w-full p-5 bg-white rounded-md shadow-md md:w-1/4">
                <div className="text-2xl font-semibold text-center text-blue-600">LUPA PASSWORD</div>
                <div className="flex items-center justify-center w-full gap-3 mb-5">
                    <ApplicationLogo className="h-10 pb-1"/>
                    <div className="text-2xl font-semibold">PUTRA ABADI TENDA</div>
                </div>
                <div className="mb-4 text-sm text-gray-600">
                Lupa kata sandi? Masukkan alamat email Anda untuk mendapatkan URL reset kata sandi.
                </div>

                {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}

                <form onSubmit={submit}>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full mt-1"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Email Password Reset Link
                        </PrimaryButton>
                    </div>
                </form>
            </div>
            
        </div>
    );
}
