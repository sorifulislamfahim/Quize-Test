import React from 'react';
import { useLoaderData } from 'react-router';
import Course from './Course';


const Home = () => {
  const loadData = useLoaderData([]);
  const coursesData = loadData.data;
  
  return (
    <div>
      <div className='text-center p-10 mt-20 rounded-md hover:text-red-700 font-thin font-bold'>
        <h1 className='text-3xl uppercase'>A best larning website for developed our skils</h1>
        <p className='text-xl'>Makes a quize to genarate leads for your knowladge. The quize are survay platform marketars have a dreamd about</p>
        </div>
      <div className='sm:block md:grid grid-cols-4 text-center mx-36 my-20'>
      {
        coursesData.map(course => <Course 
            key={course.id}
            course={course}
            ></Course>)
      }
    </div>
    </div>
    
  );
};

export default Home;