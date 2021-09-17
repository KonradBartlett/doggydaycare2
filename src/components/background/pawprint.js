import { forwardRef } from 'react';
import {ReactComponent as Paw} from '../../assets/pawprint.svg';

export const PawPrint = forwardRef(({top, side, index}, ref) => {
    return (
        <Paw className={`paw ${side}`} ref={ref} id={`paw_${index}`} style={{top: top}}/>
    );
});