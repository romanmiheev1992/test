import { HeaderProps } from "./Header.props";
import styles from './Header.module.css'

export const Header = ({...props}: HeaderProps) : JSX.Element => {
    
    return (
        <div className={styles.header} {...props}>
            <p>А вдруг CMA?</p>
            <p>Выберите, кто Ваш пациент:</p>
        </div>
    )
}