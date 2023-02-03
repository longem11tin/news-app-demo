import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SearchComponent from './SearchComponent';
import LogoTet from '../public/logoTet.JPG';
import LogoDoan from '../public/logoDoan.JPG';

const Navbar = () => {
  return (
    <div className='sticky top-0 bg-indigo-700 px-4 text-white'>
      <div className='flex justify-between items-center md:max-w-7xl md:mx-auto'>
        <Link href='' className='flex'>
          <Image src={LogoTet} className='h-[60px] w-[60px] justify-start p-2' alt='Logo'/>
          <h1 className='flex items-center p-1'> BAN CÁN SỰ ĐOÀN <br/>TẠI LIÊN BANG NGA</h1>
        </Link>
        <ul className='hidden lg:flex items-center'>
          {/* Gioi thieu */}
          <li className=' nav relative group/item  inline-block' >
            <Link href='/about' className='flex px-2 py-[26px] hover:text-[#F79E4C] text-xs '>GIỚI THIỆU</Link> 
            <ul className='
              subnav
              group/edit invisible group-hover/item:visible bg-white text-black shadow-md 
              absolute
              block
              p-2
              w-[200px]'
            >
              <Link href='/about' className='block text-xs hover:text-red-600'>CÁC CHƯƠNG TRÌNH DÀI</Link> <br/>
              <Link href='/about' className='block text-xs hover:text-red-600'>BẢN TIN ĐOÀN</Link><br/>
              <Link href='/about' className='block text-xs hover:text-red-600'>SỰ KIỆN</Link>
            </ul>
          </li>

          {/* Hoat dong su kien */}
          <li className='
            nav 
            relative group/item  inline-block'
          >
            <Link href='/hoatdong' className='flex px-2 py-[26px] hover:text-[#F79E4C] text-xs '>HOẠT ĐỘNG SỰ KIỆN</Link> 
            <ul className='
              subnav
              group/edit invisible group-hover/item:visible bg-white text-black shadow-md 
              absolute
              block
              p-2
              w-[200px]'
            >
              <Link href='/abouts/about' className='block text-xs hover:text-red-600'>CÁC CHƯƠNG TRÌNH DÀI</Link> <br/>
              <Link href='/hoatdong' className='block text-xs hover:text-red-600'>BẢN TIN ĐOÀN</Link><br/>
              <Link href='/hoatdong' className='block text-xs hover:text-red-600'>SỰ KIỆN</Link>
            </ul>
          </li>

          <Link href='/duhoctainga' className='px-2 py-4 text-xs hover:bg-slate-700'>DU HỌC TẠI NGA</Link> 
          {/* <Link href='/sotaydoan' className='px-2 py-4 text-xs hover:bg-slate-700'>SỔ TAY ĐOÀN</Link>
          <Link href='/hoinhapquocte' className='px-2 py-4 text-xs hover:bg-slate-700'>HỘI NHẬP QUỐC TẾ</Link>
          <Link href='/thuvien' className='px-2 py-4 text-xs hover:bg-slate-700'>THƯ VIỆN</Link>
          <Link href='/thongtincactruong' className='px-2 py-4  text-xs hover:bg-slate-700'>THÔNG TIN CÁC TRƯỜNG</Link> */}
        </ul>
      </div>
      {/* <div className='flex justify-between items-end'>
        <SearchComponent className='px-2'/>
      </div> */}
    </div>
  )
}

export default Navbar