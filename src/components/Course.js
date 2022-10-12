import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {id, name, logo, total} = course;
    return (
        <div className='border-solid border-2 border-indigo-400 m-5'>
            <img className='bg-gray-300 w-auto' src={logo} alt="" />
            <div className='flex justify-between mx-2'>
            <h2 className='text-2xl text-lime-600 font-serif'>{name}</h2>
            <p className='text-xl'>Quize: {total}</p>
            </div>
            <div className='bg-blue-600 mt-3 p-3 hover:bg-red-700 text-white font-bold text-xl'>
                <Link to={`/home ${id}`} >Start Quize</Link>
            </div>
        </div>
    );
};

export default Course;