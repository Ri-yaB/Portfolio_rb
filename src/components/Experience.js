import React, { useRef } from 'react'
import {useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) =>{
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>
                {position}&nbsp;<a href={companyLink} target="_blank" className='text-primary capitalize'>@{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>{work}</p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>
        <div ref = {ref} className='w-[75%] mx-auto relative'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                position="SENIOR WORDPRESS DEVELOPER" company="GLOBAL SCOUTS AND GUIDES ORGANISATION" companyLink= "www.google.com" time="Aug 2023 - Nov 2023" address="Chandigarh, India" work="Designing and developing user-friendly websites using
                wordpress tool."
                />
                <Details 
                position="WEB DEVELOPER ASSOCIATE" company="CLICK MECHA" companyLink= "www.google.com" time="Aug 2023 - Sep 2023" address="Delhi, India" work="Designing and developing user-friendly websites basis
                client requirements."
                />
                <Details 
                position="UI/UX DEVELOPER" company="FLEVERAGE" companyLink= "www.google.com" time="Dec 2022 - Mar 2023" address="Vellore, India" work="Presented prototypes and concept
                designs using Figma for their app and
                websites."
                />
                <Details 
                position="FRONTEND DEVELOPER" company="FLIXDIN" companyLink= "www.google.com" time="June 2023 - Aug 2023" address="Vellore, India" work="Collaborating with a team to develop a
                user-friendly platform where filmmakers
                find their creative match."
                />
                <Details 
                position="WEB DESIGNER & DEVELOPER" company="JINDAL STEEL AND POWER" companyLink= "www.google.com" time="Apr 2023 - May 2023" address="Delhi, India" work="Designing personalized websites for
                fresher, middle and senior level clients."
                />
                <Details 
                position="WORDPRESS DEVELOPER" company="PEAK & FIND" companyLink= "www.google.com" time="2023-Present" address="Delhi, India" work="Designing and developing user-friendly websites using
                wordpress tool."
                />
            </ul>
        </div>

    </div>
  )
}

export default Experience