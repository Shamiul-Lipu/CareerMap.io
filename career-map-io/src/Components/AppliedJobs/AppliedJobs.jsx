import React, { useContext, useState } from 'react';
import { getStoredCart } from '../../utils/localDb';
import { AllJobsContext } from '../../App';
import AppliedJob from './AppliedJob';

const AppliedJobs = () => {
    const allJobs = useContext(AllJobsContext || [])
    const applied = getStoredCart();
    const [togglePlace, setTogglePlace] = useState(false)
    const [count, setCount] = useState(false);

    // const []

    // applied jobs
    const initial = []
    for (const id in applied) {
        const founddata = allJobs.find(job => job.id === id)
        if (founddata) {
            initial.push(founddata);
        }
    }

    // filter
    const onsiteJob = [];
    const remoteJob = [];
    for (const jb in applied) {
        const onsite = onsiteJob.push(initial.filter(job => job.work_place === 'Onsite'))
        const remote = remoteJob.push(initial.filter(job => job.work_place === 'Remote'))
    }


    // console.log(applied, allJobs, initial)
    // console.log(onsiteJob, togglePlace, count);

    return (
        <div>
            <div className='bg-violet-50'>
                <h3 className='text-5xl text-center font-semibold'>Applied Jobs</h3>
                <div>
                    <img className='' src="https://i.ibb.co/qnxh1Tj/Vector.png" alt="" />
                </div>
            </div>
            <div className='bg-white text-left'>
                <div className='container mx-auto py-10'>
                    <div className=''>

                        <div className="dropdown dropdown-end border-2 border-violet-600 rounded-lg ">
                            <label tabIndex={0} className="btn btn-ghost rounded-btn">Filter Jobs</label>
                            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                <li onClick={() => {
                                    setTogglePlace(true);
                                    setCount(true);
                                }}><a>Filter By Onsite</a></li>
                                <li onClick={() => {
                                    setTogglePlace(false);
                                    setCount(true);
                                }}><a>Filter By Remote</a></li>
                            </ul>
                        </div>

                        {/* <div> */}

                        {/* </div> */}
                        {
                            count || togglePlace
                                ? count && togglePlace
                                    ? onsiteJob[0].map((job, index) => <AppliedJob job={job} key={index} />)
                                    : remoteJob[0].map((job, index) => <AppliedJob job={job} key={index} />)
                                : initial.map(job => <AppliedJob job={job} key={job.id} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;