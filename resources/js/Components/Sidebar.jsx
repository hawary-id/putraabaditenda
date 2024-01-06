import { Link } from '@inertiajs/react';
import React from 'react';

export default function Sidebar() {
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
          link:'admin.dashboard',
          active:'admin.dashboard'
        },
      ],
    },
    {
      label: 'Data Master',
      items: [
        {
          label: 'Category',
          icon: 'bi-tag',
          link:'admin.category.index',
          active:'admin.category.*'
        },
        {
            label: 'Category',
            icon: 'bi-tag',
            link:'admin.category.index',
            active:'admin.category.*'
          },
      ],
    },
    {
      label: 'Profile',
      items: [
        {
          label: 'Settings',
          icon: 'bi-gear',
          link:'admin.dashboard',
          active:'admin.dashboard'
        },
        {
          label: 'Logout',
          icon: 'bi-box-arrow-right',
          link:'admin.dashboard',
          active:'admin.dashboard'
        },
      ],
    },
  ];

  return (
    <section className="flex-col hidden min-h-screen py-3 bg-gray-800 shadow-md md:flex w-72">
      <ul>
        <div className="px-4 py-3 mb-3 text-white">PUTRA ABADI TENDA</div>
        {items.map((category, index) => (
          <div key={category&&index} className='space-y-2'>
            {category.label && <div className="px-4 mt-3 text-sm font-light text-gray-400">{category.label}</div>}
            {category.items.map((item, subIndex) => (
              <li key={item&&subIndex} className={`py-2 px-4 text-gray-100 transition duration-300 cursor-pointer hover:bg-gray-600 ${route().current(item.active) && 'bg-gray-600 text-white'}`}>
                <Link href={route(`${item.link}`)} className="">
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
