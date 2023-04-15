import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    const liClass = "hover:bg-yellow-200 p-2 hover:text-black";
  return (
    <div className='bg-blue-600 '>
        <ul className='flex justify-center text-center text-white font-semibold '>
            <li className={liClass}><Link href="/">Home</Link></li>
            <li className={liClass}><Link href="/about">About</Link></li>
            <li className={liClass}><Link href="/about/team">Team</Link></li>
            <li className={liClass}><Link href="/notes">Notes</Link></li>
        </ul>
    </div>
  )
}

export default Navbar