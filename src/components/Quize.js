import React from 'react';

const Quize = ({quize}) => {
    const {question, options} = quize;
    return (
        <div lassName='shadow-xl p-10 m-20 rounded-lg'>
            <h1 className='text-xl text-yellow-500'> Quize: {question}</h1>
            {
                options.map(option => <ul className=''>
                        <div className='flex border-solid border-2 border-indigo-400 rounded-lg p-5 m-5'>
                        <input type="radio" />
                        <li className='m-2'>{option}</li>
                        </div>
                    </ul>
                )
            }
        </div>
    );
};

export default Quize;

