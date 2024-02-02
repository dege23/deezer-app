import styles from './css/cards.module.css';

const CardMusicList = ({ musicList }) => {
    return (
        musicList
        &&
        <ol className={styles.CardMusicList}>
            {musicList.map((music) => {
                return (
                    <li key={music.id}>
                        {music.title} <span> por {music.artist.name}
                        </span>
                    </li>
                )
            })}
        </ol>
    )
};

export default CardMusicList;
