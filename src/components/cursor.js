import { useEffect, useRef, useState } from "react";

import './cursor.scss';

export const Cursor = () => {

    const dot1 = useRef(null);
    const dot2 = useRef(null);
    const dot3 = useRef(null);
    const dot4 = useRef(null);

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    let mouse = {x:0,y:0};

    const Dot = () => {
        return([
        ])
    }

    window.addEventListener("mousemove", function(event) {
        setX(event.pageX);
        setY(event.pageY);
    });

    useEffect(() => {
        console.log(x,y,dot1)
        dot1.current.style.top = `${y}px`;
        dot1.current.style.left = `${x}px`;
        dot2.current.style.top = `${y}px`;
        dot2.current.style.left = `${x}px`;
    }, [x,y]);

    return (
        <div id="cursor">
            {/* <span className="circle" ref={dot1} style={{transition: `0.1s ease-out`, scale: 1}}/>
            <span className="circle" ref={dot2} style={{transition: `0.2s ease-out`, scale: 0.75}}/>
            <span className="circle" ref={dot3} style={{transition: `3s ease-out`, scale: 0.5}}/>
            <span className="circle" ref={dot4} style={{transition: `4s ease-out`, scale: 0.25}}/> */}
        </div>
    )

}