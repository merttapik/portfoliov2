import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { urlFor } from "../sanity";
import { Experience, PageInfo, Project, Service, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperience";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchServices } from "../utils/fetchServices";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";


type Props={
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  services: Service[];

}

export default function Home({pageInfo,experiences,projects,services,skills,socials}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white overflow-y-scroll overflow-x-hidden
     h-screen snap-y snap-mandatory  z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Merts Portfolio</title>
        <meta name="description" content="Mert Tapiks protfolio. Everything about me come check this" />
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="services" className="snap-start">
       <Services services={services} />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
       <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center ">
          <img 
          src={urlFor(pageInfo?.homeButton).url()}
           className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer animate-bounce"
          
           alt="intro"
        
          />
        </div>
       </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props>=async () => {
  const pageInfo:PageInfo= await fetchPageInfo();
  const experiences: Experience[]= await fetchExperiences();
  const skills: Skill[]=await fetchSkills();
  const projects: Project[]=await fetchProjects();
  const socials: Social[]=await fetchSocials();
  const services:Service[]=await fetchServices();

  return{
    props:{
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      services,
    },
    revalidate: 20,
  }
}