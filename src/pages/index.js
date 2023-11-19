import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.jpg";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe'
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light '>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
            <Image
  src={profilePic}
  alt="RiyaBansal"
  style={{ width: '530px', height: '750px' }}
  priority
  sizes="(max-width: 768px) 100vw,
  (max-width: 1200px) 50vw,
  50vw"
/>

            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Turning vision into reality with code and design." className='!text-6xl !text-left'/>
              
              <p className='my-4 text-base font-medium'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects and articles, showcasing my expertise in React.js and web development.
</p>
<div className='flex items-center self-start mt-2'>
  <Link href="/rb_resume.pdf" target={"_blank"} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light' download={true}>
    Resume <LinkArrow className={"w-6 ml-1"} />
    </Link>
  <Link href="mailto: riyab2002@gmail.com" target={"_blank"}
  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg mx-5 font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'>
    Contact <LinkArrow className={"w-6 ml-1"} />
    </Link>
</div>
          </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt='Riya Bansal' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
