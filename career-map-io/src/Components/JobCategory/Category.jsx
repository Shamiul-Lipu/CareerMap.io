import React from 'react';

const Category = ({ c }) => {
    // console.log(c);
    return (
        <>
            <div className='bg-violet-50 px-5 py-5 text-left rounded-md '>
                <img className='px-4 py-4 mb-6 bg-violet-100 rounded-sm' src={c.img} alt="" />
                <h3 className='font-bold'>{c.category}</h3>
                <p className='text-slate-500'>{c.available_jobs}</p>
            </div>
        </>
    );
};

export default Category;