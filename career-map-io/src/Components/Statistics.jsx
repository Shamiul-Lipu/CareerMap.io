import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const data = [
        {
            milestioneExam: "assignment 1",
            marks: 60,
        },
        {
            milestioneExam: "assignment 2",
            marks: 60,
        },
        {
            milestioneExam: "assignment 3",
            marks: 60,
        },
        {
            milestioneExam: "assignment 4",
            marks: 60,
        },
        {
            milestioneExam: "assignment 5",
            marks: 57,
        },
        {
            milestioneExam: "assignment 6",
            marks: 60,
        },
        {
            milestioneExam: "assignment 7",
            marks: 60,
        },
        {
            milestioneExam: "assignment 8",
            marks: 60,
        }
    ];

    return (
        <section>
            <div className='bg-violet-50'>
                <h3 className='text-5xl font-semibold'>Statistics</h3>
                <div>
                    <img className='' src="/src/assets/images/Vector.png" alt="" />
                </div>
            </div>
            <div className='flex justify-center items-center p-9 m-5' >

                <div>
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="milestioneExam" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </div>
            </div>
        </section>
    );
};

export default Statistics;