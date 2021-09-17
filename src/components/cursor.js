import { forwardRef, useEffect, useRef } from "react";

import {ReactComponent as Paw} from '../assets/cursor_print.svg';

import './cursor.scss';

export const Cursor = ({length}) => {

    var refs = useRef({});

    const paws = Array.from(new Array(length)).map((_, i) => <Print key={`cursor_paw_${i}`} ref = {ref => refs.current[i] = ref}/>);

    var lastSeenAt = {x: null, y: null};
    var previous = {x: null, y: null}
    const index = useRef(0);
    const totalDistance = useRef(0);
    
    useEffect(() => {
        window.addEventListener("mousemove", function(event) {
            if(lastSeenAt.x || lastSeenAt.y) {
                totalDistance.current += Math.sqrt(Math.pow(lastSeenAt.y - event.clientY, 2) + Math.pow(lastSeenAt.x - event.clientX, 2));
            }
            lastSeenAt.x = event.clientX;
            lastSeenAt.y = event.clientY;

            if(totalDistance.current > 70 ){
                // fade paw prints
                paws.forEach((paw, i) => {
                    refs.current[i].style.opacity -= 1/paws.length;
                });
                // set current print to full opacity
                refs.current[index.current].style.opacity = 1;

                // set rotation
                let delta_x = event.clientX - previous.x;
                let delta_y = event.clientY - previous.y;
                let theta_degrees = radians_to_degrees(Math.atan2(delta_y, delta_x));
                refs.current[index.current].style.transform = `rotate(${theta_degrees+90}deg) ${index.current % 2 === 0 ? 'scaleX(-1)' : ''}`;
                // set position
                refs.current[index.current].style.left = `${event.pageX}px`;
                refs.current[index.current].style.top = `${event.pageY}px`;
                
                // set counters
                totalDistance.current = 0;
                index.current++;
                if(index.current > paws.length - 1){
                    index.current = 0;
                }
                previous.x = event.clientX;
                previous.y = event.clientY;
            }
            
        });
    });

    return (
        <div id="cursor">
            {paws}
        </div>
    )

}

function radians_to_degrees(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}

const Print = forwardRef(({top, left, deg, side}, ref) => {
    return(
        <Paw className="paw" ref={ref}/>
    )
})