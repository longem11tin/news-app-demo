import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const about = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
      <Link href={'/'}>
        <Image className='' alt='/'/>
        <h1 className='' >BAN CÁN SỰ ĐOÀN TẠI LIÊN BANG NGA</h1>
      </Link>
      <>
      </>
    </div>
  )
}

export default about