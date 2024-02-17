import Card from '@/Components/Admin/Card';
import Title from '@/Components/Admin/Title';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({auth,products,categories}) {
    
    return (
        <Authenticated user={auth.user}>
            <Head title='Dashboard' />
            <Title label="Dashboard"/>
            <div className="grid w-full grid-cols-2 gap-3 md:gap-6 md:grid-cols-5">
                <Card title="Product" subtitle={products} color="text-sky-600" icon="bi-collection"/>
                <Card title="Category" subtitle={categories} color="text-rose-600" icon="bi-tag"/>
                {/* <Card title="Visitors" subtitle="0" color="text-emerald-500" icon="bi-people"/> */}
            </div>
        </Authenticated>
    )
}