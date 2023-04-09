import React, { useState } from 'react';
import FeaturedJob from './FeaturedJob';
import { useLoaderData } from 'react-router-dom';

const FeaturedJobs = () => {
    const featuredJobsDetail = useLoaderData();
    const [showAll, setShowAll] = useState(false);
    // show all jobs 
    const handleShowAll = () => {
        setShowAll(true)
    }

    console.log(featuredJobsDetail);
    return (
        <>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-9'>
                {
                    showAll
                        ? featuredJobsDetail.map(job => <FeaturedJob key={job.id} job={job} />)
                        : featuredJobsDetail.slice(0, 4).map(job => <FeaturedJob key={job.id} job={job} />)
                }
            </div>
            <button onClick={handleShowAll} className={showAll ? 'hidden' : 'button-primary mt-5'}>Show All Jobs</button>
        </>
    );
};

export default FeaturedJobs;