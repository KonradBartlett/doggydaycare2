import { useEffect, useState } from 'react';
import './background.scss';
import { PawPrint } from './pawprint';

console.log(document.documentElement.scrollHeight);

export const Background = () => { 

    const [Paws, setPaws] = useState([]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        setPaws(
            [...Array(100)].map((paw, index) => {
                return <PawPrint key={`paw_${index}`} top={`${(index * 2 * (document.documentElement.scrollHeight /100)) + 300}px`} side={index % 2 === 0 ? 'left' : 'right'} index={index} />
            })
        )
        
        return(() => {window.removeEventListener('scroll', handleScroll);});
        
    }, []);

    const handleScroll = () => {
        [...Array(100)].map((_, index) => {
            let element = document.getElementById(`paw_${index}`);
            console.log(element.getBoundingClientRect().top);
            if( element.getBoundingClientRect().top < 300 ){
                element.style.opacity = 1;
            }
        })
    };

    return(
        <div id="background">
            <div id="prints">
                {Paws}
            </div>
            <img src="/images/paper.jpeg"/>
            <div id="grain"/>
        </div>
    );
};
    