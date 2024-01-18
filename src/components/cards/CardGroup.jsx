import styles from './css/card.module.css'

const CardContainer = ({ className, children }) => {
    return (
        <section className={`${styles.CardGroup} ${className}`}>
            {children}
        </section>
    )
}

export default CardContainer