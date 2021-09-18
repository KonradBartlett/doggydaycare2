import { motion, motionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { offsetY } from '../utils/offsetY';
import './section.scss';

export const Section = (props) => {

    const [trigger, setTrigger] = useState(false);
    const pageRef = useRef(null);

    const contentOffsetY = motionValue(0);
    contentOffsetY.onChange(offset => {
        (setTrigger(offset < -52));
        console.log(offset)
    });

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }, []);
    

    const handleScroll = () => {
        if(window.pageYOffset + (window.innerHeight/2) >= offsetY(pageRef.current)){
            setTrigger(true);

        }
    }

    return (
        <motion.div className="section" ref={pageRef}
            animate={trigger && { x: '10vw', opacity: 1 }  }
            transition={{ duration: 2 }}
            >
            {props.children}
        </motion.div>
    );
};