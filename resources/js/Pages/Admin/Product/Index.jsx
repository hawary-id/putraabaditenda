import Link from '@/Components/Link';
import Title from '@/Components/Admin/Title';
import Filter from '@/Components/Filter';
import IconButton from '@/Components/IconButton';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm } from '@inertiajs/react';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';
import FlashMessage from '@/Components/FlashMessage';
import { formatNumber } from '@/Utils/utils';

export default function Index({auth,flashMessage,products}) {
    const { get,delete: destroy } = useForm();
    const [filterText, setFilterText] = useState('');
    
    const handleFilter = e => {
        const value = e.target.value || '';
        setFilterText(value);
    };
    const handleClear = () => {
        setFilterText('');
    };

    const filteredData = products.filter(item =>
        item.name.toLowerCase().includes(filterText.toLowerCase()) ||
        item.description.toLowerCase().includes(filterText.toLowerCase())
    );

    const handleEdit = (id) => {
        get(route('admin.product.edit',id));
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
                destroy(route('admin.product.destroy',id))
            }
        });
    };
    const columns = [
        {
            name:'No',
            selector: (_, index) => index + 1,
        },
        {
            name: 'Category',
            selector: row => row.category?.name,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Description',
            selector: row => row.description,
            cell: row =>
                <div dangerouslySetInnerHTML={{ __html: row.description.substring(0, 100) + "..." }} />,
        },
        {
            name: 'Price (Rp)',
            selector: row => row.price,
            cell: row => formatNumber(row.price),
            sortable: true,
        },
        {
            name: 'Discount Price (Rp)',
            selector: row => row.discount_price,
            cell: row => formatNumber(row.discount_price),
            sortable: true,
        },
        {
            name: 'Thumbnail',
            cell: row => (
                <img src={`/storage/${row.thumbnail_1}`} alt={row.name} className='w-24 py-2'/>
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
            <Head title='Product' />
            <Title label="Product"/>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} type={flashMessage.type}/>
            )}
            <div className="flex justify-between mb-3">
                <Link href={route('admin.product.create')} className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-600 focus:ring-blue-600">
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