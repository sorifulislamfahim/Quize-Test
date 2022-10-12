import React from 'react';

const Course = ({course}) => {
    const {name, logo, total} = course;
    return (
        <div className='border-solid border-2'>
            <img className='bg-gray-300 w-auto' src={logo} alt="" />
            <div className='flex justify-between mx-2'>
            <h2 className='text-2xl text-lime-600 font-serif'>{name}</h2>
            <p className='text-xl'>Quize: {total}</p>
            </div>
            <div className='bg-blue-600 mt-3 p-3 hover:bg-red-700 text-white font-bold text-xl'>
                <button>Start Quize</button>
            </div>
        </div>
    );
};

export default Course;