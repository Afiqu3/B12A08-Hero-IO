import React from 'react';

const States = () => {
    return (
        <div className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'>
            <div className='max-w-6xl mx-auto py-20'>
                <div>
                    <h1 className='text-center lg:text-5xl md:text-3xl text-2xl font-bold text-white'>Trusted by Millions, Built for You</h1>
                </div>
                <div className='mt-10 grid sm:grid-cols-3 grid-cols-1 gap-6'>
                    <div className='flex flex-col justify-center items-center text-white'>
                        <h5 className='mb-4'>Total Downloads</h5>
                        <h1 className='lg:text-6xl text-4xl mb-4 font-extrabold'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-white'>
                        <h5 className='mb-4'>Total Reviews</h5>
                        <h1 className='lg:text-6xl text-4xl mb-4 font-extrabold'>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-white'>
                        <h5 className='mb-4'>Active Apps</h5>
                        <h1 className='lg:text-6xl text-4xl mb-4 font-extrabold'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default States;