import Sidebar from '@/Components/Sidebar';
import { Button } from 'primereact/button';
import { Sidebar as SidebarPrime } from 'primereact/sidebar';
import { useState } from 'react';

export default function Authenticated({ user, header, children }) {
    const [visible, setVisible] = useState(false);
    return (
        <div className="flex min-h-screen bg-gray-100">
            <SidebarPrime visible={visible} onHide={() => setVisible(false)} className='block md:hidden'>
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </SidebarPrime>
            <Sidebar/>
           <div className="w-full">
                <nav className="w-full">
                    <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md md:justify-end">
                        <button onClick={() => setVisible(true)} className='block px-2 py-1 border rounded md:hidden h-fit bi-list hover:bg-gray-100 active:bg-gray-100 focus:bg-gray-100'></button>
                        <button className="flex items-center space-x-3 group">
                            <div className="hidden text-gray-500 transition-all ease-in-out group-hover:text-gray-800 md:block">Hy, {user.name}</div>
                            <div className="w-10 h-10 bg-gray-300 rounded-full brightness-75 transition-all ease-in-out bg-[url('https://picsum.photos/40')] group-hover:brightness-100"></div>
                        </button>
                    </div>
                </nav>
                <main className='p-4'>{children}</main>
           </div>
        </div>
    );
}
