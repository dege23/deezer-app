import styles from './css/card.module.css'

const CardRoot = ({ children }) => {
    return (
        <section className={styles.Card}>
            {children}
        </section>
    )
}

export default CardRoot;