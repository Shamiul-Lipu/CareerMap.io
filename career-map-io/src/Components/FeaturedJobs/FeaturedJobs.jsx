import React from 'react';
import FeaturedJob from './FeaturedJob';
import { useLoaderData } from 'react-router-dom';

const FeaturedJobs = () => {
    const featuredJobsDetail = useLoaderData();
    console.log(featuredJobsDetail);
    return (
        <>
            <div className='grid grid-cols-2 gap-10'>
                {
                    featuredJobsDetail.map(job => <FeaturedJob key={job.id} job={job} />)
                }
            </div>
        </>
    );
};

export default FeaturedJobs;