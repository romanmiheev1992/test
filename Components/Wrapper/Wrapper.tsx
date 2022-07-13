import { WrapperProps } from "./Wrapper.props";
import styles from './Wrapper.module.css'
import { Header } from "../Header/Header";
import { PersonCard } from "../PersonCard/PersonCard";
import { Carusel } from "../Carusel/Carusel";

export const Wrapper = ({...props}: WrapperProps) : JSX.Element => {
    
    return (
        <div className={styles.wrapper} {...props}>
            <Header/>
            <PersonCard/>
            <Carusel/>
        </div>
    )
}