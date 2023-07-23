import React, { useRef } from 'react';
import {motion, useScroll} from "framer-motion"
import LiIcons from './LiIcons';


const Details = ({type, time, place, info}) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcons reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time}  |  {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
    );
};

const Education = () => {
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
            Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]
            
            ' />

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                type="Bachelor of Computer Application"
                time="2016-2019"
                place="Sangameshwar College, Solapur"
                info="Completed a bachelor's project on Eye Hospital Management System in Advanced Java, This is an online Eye Hospital Management System with Website. The system allows
                only registered users to login to system. This is proposed to be a web application. Out
                of all the specialties in medical sciences this is one of the most frequently visited
                specialties. To manage all these activity we have developed this software. All this
                data is logged in the database and the user is given a receipt number for his booking.
                This data is then sent to the administrator and they may interact with the client as per
                his requirement and his contact data stored in the database."
                />

                <Details 
                type="Master of Computer Application"
                time="2016-2019"
                place="Punyashlok Ahilyadevi Holkar Solapur University, Solapur"
                info="Completed a masters's project Organ Donation Web Portal in Advanced Java(JSP and Servlet).
                The portal is useful for maintaining the donors details (i.e. donors can take pledge for organ donation).
                Using our website We campaign to promote public awareness about organ donation and transplantation using donation merchandise which is a merged website.
                The system provides unique passwords for both Donors and Admin.
                "
                />

                <Details 
                type="Full Stack Java Developement Course"
                time="Apr-2022 to Jul-2022"
                place="Sathya Technologies, Ameerpet,Hyderabad"
                info="Completed a Full Stack Java Developement Course with hands on experiance on various projects which developed while taking training"
                />

                
            </ul>

        </div>
    </div>
  )
}

export default Education