import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6'

const FooterLinks = [
    {
        title:"Home",
        link:"/#",
    },
    {
        title:"About",
        link:"/about",
    },
    {
        title:"Contact",
        link:"/contact",
    },
    {
        title:"Blog",
        link:"/blog",
    },
]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
        <div className="container">
            <div className="grid md:grid-cols-3 gap-20 pt-5">
                {/**company details */}
                <div className='py-8 px-4'>
                    <a href="#"
                        className='text-primary font-semibold tracking-widest text-2xl
                        uppercase sm:text-3xl'
                        >Eshop
                    </a>   
                    <p className='text-gray-600 lg:pr-2 pt-3 dark:text-white/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reprehenderit officia quae labore voluptatum.</p>   
                    <p className='text-gray-600 mt-4'>Made with 🔥 by Joran Fred</p>        
                    <a href="https://github.com/Fred120-code"
                    className='inline-block bg-primary text-white py-2 px-4 mt-4 text-sm rounded-full'>
                        Visit my github account
                    </a>  
                </div>
                {/**Footer links */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                   {/**first col links */}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3 '>Important Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data, index)=>(
                                    <li key={index}>
                                        <a href={data.link} 
                                        className='text-gray-600 hover:text-black duration-300 hover:dark:text-gray-400'>{data.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/**second col links */}
                     <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3 '>Quicks Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data, index)=>(
                                    <li key={index}>
                                        <a href={data.link} 
                                        className='text-gray-600 hover:text-black duration-300 hover:dark:text-gray-400'>{data.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/**Company Address */}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                        <h1 className='text-xl font-bold sm:text-left mb-3 '>Important Links</h1>
                        <div>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow/>
                                <p>Yaoundé Nkolbisson</p>
                            </div>
                            <div className='flex items-center gap-3 mt-6'>
                                <FaMobileAlt/>
                                <p>+237 652872441 </p>
                            </div>

                            {/**sociam Links */}
                            <div className='flex items-center gap-3 mt-6'>
                                <a href="#">
                                    <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                                </a>
                                <a href="#">
                                    <FaFacebook className='text-3xl hover:text-primary duration-300'/>
                                </a>
                                <a href="#">
                                    <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer