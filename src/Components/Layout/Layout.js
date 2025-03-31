import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Combine both icons
import './style.css'
import Footer from "../Footer/Footer";

const Layout = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [active, setActive] = useState(false);
    const [isactive, setIsActive] = useState(false);
    const [open, setOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setScrollPosition(currentPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const color = scrollPosition > 150 ? '#222222' : '';

    const MenuToggle = () => {
        setActive(prevActive => !prevActive);
        setOpen(!open);
    }

    const Active = () => {
        setIsActive(!isactive);

        setTimeout(() => {
            setIsActive(isactive);
        }, 400);
    }

    const menuIcon = windowWidth <= 768 && active ? faTimes : faBars; // Set menu icon based on window width and active state

    return (
        <>
            {windowWidth <= 768 && ( // Render menu button only if window width is 768px or below
                <button className="Menu_Btn" onClick={MenuToggle}>
                    <FontAwesomeIcon icon={menuIcon} />
                </button>
            )}
            <nav style={{ backgroundColor: color }} className={active ? 'active' : ''}>
                <ul>
                    <li>
                        <Link to='/' onClick={()=>{
                             if (windowWidth <= 768) MenuToggle();
                        }}>home</Link>
                    </li>
                    <li >
                        pages
                        <ul className={isactive ? 'isactive' : ''}>
                            <li>
                                <Link to='/about' onClick={()=>{
                                    Active();
                                    if (windowWidth <= 768) MenuToggle();
                                }}>ABOUT US</Link>
                            </li>
                            <li>
                                <Link to='/services' onClick={()=>{
                                    Active();
                                    if (windowWidth <= 768) MenuToggle();
                                }}>SERVICES</Link>
                            </li>
                            <li>
                                <Link to='/getintouch' onClick={()=>{
                                    Active();
                                    if (windowWidth <= 768) MenuToggle();
                                }}>GET IN TOUCH</Link>
                            </li>
                            <li>
                                <Link to='/contact' onClick={()=>{
                                    Active();
                                    if (windowWidth <= 768) MenuToggle();MenuToggle();
                                }}>CONTACT US</Link>
                            </li>
                            <li>
                                <Link to='/faq' onClick={()=>{
                                    Active();
                                    if (windowWidth <= 768) MenuToggle();
                                }}>FAQ</Link>
                            </li>
                            <li>
                                <Link to='/comingsoon' onClick={()=>{
                                    Active();
                                    if (windowWidth <= 768) MenuToggle();
                                }}>COMING SOON</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to='/'>
                            <img src={require('../../Assets/Logo_Img/logo-light.png')} alt="logo"></img>
                        </Link>
                    </li>
                    <li>
                        apartment
                        <ul className={isactive ? 'isactive' : ''}>
                            <li>
                                <Link to='/infobellow' onClick={()=>{
                                    Active();
                                    if (windowWidth <= 768) MenuToggle();
                                }}>INFO BELLOW LIST</Link>
                            </li>
                            <li>
                                <Link to='/futurebellow' onClick={()=>{
                                    Active();
                                    if (windowWidth <= 768) MenuToggle();
                                }}>FEATURE BELLOW LIST</Link>
                            </li>
                            <li>
                                <Link to='/apartmentsingle' onClick={()=>{
                                    Active();
                                    if (windowWidth <= 768) MenuToggle();
                                }}>APARTMENT SINGLE</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to='blog' onClick={()=>{
                             if (windowWidth <= 768) MenuToggle();
                        }}>blog</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
