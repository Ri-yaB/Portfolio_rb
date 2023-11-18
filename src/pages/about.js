import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/rb_profile.jpg"
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNumbers = ({value}) =>{
    const ref= useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
        
    }, [isInView, value, motionValue])

    useEffect(() =>{
        springValue.on("change", (latest) =>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

        return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>Riya Bansal | About Me</title>
            <meta name='description' content='any description' />
        </Head>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'> 
            <AnimatedText text="Passion fuels Purpose" className='mb-16' />
            <div className='grid w-full grid-cols-8 gap-16'>
                <div className='col-span-3 flex flex-col items-start justify-start'>
                    <h2 className='nb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>
                <p className='my-4 font medium justify-center'>
                As a highly motivated and detail-oriented individual, I am dedicated to achieving success in all of my endeavors. With excellent communication and interpersonal skills, I thrive in team environments and enjoy collaborating with others to reach common goals. My strong work ethic and adaptability allow me to take on new challenges with ease and deliver quality results.
<br/><br/>
Innovative web developer with a passion for building data-driven web applications that solve complex business challenges. Expertise in Python, SQL, and C language, with a focus on enhancing the user experience through creative and intuitive design.
                </p>
                </div>
                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light'>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                <Image src={profilePic} alt="Riya Bansal" className='w-full h-auto rounded-2xl' />
                </div>
                <div className='col-span-2 flex flex-col items-end justify-between'>
                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold'>
                            <AnimatedNumbers value={30} />+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Satisfied Clients</h2>
                    </div>

                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold'>
                        <AnimatedNumbers value={20} />+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Projects Completed</h2>
                    </div>

                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold'>
                        <AnimatedNumbers value={3} />+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75'>Years of Experience</h2>
                    </div>


                </div>
            </div>
            <Skills />
            <Experience />
            <Education />
            </Layout>
        </main>
    </>
  )
}

export default about