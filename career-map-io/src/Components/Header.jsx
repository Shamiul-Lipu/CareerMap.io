import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        // header section
        <section className='flex justify-evenly items-center'>
            {/* Logo */}
            <h1 className='text-4xl font-bold'>Career<span className='text-violet-500'>M</span>ap<span className='text-violet-500'>.</span>io</h1>
            {/* nav menu */}
            <nav>
                <ul className='flex justify-evenly items-center gap-6'>
                    <li className='text-lg font-medium text-gray-500 hover:text-violet-500'>
                        <NavLink to='/statistics'
                            aria-label='statistics'
                            title='statistics'
                            className={({ isActive }) => (isActive ? 'active' : 'default')} >
                            Statistics
                        </NavLink>
                    </li>
                    <li className='text-lg font-medium text-gray-500 hover:text-violet-500'>
                        <NavLink to='/applied-jobs'
                            aria-label='applied-jobs'
                            title='applied-jobs'
                            className={({ isActive }) => (isActive ? 'active' : 'default')} >
                            Applied Jobs
                        </NavLink>
                    </li>
                    <li className='text-lg font-medium text-gray-500 hover:text-violet-500'>
                        <NavLink to='/blog'
                            aria-label='blog'
                            title='blog'
                            className={({ isActive }) => (isActive ? 'active' : 'default')} >
                            Blog
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <button className='button-primary'>Start Applying</button>
        </section>
    );
};

export default Header;