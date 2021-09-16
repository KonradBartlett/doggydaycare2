import {ReactComponent as Paw} from '../assets/pawprint.svg';

export const PawPrint = ({top, side, index}) => {
    return (
        <Paw className={`paw ${side}`} id={`paw_${index}`} style={{top: top}}/>
    )
}