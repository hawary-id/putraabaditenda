import { Link } from '@inertiajs/react';
import React from 'react';

export default function Sidebar({className="hidden min-h-screen w-72"}) {
  const items = [
    {
      items: [
        {
          label: 'Dashboard',
          icon: 'bi-house',
          link:'admin.dashboard',
          active:'admin.dashboard'
        },
        {
          label: 'Product',
          icon: 'bi-collection',
          link:'admin.product.index',
          active:'admin.product.*'
        },
        {
          label: 'Category',
          icon: 'bi-tag',
          link:'admin.category.index',
          active:'admin.category.*'
        },
        {
          label: 'Profile',
          icon: 'bi-gear',
          link:'admin.profile',
          active:'admin.profile'
        },
        {
          label: 'Logout',
          icon: 'bi-box-arrow-right',
          link:'logout',
          active:'logout',
          method: 'post',
        },
      ],
    },
    // {
    //   label: 'Settings',
    //   items: [
    //     {
    //       label: 'Settings',
    //       icon: 'bi-gear',
    //       link:'admin.dashboard',
    //       active:'admin.dashboard'
    //     },
    //     {
    //       label: 'Settings',
    //       icon: 'bi-gear',
    //       link:'admin.category.index',
    //       active:'admin.category.*'
    //     },
    //   ],
    // },
    // {
    //   items: [
    //     {
    //       label: 'Logout',
    //       icon: 'bi-box-arrow-right',
    //       link:'logout',
    //       active:'admin.dashboard',
    //       method: 'post',
    //     },
    //   ],
    // }
  ];

  return (
    <section className={`${className} flex-col py-3 bg-gray-800 md:flex`}>
      <ul>
        <div className="px-4 py-3 mb-3 text-white">PUTRA ABADI TENDA</div>
        {items.map((category, index) => (
          <div key={category&&index} className='space-y-2'>
            {category.label && <div className="px-4 mt-3 text-sm font-light text-gray-400">{category.label}</div>}
            {category.items.map((item, subIndex) => (
              <li key={item&&subIndex} className="my-2">
                <Link href={route(`${item.link}`)} method={item.method || 'GET'} className={`text-gray-100 block px-4 py-3 transition duration-300 cursor-pointer hover:bg-gray-600 ${route().current(item.active) && 'bg-gray-600 text-white'}`}>
                  <i className={`mr-2 ${item.icon}`}></i>
                  {item.label}
                </Link>
              </li>
            ))}
          </div>
        ))}
      </ul>
    </section>
  );
}
