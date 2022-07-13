import { PersonCardProps } from "./PersonCard.props";
import styles from './PersonCard.module.css'
import {personsDatabase } from "../helper/database";

export const PersonCard = ({...props}: PersonCardProps) : JSX.Element => {
    
    return (
        <div className={styles.persons_block}>
            {
                 personsDatabase && personsDatabase.map((person, i) => {
                  

                    return (
                       <div key={person.title} className={styles.person_card} {...props}>
                            <p>{person.title}</p>
                            <div 
                                className={styles.img}
                                style={{
                                    backgroundImage: `url(${person.img})`,
                                    backgroundPosition: `-${person.x}px -${person.y}px`,
                                    backgroundSize: `${person.bg}%`,
                                    backgroundRepeat: 'no-repeat'
                                }}
                            ></div>
                            <div className={styles.text_block}>
                                {
                                    person.text && person.text.map((paragraph, i) => <div key={i}><p>{paragraph}</p></div>)
                                }  
                            </div>
                        </div>   
                    )
                    
                 })
            }
        </div>
       
    )
}