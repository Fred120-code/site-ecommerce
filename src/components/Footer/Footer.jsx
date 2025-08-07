import React from 'react'

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
                    <p className='text-gray-600 lg:pr-2 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reprehenderit officia quae labore voluptatum.</p>   
                    <p className='text-gray-600 mt-4'>Made with 🔥 by Joran Fred</p>        
                    <a href="https://github.com/Fred120-code"
                    className='inline-block bg-primary text-white py-2 px-4 mt-4 text-sm rounded-full'>
                        Visit my github account
                    </a>  
                </div>
                {/**Footer links */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3 '>Important Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data, index)=>(
                                    <li key={index}>
                                        <a href={data.link} 
                                        className='text-gray-600 hover:text-black duration-300 hover:dark:text-white'>{data.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer