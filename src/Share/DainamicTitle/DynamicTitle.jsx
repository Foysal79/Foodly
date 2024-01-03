import React from 'react';

const DynamicTitle = ({heading, subHeading}) => {
    return (
        <div className='font-Mali w-6/12 mx-auto py-4' >
            <p className='text-center text-lg  font-semibold  text-gray-700' >{subHeading}</p>
            <h1 className='text-center uppercase  py-4 text-lg md:text-5xl font-bold' >{heading}</h1>
            
        </div>
    );
};

export default DynamicTitle;