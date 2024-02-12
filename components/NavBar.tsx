import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { GrCart } from "react-icons/gr";

const NavBar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start items-center justify-between py-2 shadow-xl'>
      <div className='flex logo mx-5'>
        <Image
          src="/logo.svg"
          width={50}
          height={50}
          alt='Logo here'
        />
        <span className='font-bold'><h1>BatDrobe.com</h1></span>
      </div>

      <div className='navigation'>
        <ul className='flex space-x-5 font-semibold'>
          <Link href={'/tshirts'}><li>T-Shirts</li></Link>
          <Link href={'/'}><li>Hoodies</li></Link>
          <Link href={'/'}><li>Mugs</li></Link>
          <Link href={'/'}><li>Stickers</li></Link>
        </ul>
      </div>

      <div className='cart absolute right-0 mx-4 top-4'>
        <GrCart className='text-2xl' />
      </div>
    </div>
  )
}

export default NavBar;