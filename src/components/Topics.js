import React from 'react';
import { useLoaderData } from 'react-router';
import Quize from './Quize';

const Topics = () => {
    const loadData = useLoaderData();
    const topicsData = loadData.data.questions;
    console.log(loadData);

    return (
        <div className='text-center'>
            <h2 className='text-blue-600 text-2xl font-mono font-semibold'>Quize Of {loadData.data.name}</h2>
            {
                topicsData.map(quize => <Quize 
                key={quize.id}
                quize={quize}
                ></Quize>)
            }
        </div>
    );
};

export default Topics;