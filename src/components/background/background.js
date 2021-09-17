import { useEffect, useRef, useState } from 'react';
import './background.scss';
import { Dog } from './dog';
import { Floater } from './floater';
import { PawPrint } from './pawprint';

export const Background = () => { 

    var pawRefs = useRef({});
    const dogRef = useRef(null);

    const [Floaters, setFloaters] = useState([]);
    const [Paws, setPaws] = useState([]); 

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        setPaws(Array.from(new Array(90)).map((_, index) => <PawPrint key={`paw_${index}`} top={`${(index * (document.documentElement.scrollHeight /100))}px`} side={index % 2 === 0 ? 'left' : 'right'} index={index} ref = {ref => pawRefs.current[index] = ref}/>));
        setFloaters(Array.from(new Array(80)).map((_, index) => <Floater key={`floater_${index}`} index={index} top={`${(index * (document.documentElement.scrollHeight /80))}px`} left={Math.random() * 90 + 5}/>));

        // dogRef.current.children[1].style.opacity = 0;
        var checkPrints = setInterval(() => {
            [...Array(90)].forEach((_, index) => {
                let element = pawRefs.current[index];
                if( offsetY(element) < offsetY(dogRef.current.children[0]) + 80 ){
                    element.style.opacity = 0.8;
                }
            })
            if(window.pageYOffset + window.innerHeight > window.document.body.offsetHeight){
                dogRef.current.children[0].style.opacity = 0;
                dogRef.current.children[0].style.top = window.pageYOffset + window.innerHeight - 350;
                dogRef.current.children[1].style.opacity = 1;
                dogRef.current.children[1].style.top = window.pageYOffset + window.innerHeight - 150;
                clearInterval(checkPrints)
            }
        }, 500);

        return(() => {window.removeEventListener('scroll', handleScroll);});
    }, []);

    const handleScroll = () => {
        if( offsetY(dogRef.current.children[0]) < window.pageYOffset + 300 ){
            dogRef.current.children[0].style.top = window.pageYOffset + 300;
            dogRef.current.children[1].style.top = window.pageYOffset + 300;
        }
    };

    return(
        <div id="background">
            <div id="prints">
                {Paws}
                <Dog ref={dogRef} />
            </div>
            <div id="floaters">
                {Floaters}
            </div>
            <div id="paper"/>
            <div id="grain"/>
        </div>
    );
};
    

function offsetY(el) {
    var rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop 
}