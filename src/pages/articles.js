import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import article1 from "../../public/images/articles/article1.png";
import article2 from "../../public/images/articles/article2.jpg";
import {motion, useMotionValue} from "framer-motion";
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) =>{
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event){
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }
    function handleMouseLeave(event){
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return(
        <Link href={link} target="_blank"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage 
            style={{x:x, y:y}} 
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{duration: 0.2}}}
            ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:hidden' />
        </Link>
    )
}

const FeaturedArticle =({img, title, time, summary, link}) =>{
    return(
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
            <Link href={link} 
            target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}} transition={{duration:0.2}} />
            </Link>
            <Link href={link} target="_blank">
                <h2 className='capitalize inline-block hover:underline text-2xl font-bold my-2 mt-4 xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
        </li>
    )
}

const Article = ({img, title, date, link}) =>{
    return(
        <motion.li 
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}} }
        viewport={{once:true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col'>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            </Link>
            <MovingImg title={title} img={img} link={link} />
            
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>

        </motion.li>
    )
}

const articles = () => {
  return (
    <>
    <Head>
        <title>Riya Bansal | Articles Page</title>
        <meta name="description" content='any description'/>
    </Head>
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col dark:text-light items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
            <AnimatedText text="Words Can Change The World!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
            <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
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
          {/*  <h2 className='font-bold text-4xl w-full mt-32 text-center my-16'>All Articles</h2>
            <ul>
                <Article
                title="bnmskz"
                date="bcjms"
                link="/"
                img={article1}
                />
                <Article
                title="bnmskz"
                date="bcjms"
                link="/"
                img={article1}
                />
                <Article
                title="bnmskz"
                date="bcjms"
                link="/"
                img={article1}
                />
                <Article
                title="bnmskz"
                date="bcjms"
                link="/"
                img={article1}
                />
  </ul> */}
        </Layout>
    </main>
    </>
  )
}

export default articles