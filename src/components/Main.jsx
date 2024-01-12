import styles from './css/main.module.css';
import PlayIcon from './icons/PlayIcon';
import Card from './Card';

const Main = ({ openMenu }) => {
    return (
        <main className={openMenu ? styles.openMenu : null}>
            <h1>Charts</h1>
            <label htmlFor="sound-deezer" className={styles.comercialButton}>
                <PlayIcon className={styles.PlayIcon} />
                <input type="button" id="sound-deezer" className={styles.insideComercialButton} value="Ouça na Deezer" />
            </label>
            <section className={styles.cards}>
                <Card
                    className={styles.Card}
                    headerPara={true}
                />
            </section>
        </main >
    );
};

export default Main;
