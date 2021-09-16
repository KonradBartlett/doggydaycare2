import { useState } from 'react';

import {ReactComponent as Logo} from '../assets/logo.svg';

import './menu.scss';

export const Menu = () => {
    const [showMenu, setShowMenu] = useState('');
    const [spin, setSpin] = useState('spin');


    const toggleMenu = () => {
        setShowMenu(showMenu === '' ? 'show' : '');
        setSpin(spin === '' ? 'spin' : '');
    }
    
    const clickLink = (section) => {
        toggleMenu();
        if(section === 'top'){
            window.scrollTo({ top: 0, behavior: 'smooth', block: 'start'});
        } else {
            let element = document.getElementById(section);
            element.scrollIntoView({behavior: 'smooth'})
            var scrollDiv = element.offsetTop - 100;
            window.scrollTo({ top: scrollDiv, behavior: 'smooth', block: 'start'});

        }
    }

    const Dot = () => {
        return(
            <svg viewBox="0 0 9 9" stroke="var(--border-color)" strokeWidth="2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="circle" cx="4.5" cy="4.5" r="4"/>
            </svg>
        )
    }

    const Link = ({section, title}) => {
        return <a className="link dark_hover" href="#!" onClick={() => {clickLink(section);}}><p className="text">{title}</p><br/><Dot/></a>

    }

    const Links = () => {
        return (
            <>
                <Logo />
                <Link section="top" title="Home"/>
                <Link section="services" title="Services"/>
                <Link section="team" title="Team"/>
                <Link section="location" title="Location"/>
                <Link section="contact" title="Contact"/>
                <Link section="gallery" title="Gallery"/>
            </>
        );
    }

    return (
        <nav id="nav" style={{'flexGrow': '1'}}>
            <div className={`menu large ${showMenu}`}>
                <div id="menu_body">
                    <Links />
                </div>
            </div>
            <div className={`small_menu small`}>
                <div id="menu_icon" className={spin}>
                    {/* <Icon title="toggle menu" onClick={toggleMenu}/> */}
                </div>
                <div id="small_menu_body" className={showMenu}>
                    <Links />
                </div>
            </div>
        </nav>
    );
}
