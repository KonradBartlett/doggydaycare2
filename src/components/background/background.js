import { useEffect, useState } from 'react';
import './background.scss';
import { Floater } from './floater';
import { PawPrint } from './pawprint';

export const Background = () => { 

    const [Paws, setPaws] = useState([]);
    const [Floaters, setFloaters] = useState([]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        setPaws(
            [...Array(90)].map((paw, index) => {
                return <PawPrint key={`paw_${index}`} top={`${(index * (document.documentElement.scrollHeight /100))}px`} side={index % 2 === 0 ? 'left' : 'right'} index={index} />
            })
        );
        setFloaters(
            [...Array(80)].map((_, index) => {
                console.log(Math.random() * 90 + 5)
                return <Floater index={index} top={`${(index * (document.documentElement.scrollHeight /80))}px`} left={Math.random() * 90 + 5} />
            })
        );
        
        return(() => {window.removeEventListener('scroll', handleScroll);});
        
    }, []);

    const handleScroll = () => {
        [...Array(90)].map((_, index) => {
            let element = document.getElementById(`paw_${index}`);
            console.log(element.getBoundingClientRect().top);
            if( element.getBoundingClientRect().top < 300 ){
                element.style.opacity = 0.8;
            }
        })
    };

    return(
        <div id="background">
            <div id="prints">
                {Paws}
            </div>
            <div id="floaters">
                {Floaters}
            </div>
            <div id="paper"/>
            <div id="grain"/>
        </div>
    );
};
    