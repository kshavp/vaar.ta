import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <ul className='flex md:justify-around gap-x-4 p-4 bg-blue-400 text-white border-b-2 border-blue-600'>
            <Link href={""}>Home</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Contact</Link>
            <Link href={""}>Creator</Link>
            <Link href={""}>Open Source</Link>
        </ul>
    </>
  )
}

export default Navbar