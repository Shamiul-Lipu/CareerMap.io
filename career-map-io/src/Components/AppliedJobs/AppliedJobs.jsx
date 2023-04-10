import React, { useContext } from 'react';
import { getStoredCart } from '../../utils/localDb';
import { AllJobsContext } from '../../App';
import AppliedJob from './AppliedJob';

const AppliedJobs = () => {
    const allJobs = useContext(AllJobsContext || [])
    const applied = getStoredCart();

    // applied jobs
    const initial = []
    for (const id in applied) {
        const founddata = allJobs.find(job => job.id === id)
        if (founddata) {
            initial.push(founddata);
        }
    }

    console.log(applied, allJobs, initial)

    return (
        <div>
            <div className='bg-violet-50'>
                <h3 className='text-5xl text-center font-semibold'>Applied Jobs</h3>
                <div>
                    <img className='' src="/src/assets/images/Vector.png" alt="" />
                </div>
            </div>
            <div className='bg-white text-left'>
                <div className='container mx-auto py-10'>
                    <div>
                        {
                            initial.map(job => <AppliedJob job={job} key={job.id} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;