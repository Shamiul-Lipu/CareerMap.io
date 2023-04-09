import React from 'react';

const FeaturedJob = ({ job }) => {
    const { Job_title, Company_Logo, Company_Name, Location, work_place, working_hour, Salary } = job
    console.log(job);
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className='h-56'><img src={job.Company_Logo} alt="Shoes" /></figure>
                <div className="card-body text-left">
                    <h2 className="font-bold text-lg">{Job_title}</h2>
                    <p>{Company_Name}</p>
                    <div className="card-actions justify-start text-violet-500 font-medium w-3/4 text-center">
                        <p className='px-2 py-3  rounded-md border-2 border-violet-500'>{work_place}</p>
                        <p className='px-2 py-3  rounded-md border-2 border-violet-500'>{working_hour}</p>
                    </div>
                    {/* Locatin and Salary */}
                    <div className='flex text-sm py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <p>{Location}</p>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>Salary: {Salary}</p>
                    </div>
                    <button className='button-primary w-2/4'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;