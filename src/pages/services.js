import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"
import service1 from "../../public/images/services/web.jpg"
import service2 from "../../public/images/services/ecommerce.jpg"
import service3 from "../../public/images/services/social.jpg"
import service4 from "../../public/images/services/project.png"
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const MyServices = ({img, link, title, summary}) => {

    return(
        <li className='relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl'>

<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl'  />

             <Link href={link} target="_blank"
            className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}

                priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <h2 className='capitalize text-2xl font-bold my-2 hover:underline xs:text-lg'>{title}</h2>
            <p className='text-sm mb-2'>{summary}</p>
        </li>
    )
}


const services = () => {
  return (
    <>
    <Head>
            <title>Anil Gaikwad | Services Page</title>
            <meta name="description" content="Anil Gaikwad Portfolio" />
    </Head>
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="Design & Development Services" className='mb-16 lg:!text-6xl sm:mb-8 sm:!text-4xl xs:text-3xl' />
            <ul className='grid grid-cols-3 gap-12 md:grid-cols-2 sm:grid-cols-1 md:gap-y-16'>
                <MyServices 
                title="Web Development Services"
                summary="We are a website development company in Solapur proposing current trending web development services and support for small and local businesses.
                 Makes navigation easy,
Provide visual content on the website,
Interactive Responsive Web Design for All Types of Devices,
Attract lifetime clients to your business,
Improving user engagement"
                link="/"
                img={service1}
                />
                

                <MyServices 
                title="App Development Services"
                summary="Windows App at low cost. Windows Mobile platform is the compact version of the powerful desktop Windows operating system.Windows platform remains the most preferred platform for both technical and non-technical users.
                I develope  - Educational Apps,
                Lifestyle Apps,
                Productivity Apps,
                Entertainment Apps"
                link="/"
                img={service2}
                />

                <MyServices 
                title="Social Media Marketing"
                summary="Social Media Marketing is to attract customers' attention through social networks. Study of your target customers’ behavior on social media coupled with right content strategy ensures that your brand gets the desired response. Social media is one of the most cost-efficient digital marketing methods used to syndicate content and increase your business' visibility. Implementing a social media strategy will greatly increase your brand recognition since you will be engaging with a broad audience of consumers."
                link="/"
                img={service3}
                />

                <MyServices 
                title="Project Support"
                summary=" like to professionally assists engineering and IT students and others who want to do their own projects. I will discuss whatever ideas the students have and assist in quickly transforming them into research-based concepts to proceed further into practical working."
                link="/"
                img={service4}
                />

                <MyServices 
                title="Local Business Optimization"
                summary="Grow LOCAL BUSINESS ONLINE with the help of our LOCAL SEO Services
                - Listing your Business on Google,
                - Competitive analysis and Tracking Insights,
                - Managing your Business Profile"
                link="/"
                img={service2}
                />

                <MyServices 
                title="Powerpoint Presentation Designing"
                summary="Making a PowerPoint Slide design is an Art as well as Science. If you need a most impressive designer work, professionally crafted Presentation, then you are at the right place.
                COMMON PROBLEMS FACED BY EXECUTIVES WHILE DESIGNING POWERPOINT PRESENTATIONS -
                Not enough time to create an outstanding PPT Presentation, Very often not familiar with PPT presentation making platforms ,Final outcome is not professional enough to beat competitors
                "
                link="/"
                img={service3}
                />

            </ul>
        </Layout>
    </main>

    </>
  )
}

export default services