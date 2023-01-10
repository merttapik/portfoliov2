import React from 'react'
import { motion } from "framer-motion";
import { Service } from '../typings';
import ServiceCard from './ServiceCard';
type Props = {
    services:Service[];
}

function Services({services}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-ltf md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>My Services</h3>


        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-8  scrollbar-track-gray-400/20s scrollbar-thin scrollbar-thumb-[#F7AB0A]/80'>
        {services?.map(service => (
            <ServiceCard key={service._id} service={service} />
        ))}
        
        
        
        </div>
    </motion.div>
  )
}

export default Services