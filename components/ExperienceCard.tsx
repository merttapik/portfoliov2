import React from 'react'
import { motion } from "framer-motion";
import { Experience } from '../typings';
import { urlFor } from '../sanity';
type Props = {
  experience:Experience;
}

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  md:h-[600px]
     w-[500px] md:w-[600px] xl:w-[900] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
      cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
         initial={{
            y: -100,
            opacity: 0,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{once:true}} 
          transition={{
            duration: 1.2,
          }}
        className='w-32 h-32 rounded-full xl:w-[140px] xl:h-[140] object-cover object-center'
        src={urlFor(experience?.companyImage).url()} alt="" />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
            <div className='flex space-x-2 my-2'>
              {experience.technologies.map(technology => (
                 <img
                 key={technology._id}
                 className="h-10 w-10 rounded-full"
                 src={urlFor(technology?.image).url()}
                 alt=""
                 
                 />
              ))}
               
              
               
            </div>
            <p className='uppercase py-5 text-gray-300'>{new Date(experience?.dateStarted).toDateString() } -{" "}
             {experience.isCurrentlyWorkingHere ? "Present": new Date(experience?.dateEnded).toDateString() }</p>
            <ul className='list-disc space-y-4 ml-5 text-lg '>
              {experience.points.map((point,i) => (
                <li key={i} >{point}</li>
              ))}
              
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard