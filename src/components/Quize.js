import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Quize = ({quize}) => {
    const {question, options} = quize;
    return (
        <div lassName='shadow-xl p-10 m-14 rounded-lg'>
        <div className='flex'>
            <h1 className='text-xl text-yellow-500'> Quize: {question}</h1>
            <FontAwesomeIcon icon={faArrowRight} />
        </div>
            <div>
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
            
        </div>
    );
};

export default Quize;

