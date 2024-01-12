import styles from './css/main.module.css'

const Card = ({ className, headerPara }) => {
    return (
        <section className={className}>
            <section className={styles.headerCard}>
                <h2>Os hits de hoje</h2>
                {
                    headerPara ?
                        <p>Atualizados todos os dias</p>
                        :
                        null
                }
            </section>
            <section className={styles.mainCard}>
                <section className={styles.wrapperImage}>
                    {/* Image */}
                </section>
                <section className={styles.infoCard}>
                    <h3>Top Brasil</h3>
                    <p>100 faixas - 5 782 595 fãs</p>
                </section>
            </section>
        </section>
    )
}

export default Card