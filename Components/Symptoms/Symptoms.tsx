import { SymptomsProps } from "./Symptoms.props";
import styles from './Symptoms.module.css'
import Cross from '../../public/svg/cross.svg'
import cn from 'classnames'
import { useState } from "react";

export const Symptoms = ({link, text, index, ...props}: SymptomsProps) : JSX.Element => {

    const [toggle, setToggle] = useState<boolean>(false)

    return (
        <div 
            
            className={cn(styles.symptoms, {
        })}  {...props}>
            <div
                onMouseEnter={() => setToggle(true)}
                onMouseLeave={() => setToggle(false)}
                className={styles.symptoms_img}
            >
                <Cross/>
                <img
                
                src={link}/> 
            </div>
            <p
                className={cn(styles.p, {
                [styles.up]: index === 0,
                [styles.right]: index === 1 || index === 2 || index === 3,
                [styles.bottom]: index === 4,
                [styles.left]: index === 5 || index === 6 || index === 7,
                [styles.show]: toggle,
                [styles.hide]: !toggle
                })}
            >{text}</p>
        </div>
    )
}