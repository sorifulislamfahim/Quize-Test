import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl m-20 text-center font-mono hover:text-red-400'>Most Important Question for Interview !</h1>
            <div className='border-solid border-2 border-indigo-400 m-5 p-5 rounded-md hover:bg-blue-500 hover:text-white'>
                <h2 className='text-2xl font-serif m-2'> 1. What is the perpus of react router ?</h2>
                <p className='text-xl'><span className='text-orange-500'>Ans:</span> ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='border-solid border-2 border-indigo-400 m-5 p-5 rounded-md hover:bg-blue-500 hover:text-white'>
                <h2 className='text-2xl font-serif m-2'> 2. How does context api Woark ?</h2>
                <p className='text-xl'><span className='text-orange-500'>Ans:</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='border-solid border-2 border-indigo-400 m-5 p-5 rounded-md hover:bg-blue-500 hover:text-white'>
                <h2 className='text-2xl font-serif m-2'> 3. What is useref hooks ?</h2>
                <p className='text-xl'><span className='text-orange-500'>Ans:</span> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
        </div>
    );
};

export default Blog;