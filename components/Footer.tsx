"use client";
import Image from 'next/image'
import React from 'react';
import { footerLinks } from '@/constants';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
        <div className='flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16'>
            <div className='flex flex-col justify-start item-start gap-6'>
                <Image src='/logo.svg' className='object-contain'
                 alt='logo' width={118} height={18} />
                 <p className='text-base text-gray-700'>
                    Cars Heaven 2023<br/>
                    All the rights are reserved &copy;
                 </p>
            </div>
            <div className="footer__links">
              {footerLinks.map((link) => (
                <div className='footer__link' key={link.title}>
                  <h3 className='font-bold'> {link.title}</h3>
                  {link.links.map((item)=>(
                    <Link
                    key={item.title}
                    href={item.url}
                    className='text-gray-500' > {item.title} </Link>
                  ))}
                </div>
              ))}
            </div>
           
        </div>
        <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 py-10 '>
              <p className=''>@2023 All the Rights are Reserved</p>
              <div className='footer__copyrights-link'>
                <Link className="text-gray-500" href='/'>
                  Privacy Policy 
                </Link>
                <Link className="text-gray-500" href='/'>
                 Term of Use
                </Link>
                 </div>
            </div> 
    </footer>
  )
}

export default Footer