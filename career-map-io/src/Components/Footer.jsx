import React from 'react';

const Footer = () => {
    return (
        <footer className=' text-gray-400'>

            <div className='text-left grid md:flex justify-between items-center py-10 gap-10 container mx-auto px-4'>
                <div>
                    <h3 className='text-white font-bold text-3xl'>CareerMap.io</h3>
                    <p className='text-sm py-5'>Our vision is a world where everyone has access to fulfilling careers. <br /> We're committed to equality, diversity, and empowering individuals to <br /> reach their full potential.</p>
                    <img src="/src/assets/Icons/group.png" alt="" />
                </div>
                <div>
                    <h3 className='text-white font-semibold text-2xl'>Company</h3>
                    <p className='text-sm pt-5 py-1'>About Us</p>
                    <p className='text-sm py-1'>Work</p>
                    <p className='text-sm py-1'>Latest News</p>
                    <p className='text-sm py-1'>Careers</p>
                </div>
                <div>
                    <h3 className='text-white font-semibold text-2xl'>Product</h3>
                    <p className='text-sm pt-5 py-1'>Prototype</p>
                    <p className='text-sm py-1'>Plans&Pricing</p>
                    <p className='text-sm py-1'>Customers</p>
                    <p className='text-sm py-1'>Integrations</p>
                </div>
            </div>

            <div className='pb-10 text-sm text-center text-gray-400'>
                © 2023 CareerMap.io All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;