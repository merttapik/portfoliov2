import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function ContactMe({}: Props) {
    const {
        register,
        handleSubmit,
      
      } = useForm<Inputs>();
      const onSubmit: SubmitHandler<Inputs> = (formdata) => {
        window.location.href=`mailto:merttapik@hotmail.com?subject=${formdata.subject},${formdata.name},${formdata.message},${formdata.email}`
      };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col space-y-10 ">
          <h4 className="text-4xl font-semibold text-center mb-5">
            I have got just what you need.{" "}
            <span className="decoration-[#F7AB0A]/50 underline">
              Lets Talk.
            </span>
          </h4>
        </div>
        <div className="space-y-10 ">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+905387299936</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">merttapik@hotmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">??zmir, Turkey</p>
          </div>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-2 w-fit mx-auto"
            >
              <div className="flex space-x-2">
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="contactInput"
                  type="text"
                />
                <input
                  {...register("email")}
                  placeholder="Email"
                  className="contactInput"
                  type="email"
                />
              </div>
              <input
                {...register("subject")}
                placeholder="Subject"
                className="contactInput"
                type="text"
              />
              <textarea
                {...register("message")}
                placeholder="Message"
                className="contactInput"
              />
              <button
                type="submit"
                className="bg-[#F7AB01] pu-5 px-10 rounded-md text-black font-bold text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactMe;
