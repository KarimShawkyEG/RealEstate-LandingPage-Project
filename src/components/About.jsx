import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Company</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg' />
                <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>
                                <VisibilitySensor partialVisibility>
                                    {({ isVisible }) => (
                                        <div>
                                            {isVisible ? <CountUp end={20} duration={3} /> : null} +
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </p>
                            <p>Years of Excellence</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>
                                <VisibilitySensor partialVisibility>
                                    {({ isVisible }) => (
                                        <div style={{ height: 40 }}>
                                            {isVisible ? <CountUp end={258} duration={3} /> : null}
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </p>
                            <p>Properties Delivered</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>
                                <VisibilitySensor partialVisibility>
                                    {({ isVisible }) => (
                                        <div style={{ height: 40 }}>
                                            {isVisible ? <CountUp end={75} duration={3} /> : null}
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </p>
                            <p>Projects Completed</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>
                                <VisibilitySensor partialVisibility>
                                    {({ isVisible }) => (
                                        <div>
                                            {isVisible ? <CountUp end={25} duration={3} /> : null} +
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </p>
                            <p>Ongoing Projects</p>
                        </div>
                    </div>
                    <p className='my-10 max-w-lg'>With over 20 years of experience and over 250 properties delivered, our company aims to provide the best properties on the market while making the process as easy as ordering your coffee in the morning. Your dream house is one mouse click away from becoming a reality with us.</p>
                    <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>
                </div>
            </div>
        </motion.div >
    )
}

export default About