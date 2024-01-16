import styles from './css/main.module.css';

const Card = ({ className }) => {

    return (
        <section className={className}>
            <section className={styles.headerCard}>
                <h2>{h2.content}</h2>
                {
                    headerPara.true
                        ?
                        <p>{headerPara.content}</p>
                        :
                        null
                }
            </section>
            <section className={styles.mainCard}>
                <section className={styles.wrapperImage}>
                    {/* Image */}
                </section>
                <section className={styles.infoCard}>
                    <h3>{h3.content}</h3>
                    <p>{tracks.content} - {fans.content}</p>
                </section>
            </section>
        </section>
    )

}

export default Card