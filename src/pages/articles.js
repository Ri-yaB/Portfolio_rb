import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import article1 from "../../public/images/articles/article1.png";
import article2 from "../../public/images/articles/article2.jpg";

import {motion} from "framer-motion";
const FramerImage = motion(Image);

const FeaturedArticle =({img, title, time, summary, link}) =>{
    return(
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl '>
            <Link href={link} 
            target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}} transition={{duration:0.2}} />
            </Link>
            <Link href={link} target="_blank">
                <h2 className='capitalize inline-block hover:underline text-2xl font-bold my-2'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold'>{time}</span>
        </li>
    )
}

const articles = () => {
  return (
    <>
    <Head>
        <title>Riya Bansal | Articles Page</title>
        <meta name="description" content='any description'/>
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
            <AnimatedText text="Words Can Change The World!" className='mb-16' />
            <ul className='grid grid-cols-2 gap-16'>
                <FeaturedArticle 
                title="Getting Started with React.js: A Beginner's Guide"
                summary="If you're a web developer looking to build dynamic and interactive user interfaces, React.js is a remarkable choice. Developed and maintained by Facebook, React.js has become one of the most popular JavaScript libraries for building modern web applications. In this beginner's guide, we'll walk you through the basics of getting started with React.js."
                time="3 minutes read"
                link="https://medium.com/@riyab2002/getting-started-with-react-js-a-beginners-guide-9a56430f1b1"
                img={article1}
                />
                <FeaturedArticle 
                title="Mastering React Components: Advanced Techniques and Best Practices"
                summary="As you advance in your React journey, it's time to go beyond the basics and dive into the world of mastering React components. In this article, we'll explore advanced techniques and best practices that will elevate your React development skills. From Higher-Order Components (HOCs) to optimizing performance with React Profiler, we'll cover it all."
                time="3 minutes read"
                link="https://medium.com/@riyab2002/mastering-react-components-advanced-techniques-and-best-practices-35eadad2d7d6"
                img={article2}
                />

            </ul>
        </Layout>
    </main>
    </>
  )
}

export default articles