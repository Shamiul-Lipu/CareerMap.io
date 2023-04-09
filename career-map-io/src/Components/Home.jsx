import React from 'react';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <main className='px-2 py-10 container max-w-full bg-violet-50'>
            {/* hero section */}
            <section className='flex justify-between container mx-auto'>
                <div className='text-left'>
                    <div className='font-bold text-7xl'>
                        <h2>One Step</h2>
                        <h2>Closer To Your</h2>
                        <h1 className='text-transparent text-8xl bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500'>Dream Job</h1>
                    </div>
                    <p className='py-9 text-lg font-medium text-gray-500'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br />
                        your job application from start to finish.</p>
                    <button className='button-primary my-3'>Get Started</button>
                </div>
                <div>
                    <img className='' src="/src/assets/images/person.png" alt="" />
                </div>
            </section>

            {/* Job Category List */}
            <section className='bg-white py-10'>
                <div className='mx-auto container'>
                    {/* title section */}
                    <div className='py-5'>
                        <h3 className='text-5xl font-semibold pb-5'>Job Category List</h3>
                        <p className='text-lg font-medium text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                    {/* list section */}
                    <div className='grid grid-cols-4 py-5 gap-4'>
                        <div className='bg-violet-50 px-5 py-5 text-left rounded-md '>
                            <img className='px-4 py-4 mb-6 bg-violet-100 rounded-sm' src="/src/assets/Icons/accounts.png" alt="" />
                            <h3 className='font-bold'>Accout & Finance</h3>
                            <p className='text-slate-500'>300 Jobs Available</p>
                        </div>


                        <div className='bg-violet-50 px-5 py-5 text-left rounded-md'>
                            <img className='px-4 py-4 mb-6 bg-violet-100 rounded-sm' src="/src/assets/Icons/business.png" alt="" />
                            <h3 className='font-bold'>Creative Design</h3>
                            <p className='text-slate-500'>100+ Jobs Available</p>
                        </div>

                        <div className='bg-violet-50 px-5 py-5 text-left rounded-md'>
                            <img className='px-4 py-4 mb-6 bg-violet-100 rounded-sm' src="/src/assets/Icons/marketing.png" alt="" />
                            <h3 className='font-bold'>Marketiong & Sales</h3>
                            <p className='text-slate-500'>150 Jobs Available</p>
                        </div>

                        <div className='bg-violet-50 px-5 py-5 text-left rounded-md'>
                            <img className='px-4 py-4 mb-6 bg-violet-100 rounded-sm' src="/src/assets/Icons/chip.png" alt="" />
                            <h3 className='font-bold'>Engineering Job</h3>
                            <p className='text-slate-500'>224 Jobs Available</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Featured Jobs */}
            <section className='bg-white py-10'>
                <div className='mx-auto container'>
                    {/* title section */}
                    <div className='py-5'>
                        <h3 className='text-5xl font-semibold pb-5'>Featured Jobs</h3>
                        <p className='text-lg font-medium text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                    {/* Job list section */}
                    <div className=''>
                        {/* Featured JOb */}
                        <FeaturedJobs></FeaturedJobs>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Home;