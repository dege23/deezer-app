import styles from './css/card.module.css'

const CardContainer = ({ className, children }) => {
    return (
        <section className={`${styles.CardContainer} ${className}`}>
            {children}
        </section>
    )
}

export default CardContainer