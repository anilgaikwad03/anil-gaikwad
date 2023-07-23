import React, { useRef } from 'react';
import {motion, useScroll} from "framer-motion"
import LiIcons from './LiIcons';
import AnimatedText from './AnimatedText';


const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcons reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp; <a href={companyLink}
            target="_blank"
            className='text-primary dark:text-primaryDark capitalize'
            >@{company}</a> </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time}  |  {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500 md:text-6xl xs:text-4xl md:mb-16'>
            Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]
            ' />

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                position="Associate Software Engineer" company="Nichebit Softech"
                companyLink="https://www.nichebit.com/"
                time="June-2022 to Feb-2023" address="Hyderabad, Telangana"
                work="Around 8 Months OpenTextCordysBPM (OpenText Process Suite 16.3) and
                Java development experience in various phases of software development life
                cycle (SDLC) – design, development, testing, implementation, and post
                implementation support and maintenance. 
                Technical hands-on expertise on Tools / IDE like Eclipses
                Able to learn new skills rapidly in a team or working independently by using experience in past related technologies."
                
                />

                <Details 
                position="Intern" company="CodSoft"
                companyLink="/"
                time="Jul-2023 to Aug-2023" address="Virtual"
                work="CodSoft provides all guidance and support in order to make some interesting and important projects.
                "
                />

                <Details 
                position="Intern" company="Quant Technologies"
                companyLink="/"
                time="March-2022 to June-2022" address="Secunderabad, Telangana"
                work="Quant Technologies is a leading software services company that caters to diverse industry
                verticals. Founded in 1997, Quant software engineers are providing solutions to enterprises
                across the globe. Quant Technology Development Center are located in Secunderabad, India.
                "
                />

                <Details 
                position="IT Manager" company="Pradhan Eye Hospital"
                companyLink="https://www.pradhaneyehospital.in/"
                time="Apr-2018 to Mar-2022" address="Solapur, Maharashtra"
                work="Worked as a IT Manager at reputed eye institute in solapur also developed and maintaining website of Pradhan Eye Hospital
                "
                />
            </ul>

        </div>
    </div>
  )
}

export default Experience