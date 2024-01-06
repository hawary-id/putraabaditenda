import Link from '@/Components/Link';
import Title from '@/Components/Admin/Title';
import Filter from '@/Components/Filter';
import IconButton from '@/Components/IconButton';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';

export default function Index({auth,categories}) {
    const { get,delete: destroy } = useForm();
    const [filterText, setFilterText] = useState('');
    
    const handleFilter = e => {
        const value = e.target.value || '';
        setFilterText(value);
    };
    const handleClear = () => {
        setFilterText('');
    };

    const filteredData = categories.filter(item =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    const handleEdit = (id) => {
        get(route('admin.category.edit',id));
    }

    function handleDelete(id) {
        Swal.fire({
            text: 'Sure you want to delete?',
            icon: 'warning',
            showDenyButton: true,
            showCancelButton: true,
            showConfirmButton:false,
            denyButtonText: 'Delete',
        }).then((result) => {
            if (result.isDenied) {
                destroy(route('admin.category.destroy',id))
            }
        });
    };
    const columns = [
        {
            name:'No',
            selector: (_, index) => index + 1,
        },
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Thumbnail',
            cell: row => (
                <img src={row.thumbnail} alt={row.name} />
            )
        },
        {
            name:'Action',
            cell: row => (
                (
                    <div className="flex items-center gap-3">
                        <IconButton onClick={()=> handleEdit(row.id)} className="bg-yellow-500 bi-pencil hover:bg-yellow-600 active:bg-yellow-600 focus:bg-yellow-600 focus:ring-yellow-600"/>
                        <IconButton onClick={()=> handleDelete(row.id)} className="bg-gray-500 bi-trash hover:bg-gray-600 active:bg-gray-600 focus:bg-gray-600 focus:ring-gray-600"/>
                    </div>
                )
            )
        }
    ];
    
    
    return (
        <Authenticated user={auth.user}>
            <Head title='Category' />
            <Title label="Category"/>
            <div className="flex justify-between mb-3">
                <Link href={route('admin.category.create')} className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-600 focus:ring-blue-600">
                    <span className="bi-plus-lg"/>Add
                </Link>
                <Filter filterText={filterText} onFilter={handleFilter} onClear={handleClear}/>
            </div>
            <div className="w-full overflow-hidden rounded-md shadow">
                <DataTable
                    columns={columns}
                    data={filteredData}
                />
            </div>
        </Authenticated>
    )
}