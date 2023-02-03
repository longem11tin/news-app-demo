import React from 'react'
import Image from 'next/image'
import LogoTet from '../public/logoTet.JPG';
import Link from 'next/link';
import { FaFacebook , FaTelegram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="h-[400px] w-full bg-indigo-700 ">
        <div className="grid grid-cols-2">
            <div className="col-span-2">
                <a href='/' className=''>
                    <Image src={LogoTet} className='h-[80px] w-[80px] p-2' alt='Logo'/>
                    <h1 className='p-1'> BAN CÁN SỰ ĐOÀN TẠI LIÊN BANG NGA</h1>
                </a>
            </div>
            <div className='col-span-2'>
                <FaFacebook />
                <FaTelegram />
                <FaYoutube />
            </div>
        </div>

    </div>
  )
}

export default Footer