import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/img1.jpeg";
import project2 from "../../public/images/projects/img2.jpg";
import project3 from "../../public/images/projects/img3.png";
import project4 from "../../public/images/projects/img4.png";
import project5 from "../../public/images/projects/img5.png";
import project6 from "../../public/images/projects/img6.png";
import project7 from "../../public/images/projects/img7.png";

import {motion} from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return(
        <article className='w-full flex items-center relative justify-between p-12 rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light' />
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}} transition={{duration:0.2}} />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='dark:text-primaryDark text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light'>
                {summary}
            </p>
            <div className='mt-2 flex items-center'>
            <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
            <Link href={link} target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark'>Visit Project</Link>
            </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) =>{
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light' >
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}} transition={{duration:0.2}} />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold '>{title}</h2>
            </Link>
            
            <div className='w-full mt-2 flex items-center justify-between'>
            
            <Link href={link} target='_blank'
        
            className='text-lg font-semibold ml-4 rounded-lg bg-dark text-light p-2 px-1 '>Visit Project</Link>
            <Link href={github} target='_blank' className='w-8'><GithubIcon />{" "}
            </Link>
            </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
    <Head>
            <title>Riya Bansal | About Me</title>
            <meta name='description' content='any description' />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge" className='mb-16'/>
            <div className='grid grid-cols-12 gap-24'>
                <div className='col-span-12'>
                    <FeaturedProject 
                    title = "JAVASCRIPT PROJECTS"
                    img={project1}
                    summary="JavaScript is the backbone of modern web development, and my projects demonstrate how we leverage this versatile language to create responsive, user-friendly, and feature-rich digital solutions. Whether you're looking for a sleek and responsive website, a data-driven dashboard, or interactive web apps, my JavaScript projects exemplify my commitment to delivering high-quality, cutting-edge solutions tailored to your needs."
                    link="https://github.com/Ri-yaB/javascript_projects.git"
                    github="/"
                    type="Featured Project"
                    />
                </div>
                <div className='col-span-6'>
                <Project 
                    title = "SIGN UP VERIFICATION"
                    img={project2}
                    summary="Introducing our innovative Signup Page with Photo Verification! In this project, we have harnessed the power of JavaScript to create a seamless and secure user registration experience. Users can now sign up for your platform or service by simply uploading a photo for verification. Our JavaScript-driven solution ensures a user-friendly interface, guiding users through the process step by step. The uploaded photo is processed and verified, adding an extra layer of security to your registration process. Say goodbye to traditional, cumbersome verification methods and embrace this modern and efficient approach to enhance your user onboarding process.
<br/>
                    This project can provide a unique and secure way to verify user identities during the signup process, making it more engaging and trustworthy for your users."
                    link="https://github.com/Ri-yaB/vitrendz-fd.git"
                    github="/"
                    type="Featured Project"
                    />
                </div>
                <div className='col-span-6'>
                <Project 
                    title = "REACT CART"
                    img={project3}
                    summary="Welcome to our React Cart Project! Our shopping cart application is a powerful and user-friendly e-commerce solution built with React, a leading JavaScript library for building interactive web applications. This project showcases the seamless integration of modern web technologies to provide an exceptional online shopping experience. With our React Cart, users can easily browse, add, and remove items from their shopping carts. The real-time updates and dynamic user interface ensure a smooth and intuitive shopping journey. We've also incorporated features like product search, sorting, and the ability to review and edit cart contents. Whether you're a customer looking for a convenient shopping experience or a business owner seeking an elegant and customizable cart solution, our React Cart project has you covered. It's the perfect choice for creating a feature-rich and responsive online shopping experience.

                    This project can serve as a foundation for building an e-commerce website or enhancing an existing one with a modern, dynamic shopping cart system."
                    link="https://github.com/Ri-yaB/React_cart.git"
                    github="/"
                    type="Featured Project"
                    />
                </div>

                <div className='col-span-12'>
                <FeaturedProject 
                    title = "TICKETING SYSTEM"
                    img={project4}
                    summary="Introducing our Python Flask Ticketing System - a robust and efficient solution for managing and tracking tickets, whether it's for customer support, helpdesk, or any other service. Our project leverages Python's Flask framework to deliver a streamlined ticketing experience. Users can create, view, and manage tickets through a user-friendly web interface. This system enables efficient communication between users and support teams, enhancing the overall customer experience."
                    link="https://github.com/Ri-yaB/Ticketing-system.git"
                    github="/"
                    type="Featured Project"
                    />
                </div>
                <div className='col-span-6'>
                <Project 
                    title = "THREE HOOKS"
                    img={project5}
                    summary="Explore our 'Three Hooks Project' - an interactive showcase of the power of React hooks. This project highlights the use of three fundamental React hooks: useState, useEffect, and useContext. By leveraging these hooks, we've created a dynamic and responsive web application that's both engaging and informative."
                    link="https://github.com/Ri-yaB/threehooks.git"
                    github="/"
                    type="Featured Project"
                    />
                </div>
                <div className='col-span-6'>
                <Project 
                    title = "CHAT APPLICATION"
                    img={project6}
                    summary="bnsdkxj"
                    link="https://github.com/Ri-yaB/chat-application.git"
                    github="/"
                    type="Featured Project"
                    />
                </div>
                <div className='col-span-12'>
                <FeaturedProject 
                    title = "PERSONAL PORTFOLIO"
                    img={project7}
                    summary={
                        <>
                          Introducing my Portfolio Next.js Project, a dynamic web application that showcases my professional journey, skills, and achievements in an engaging and interactive manner. Built with Next.js, a powerful React framework, this project offers a seamless user experience. Visitors can explore my background, key projects, and skills through an intuitive interface.
                          
                        </>
                      }
                    link="https://github.com/Ri-yaB/Portfolio_rb"
                    github="/"
                    type="Featured Project"
                    />
                </div>
                

            </div>
            
            </Layout>

        </main>
    </>
  )
}

export default projects