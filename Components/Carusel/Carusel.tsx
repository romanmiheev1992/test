import { CaruselProps } from "./Carusel.props";
import styles from './Carusel.module.css'
import { Symptoms } from "../Symptoms/Symptoms";
import { adult, simptomsDataBase } from "../helper/database";


export const Carusel = ({...props}: CaruselProps) : JSX.Element => {
    
    return (
        <div className={styles.carusel} {...props}>
            <div className={styles.carules_header}>
                <p>Сообщает ли один из ваших пациентов о следующих симптомах? <span>(нажмите на любую иконку и узнайте больше)</span></p>
            </div>
            <div className={styles.carusel_senter} >
                <div
                    className={styles.img}
                     style={{
                        backgroundImage: `url(${adult})`,
                    }}
                ></div>
                <p>Взрослый</p>
            </div>

            <div className={styles.carusel_round}>
                {
                    simptomsDataBase && simptomsDataBase.map((simptom, i) => {
                       
                        return (
                            <Symptoms
                                key={simptom.text}
                                style={{transform: `translate(${simptom.right}px, ${simptom.top}px)`}}
                                link={simptom.img}
                                text={simptom.text}
                                index={i}
                        />
                        )
                        
                    })
                }
                
            </div>

        </div>
    )
}