import React from 'react'
import NavMenu from './NavMenu';
import SideBar from './SideBar';
import { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="container">
            <div className="flex py-5 px-3">
                <div className="flex items-center pt-3">
                    <img className="h-12" src="iconoV1.png" alt="Logo" />
                </div>
                <div className="flex-grow flex items-center z-20">
                    <NavMenu/>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={() => setOpen(true)}
                        aria-expanded={open}
                        aria-controls="sidebar"
                        aria-label="Open Menu">
                        <a href="#">
                        <img className="block lg:hidden" 
                        src="https://img.icons8.com/ios-glyphs/30/null/menu-rounded.png"
                        alt="Menu"/>
                        </a>
                    </button>
                    <SideBar open={open} setOpen={setOpen} />
                </div>
                <div className="hidden lg:flex lg:space-x-10 lg:items-center">
                    <div className="hover:text-almost-black cursor-pointer">
                        Proyectos
                    </div>
                </div>
            </div>
        </header>
  )
}
export default Header;