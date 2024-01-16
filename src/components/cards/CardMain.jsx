import styles from './css/card.module.css'

const CardMain = ({ img, h3, tracks, fans }) => {
    return (
        <section className={styles.CardMain}>
            <section className={styles.WrapperImage}>
                {/* Image */}
                <img
                    className={styles.Image}
                    style={{
                        background: `url('${img}') no-repeat center/100% 100%`
                    }}
                />
            </section>
            <section className={styles.InfoCard}>
                <h3>{h3}</h3>
                <p>{tracks} - {fans}</p>
            </section>
        </section>
    )
}

export default CardMain