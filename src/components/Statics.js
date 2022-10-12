import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [{name: 'React', quize: 8},{name: 'Javascrip', quize: 9},{name: 'Css', quize: 8}, {name: 'GitHub', quize: 11} ];
const Statics = () => {
    return (
        <div className='text-center mt-10 md:mx-96'>
             <LineChart width={400} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="quize" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statics;