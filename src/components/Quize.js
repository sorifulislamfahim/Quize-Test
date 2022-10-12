import React from 'react';

const Quize = ({quize}) => {
    const {question, options} = quize;
    return (
        <div className='shadow-xl p-10 m-14 rounded-lg'>
            <h1 className='text-xl text-yellow-500'> Quize: {question}</h1>
            <ul className='sm:block md:grid grid-cols-2 m-2'>
                <div className='flex border-solid border-2 border-indigo-400 rounded-lg p-5 m-5'>
                    <input type="radio" />
                    <li className='m-2'>{options[0]}</li>
                </div>
                <div className='flex border-solid border-2 border-indigo-400 rounded-lg p-5 m-5'>
                    <input type="radio" />
                    <li className='m-2'>{options[1]}</li>
                </div>
                <div className='flex border-solid border-2 border-indigo-400 rounded-lg p-5 m-5'>
                    <input type="radio" />
                    <li className='m-2'>{options[2]}</li>
                </div>
                <div className='flex border-solid border-2 border-indigo-400 rounded-lg p-5 m-5'>
                    <input type="radio" />
                    <li className='m-2'>{options[3]}</li>
                </div>
            </ul>
        </div>
    );
};

export default Quize;