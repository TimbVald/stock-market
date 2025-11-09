import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavItem from './NavItem'

const Header = () => {
  return (
    <header className='sticky top-0 header'>
      <div className='container header-wrapper'>
        <Link href="/">
            <Image src="/assets/icons/logo.svg" alt='Signalist Logo' width={140} height={32} className='h-8 w-auto cursor-pointer'/>
        </Link>
        <nav className='hidden sm:block'>
            <NavItem />
        </nav>
      </div>
    </header>
  )
}

export default Header
