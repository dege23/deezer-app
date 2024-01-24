import styles from './css/cards.module.css'

const CardContainer = ({ className, children }) => {
    return (
        <section className={`${styles.CardGroup} ${className}`}>
            {children}
        </section>
    )
}

export default CardContainer