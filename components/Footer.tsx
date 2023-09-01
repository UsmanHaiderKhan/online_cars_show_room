import Image from 'next/image'
import React from 'react'

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
        </div>
    </footer>
  )
}

export default Footer