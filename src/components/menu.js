import { useState } from 'react';

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

    const Links = () => {
        return (
            <>
                <a className="link dark_hover" href="#!" onClick={() => {clickLink('top');}}>Home</a>
                <a className="link dark_hover" href="#!" onClick={() => {clickLink('services');}}>Services Offered</a>
                <a className="link dark_hover" href="#!" onClick={() => {clickLink('team');}}>Meet The Team</a>
                <a className="link dark_hover" href="#!" onClick={() => {clickLink('location');}}>Location</a>
                <a className="link dark_hover" href="#!" onClick={() => {clickLink('contact');}}>Contact</a>
                <a className="link dark_hover" href="#!" onClick={() => {clickLink('gallery');}}>Gallery</a>
            </>
        );
    }

    return (
        <div style={{'flexGrow': '1'}}>
            <div className={`menu large ${showMenu}`}>
                <div id="menu_icon" className={spin}>
                    {/* <Icon title="toggle menu" onClick={toggleMenu}/> */}
                </div>
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
        </div>
    );
}
