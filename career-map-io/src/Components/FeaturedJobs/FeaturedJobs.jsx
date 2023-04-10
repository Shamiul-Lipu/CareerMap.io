import React, { useEffect, useState } from 'react';
import FeaturedJob from './FeaturedJob';
import { useLoaderData } from 'react-router-dom';

const FeaturedJobs = () => {
    // const featuredJobsDetail = useLoaderData();
    const [showAll, setShowAll] = useState(false);
    const [data, setData] = useState([])

    // show all jobs 
    const handleShowAll = () => {
        setShowAll(true)
    }
    useEffect(() => {
        fetch('jobDetails.json').then(res => res.json()).then(featuredJobsDetail => setData(featuredJobsDetail))
    }, [])

    // console.log(data);
    return (
        <>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-9'>
                {
                    showAll
                        ? data.map(job => <FeaturedJob key={job.id} job={job} />)
                        : data.slice(0, 4).map(job => <FeaturedJob key={job.id} job={job} />)
                }
            </div>
            <button onClick={handleShowAll} className={showAll ? 'hidden' : 'button-primary mt-5'}>Show All Jobs</button>
            {/* <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-9'>
                {
                    showAll
                        ? featuredJobsDetail.map(job => <FeaturedJob key={job.id} job={job} />)
                        : featuredJobsDetail.slice(0, 4).map(job => <FeaturedJob key={job.id} job={job} />)
                }
            </div>
            <button onClick={handleShowAll} className={showAll ? 'hidden' : 'button-primary mt-5'}>Show All Jobs</button> */}
        </>
    );
};

export default FeaturedJobs;