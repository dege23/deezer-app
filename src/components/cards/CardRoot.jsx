import styles from './css/cards.module.css'

const CardRoot = ({ children }) => {
    return (
        <section className={styles.CardRoot}>
            {children}
        </section>
    )
}

export default CardRoot;