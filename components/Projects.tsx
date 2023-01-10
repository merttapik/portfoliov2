import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({projects}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      key="{project}"
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-ful h-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project) => (
          <div
           key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-1
                items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              className="h-auto w-7/12"
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, }}
              src={urlFor(project.image).url()}
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center my-2">
                {project.title}
              </h4>
            </div>
            <div className="flex items-center space-x-2 justify-center ">
            {project.technologies.map(technology => (
              <img key={technology._id} src={urlFor(technology.image).url() } alt="" className="h-10 w-10 rounded-full" />
            ))}
            </div>
           
            <p className="text-lg text-center md:text-left">
             {project.summary}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 " />
    </motion.div>
  );
}

export default Projects;
