import React from 'react';

const DynamicTitle = ({heading, subHeading}) => {
    return (
        <div className='font-Mali w-10/12 mx-auto py-4' >
            <p className='text-center text-sm   font-semibold  text-gray-600' >{subHeading}</p>
            <h1 className='text-center   py-4  text-2xl md:text-4xl font-bold' >{heading}</h1>
            
        </div>
    );
};

export default DynamicTitle;