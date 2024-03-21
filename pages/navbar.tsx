"use client"
import ToggleBtn from "../app/components/toogleBtn";
import Link from 'next/link'
import LanguageToggle from "../app/components/LanguageToggle";
import { useEffect, useState } from "react";
// import { useLanguage } from "./LanguageProvider";


export default function Navbar() {

    const [navbarClasses, setNavbarClasses] = useState('');

    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            const theme = navbar.getAttribute('data-theme');
            const newNavbarClasses = theme === 'lofi' ? 'text-black' : 'text-white';
            setNavbarClasses(newNavbarClasses);
        }
    }, []);

    return (
        <div className={`navbar bg-base-100 ${navbarClasses}`}>
            <div className={`navbar-start ${navbarClasses}`}>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="cources">Education</a></li>
                        <li><a href="software">Service</a></li>
                        <li><a href="consulting">Consulting</a></li>
                        <li><a href="lastProjects">Last Projects</a></li>
                        <li><a href="cources">Cources</a></li>
                    </ul>
                </div>
                <ToggleBtn />
                {/* <LanguageSelector/> */}
            </div>
            <div className="navbar-center">

                <Link href="/" className="btn btn-ghost mt-[-8px]" style={{ backgroundColor: 'black' }}>
                    <img className="h-16 w-auto mt-[-8px]" src="logo.png" alt="worldwebSolutions" />
                </Link>

            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                {/* <div><LanguageToggle /></div> */}

            </div>
        </div>
    );
}
