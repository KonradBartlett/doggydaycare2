import {ReactComponent as Float1} from '../../assets/float1.svg';
import {ReactComponent as Float2} from '../../assets/float2.svg';
import {ReactComponent as Float3} from '../../assets/float3.svg';
import {ReactComponent as Float4} from '../../assets/float4.svg';
import {ReactComponent as Float5} from '../../assets/float5.svg';
import {ReactComponent as Float6} from '../../assets/float6.svg';
import {ReactComponent as Float7} from '../../assets/float7.svg';
import {ReactComponent as Float8} from '../../assets/float8.svg';
import {ReactComponent as Float9} from '../../assets/float9.svg';
import {ReactComponent as Float10} from '../../assets/float10.svg';
import {ReactComponent as Float11} from '../../assets/float11.svg';
import {ReactComponent as Float12} from '../../assets/float12.svg';

export const Floater = ({top, left, index}) => {
    
    switch(index % 12){
        case 0: return  <Float1  key={`floater_${index}`} className={`floater`} id={`floater_${index}`} style={{top: `calc(${top})`, left: `${left}vw`}}/>
        case 1: return  <Float2  key={`floater_${index}`} className={`floater`} id={`floater_${index}`} style={{top: `calc(${top})`, left: `${left}vw`}}/>
        case 2: return  <Float3  key={`floater_${index}`} className={`floater`} id={`floater_${index}`} style={{top: `calc(${top})`, left: `${left}vw`}}/>
        case 3: return  <Float4  key={`floater_${index}`} className={`floater`} id={`floater_${index}`} style={{top: `calc(${top})`, left: `${left}vw`}}/>
        case 4: return  <Float5  key={`floater_${index}`} className={`floater`} id={`floater_${index}`} style={{top: `calc(${top})`, left: `${left}vw`}}/>
        case 5: return  <Float6  key={`floater_${index}`} className={`floater`} id={`floater_${index}`} style={{top: `calc(${top})`, left: `${left}vw`}}/>
        case 6: return  <Float7  key={`floater_${index}`} className={`floater`} id={`floater_${index}`} style={{top: `calc(${top})`, left: `${left}vw`}}/>
        case 7: return  <Float8  key={`floater_${index}`} className={`floater`} id={`floater_${index}`} style={{top: `calc(${top})`, left: `${left}vw`}}/>
        case 8: return  <Float9  key={`floater_${index}`} className={`floater`} id={`floater_${index}`} style={{top: `calc(${top})`, left: `${left}vw`}}/>
        case 9: return  <Float10 key={`floater_${index}`} className={`floater`} id={`floater_${index}`} style={{top: `calc(${top})`, left: `${left}vw`}}/>
        case 10: return <Float11 key={`floater_${index}`} className={`floater`} id={`floater_${index}`} style={{top: `calc(${top})`, left: `${left}vw`}}/>
        case 11: return <Float12 key={`floater_${index}`} className={`floater`} id={`floater_${index}`} style={{top: `calc(${top})`, left: `${left}vw`}}/>
        default: return <Float12 key={`floater_${index}`} className={`floater`} id={`floater_${index}`} style={{top: `calc(${top})`, left: `${left}vw`}}/>
    }
}