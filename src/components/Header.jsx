import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { XMarkIcon, Bars3Icon,BoltIcon } from '@heroicons/react/24/solid'
const Header = () => {

    const [open, setOpen] = useState(false);
    return (
        <div className='flex justify-between px-5 bg-gray-200 py-4 items-center text-xl'>
            <div>
                <Link to='/'>
                    <button className='flex items-center'>
                        <BoltIcon className='h-10 w-10 text-blue-500' />
                    <span className='font-bold'> NextPage</span> </button>
                </Link>
            </div>
            <ul className=' hidden space-x-8 xl:flex'>
                <li>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-400' : ''}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/book' className={({ isActive }) => isActive ? 'text-blue-400' : ''}>
                        Books
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-400' : ''}>
                        About
                    </NavLink>
                </li>
            </ul>



            <div className=' xl:hidden' onClick={() => setOpen(!open)}>
                <span >
                    {
                        open ? <XMarkIcon  className='h-10 w-10 text-blue-500' />  :  <Bars3Icon className='h-10 w-10 text-blue-500' /> 
                    }
                </span>

            </div>
            {
                open ? (
                <ul className=' absolute right-3 top-11 mt-10 z-10 bg-purple-100 p-5 '>
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-400' : ''}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/book' className={({ isActive }) => isActive ? 'text-blue-400' : ''}>
                            Books
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-400' : ''}>
                            About
                        </NavLink>
                    </li>
                </ul>) : ''
            }

           
        </div>
    );
};

export default Header;