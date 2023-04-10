import React, { useEffect, useState } from 'react';
import Category from './Category';

const JobCategory = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/jobCategory.json')
            .then(res => res.json())
            .then(category => setData(category))
    }, [])

    // console.log(data)
    return (
        <>
            {
                data.map((c, index) => <Category c={c} key={index}></Category>)
            }
        </>
    );
};

export default JobCategory;