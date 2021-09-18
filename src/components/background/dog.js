import { forwardRef } from 'react';
import {ReactComponent as DOG1} from '../../assets/background_dog_pose1-1.svg';
import {ReactComponent as DOG2} from '../../assets/background_dog_pose1-2.svg';
import {ReactComponent as DOG3} from '../../assets/background_dog_pose1-3.svg';
import {ReactComponent as DOG4} from '../../assets/background_dog_pose1-9.svg';
import {ReactComponent as DOG5} from '../../assets/background_dog_pose1-5.svg';
import {ReactComponent as DOG6} from '../../assets/background_dog_pose1-6.svg';
import {ReactComponent as DOG7} from '../../assets/background_dog_pose1-7.svg';
import {ReactComponent as DOG8} from '../../assets/background_dog_pose1-8.svg';
import {ReactComponent as DOG1_2} from '../../assets/background_dog_pose2-1.svg';
import {ReactComponent as DOG2_2} from '../../assets/background_dog_pose2-2.svg';
import {ReactComponent as DOG3_2} from '../../assets/background_dog_pose2-3.svg';
import {ReactComponent as DOG4_2} from '../../assets/background_dog_pose2-9.svg';
import {ReactComponent as DOG5_2} from '../../assets/background_dog_pose2-5.svg';
import {ReactComponent as DOG6_2} from '../../assets/background_dog_pose2-6.svg';
import {ReactComponent as DOG7_2} from '../../assets/background_dog_pose2-7.svg';
import {ReactComponent as DOG8_2} from '../../assets/background_dog_pose2-8.svg';
import { Rainbow } from './rainbow';


export const Dog = forwardRef(({seed}, ref) => {
    switch(seed){
        case 1:  return  <div ref={ref} id="walkDog"><DOG1 className={`background_dog show`}/><DOG1_2  className={`background_dog hide`}/></div>
        case 2:  return  <div ref={ref} id="walkDog"><DOG2 className={`background_dog show`}/><DOG2_2  className={`background_dog hide`}/></div>
        case 3:  return  <div ref={ref} id="walkDog"><DOG3 className={`background_dog show`}/><DOG3_2  className={`background_dog hide`}/></div>
        case 4:  return  <div ref={ref} id="walkDog"><DOG4 className={`background_dog show`}/><DOG4_2  className={`background_dog hide`}/></div>
        case 5:  return  <div ref={ref} id="walkDog"><DOG5 className={`background_dog show`}/><DOG5_2  className={`background_dog hide`}/></div>
        case 6:  return  <div ref={ref} id="walkDog"><DOG6 className={`background_dog show`}/><DOG6_2  className={`background_dog hide`}/></div>
        case 7:  return  <div ref={ref} id="walkDog"><DOG7 className={`background_dog show`}/><DOG7_2  className={`background_dog hide`}/></div>
        case 8:  return  <div ref={ref} id="walkDog"><DOG8 className={`background_dog show`}/><DOG8_2  className={`background_dog hide`}/></div>
        default: return  <div ref={ref} id="walkDog"><DOG4 className={`background_dog show`}/><DOG4_2  className={`background_dog hide`}/></div>
      
    };
});

export const FooterDogs = ({seed}) => {
    switch(seed){
        case 1:  return  <div id="footerDogs"><Rainbow /><div className="footerDog"><DOG2_2/><DOG3_2/><DOG4_2/><DOG5_2/><DOG6_2/><DOG7_2/><DOG8_2/></div></div>
        case 2:  return  <div id="footerDogs"><Rainbow /><div className="footerDog"><DOG1_2/><DOG3_2/><DOG4_2/><DOG5_2/><DOG6_2/><DOG7_2/><DOG8_2/></div></div>
        case 3:  return  <div id="footerDogs"><Rainbow /><div className="footerDog"><DOG1_2/><DOG2_2/><DOG4_2/><DOG5_2/><DOG6_2/><DOG7_2/><DOG8_2/></div></div>
        case 4:  return  <div id="footerDogs"><Rainbow /><div className="footerDog"><DOG1_2/><DOG2_2/><DOG3_2/><DOG5_2/><DOG6_2/><DOG7_2/><DOG8_2/></div></div>
        case 5:  return  <div id="footerDogs"><Rainbow /><div className="footerDog"><DOG1_2/><DOG2_2/><DOG3_2/><DOG4_2/><DOG6_2/><DOG7_2/><DOG8_2/></div></div>
        case 6:  return  <div id="footerDogs"><Rainbow /><div className="footerDog"><DOG1_2/><DOG2_2/><DOG3_2/><DOG4_2/><DOG5_2/><DOG7_2/><DOG8_2/></div></div>
        case 7:  return  <div id="footerDogs"><Rainbow /><div className="footerDog"><DOG1_2/><DOG2_2/><DOG3_2/><DOG4_2/><DOG5_2/><DOG6_2/><DOG8_2/></div></div>
        case 8:  return  <div id="footerDogs"><Rainbow /><div className="footerDog"><DOG1_2/><DOG2_2/><DOG3_2/><DOG4_2/><DOG5_2/><DOG6_2/><DOG7_2/></div></div>
        default: return  <div id="footerDogs"><Rainbow /><div className="footerDog"><DOG1_2/><DOG2_2/><DOG3_2/><DOG4_2/><DOG5_2/><DOG6_2/><DOG7_2/></div></div>
    }
};