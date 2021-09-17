import { forwardRef } from 'react';
import {ReactComponent as Dog1} from '../../assets/background_dog_pose1-1.svg';
import {ReactComponent as Dog2} from '../../assets/background_dog_pose1-2.svg';
import {ReactComponent as Dog3} from '../../assets/background_dog_pose1-3.svg';
import {ReactComponent as Dog4} from '../../assets/background_dog_pose1-4.svg';
import {ReactComponent as Dog5} from '../../assets/background_dog_pose1-5.svg';
import {ReactComponent as Dog6} from '../../assets/background_dog_pose1-6.svg';
import {ReactComponent as Dog7} from '../../assets/background_dog_pose1-7.svg';
import {ReactComponent as Dog8} from '../../assets/background_dog_pose1-8.svg';
import {ReactComponent as Dog9} from '../../assets/background_dog_pose1-9.svg';
import {ReactComponent as Dog1_2} from '../../assets/background_dog_pose2-1.svg';
import {ReactComponent as Dog2_2} from '../../assets/background_dog_pose2-2.svg';
import {ReactComponent as Dog3_2} from '../../assets/background_dog_pose2-3.svg';
import {ReactComponent as Dog4_2} from '../../assets/background_dog_pose2-4.svg';
import {ReactComponent as Dog5_2} from '../../assets/background_dog_pose2-5.svg';
import {ReactComponent as Dog6_2} from '../../assets/background_dog_pose2-6.svg';
import {ReactComponent as Dog7_2} from '../../assets/background_dog_pose2-7.svg';
import {ReactComponent as Dog8_2} from '../../assets/background_dog_pose2-8.svg';
import {ReactComponent as Dog9_2} from '../../assets/background_dog_pose2-9.svg';

export const Dog = forwardRef(({}, ref) => {
    
    let seed = Math.ceil(Math.random() * 8);

    switch(seed){
        case 1:  return  <div ref={ref} ><Dog1     className={`background_dog show`}/><Dog1_2  className={`background_dog hide`}/></div>
        case 2:  return  <div ref={ref} ><Dog2     className={`background_dog show`}/><Dog2_2  className={`background_dog hide`}/></div>
        case 3:  return  <div ref={ref} ><Dog3     className={`background_dog show`}/><Dog3_2  className={`background_dog hide`}/></div>
        case 4:  return  <div ref={ref} ><Dog5     className={`background_dog show`}/><Dog5_2  className={`background_dog hide`}/></div>
        case 5:  return  <div ref={ref} ><Dog6     className={`background_dog show`}/><Dog6_2  className={`background_dog hide`}/></div>
        case 6:  return  <div ref={ref} ><Dog7     className={`background_dog show`}/><Dog7_2  className={`background_dog hide`}/></div>
        case 7:  return  <div ref={ref} ><Dog8     className={`background_dog show`}/><Dog8_2  className={`background_dog hide`}/></div>
        case 8:  return  <div ref={ref} ><Dog9     className={`background_dog show`}/><Dog9_2  className={`background_dog hide`}/></div>
        default: return  <div ref={ref} ><Dog9     className={`background_dog show`}/><Dog9_2  className={`background_dog hide`}/></div>

            
    }
    
})