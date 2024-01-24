import styles from './css/cards.module.css'

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
                <p>{
                    tracks && fans
                        ?
                        `${tracks} - ${fans}`
                        : null
                }</p>
            </section>
        </section>
    )
}

export default CardMain