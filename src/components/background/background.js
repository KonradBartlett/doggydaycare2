import { useEffect, useRef, useState } from 'react';
import './background.scss';
import { Floater } from './floater';
import { PawPrint } from './pawprint';

export const Background = () => { 

    var pawRefs = useRef({});

    const [Floaters, setFloaters] = useState([]);
    const [Paws, setPaws] = useState([]); 

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        setPaws(Array.from(new Array(90)).map((_, index) => <PawPrint key={`paw_${index}`} top={`${(index * (document.documentElement.scrollHeight /100))}px`} side={index % 2 === 0 ? 'left' : 'right'} index={index} ref = {ref => pawRefs.current[index] = ref}/>));
        setFloaters(Array.from(new Array(80)).map((_, index) => <Floater key={`floater_${index}`} index={index} top={`${(index * (document.documentElement.scrollHeight /80))}px`} left={Math.random() * 90 + 5}/>));

        return(() => {window.removeEventListener('scroll', handleScroll);});
    }, []);

    const handleScroll = () => {
        [...Array(90)].forEach((_, index) => {
            let element = pawRefs.current[index];
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
    