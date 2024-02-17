import Title from '@/Components/Admin/Title';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import DeleteUserForm from './Partials/DeleteUserForm';
import FlashMessage from '@/Components/FlashMessage';

export default function Edit({auth,status,mustVerifyEmail,flashMessage}) {
    
    return (
        <Authenticated user={auth.user}>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} type={flashMessage.type}/>
            )}
            <Head title='Profile' />
            <Title label="Profile"/>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />
                </div>

                <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                    <UpdatePasswordForm className="max-w-xl" />
                </div>

                {/* <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                    <DeleteUserForm className="max-w-xl" />
                </div> */}
            </div>
        </Authenticated>
    )
}