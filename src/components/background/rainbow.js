import { motion, useViewportScroll } from 'framer-motion';

export const Rainbow = () => {
    var { scrollYProgress } = useViewportScroll();

    return (
        <svg className="rainbow" id="b6068636-278e-4e11-91d5-2db0466f7aa5" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 611.77 306.6">
            <motion.path d="M208.69,608.7s11.53-293.08,293.09-293.08,292.7,292.7,292.7,292.7"     transform="translate(-195.7 -302.62)" style={{fill: 'none', stroke: '#ed2024', strokeWidth: '26px', pathLength: scrollYProgress}}/>
            <motion.path d="M231.55,608.7s10.63-270.21,270.21-270.21S771.62,608.35,771.62,608.35" transform="translate(-195.7 -302.62)" style={{fill: 'none', stroke: '#f8951d', strokeWidth: '26px', pathLength: scrollYProgress}}/>
            <motion.path d="M254.94,608.7s9.71-246.81,246.81-246.81S748.23,608.38,748.23,608.38"  transform="translate(-195.7 -302.62)" style={{fill: 'none', stroke: '#f5ec48', strokeWidth: '26px', pathLength: scrollYProgress}}/>
            <motion.path d="M279.92,608.7s8.73-221.81,221.81-221.81S723.25,608.41,723.25,608.41"  transform="translate(-195.7 -302.62)" style={{fill: 'none', stroke: '#81c341', strokeWidth: '26px', pathLength: scrollYProgress}}/>
            <motion.path d="M305.44,608.7s7.72-196.27,196.27-196.27,196,196,196,196"              transform="translate(-195.7 -302.62)" style={{fill: 'none', stroke: '#47c7f0', strokeWidth: '26px', pathLength: scrollYProgress}}/>
            <motion.path d="M329.36,608.7s6.78-172.34,172.34-172.34S673.81,608.48,673.81,608.48"  transform="translate(-195.7 -302.62)" style={{fill: 'none', stroke: '#884c9e', strokeWidth: '26px', pathLength: scrollYProgress}}/>
        </svg>
    );
};