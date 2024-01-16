import styles from './css/card.module.css'

const CardHeader = ({ className, h2, headerPara, icon }) => {
    return (
        <section className={`${styles.CardHeader} ${className}`}>
            <h2>{h2}</h2>
                {
                    headerPara
                    &&
                    <p>{headerPara}</p>
                }
                {
                    icon
                    &&
                    icon
                }
        </section>
    )
}

export default CardHeader