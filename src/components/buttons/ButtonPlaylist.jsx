import styles from './css/buttonPlaylist.module.css';

const ButtonPlaylist = ({ children }) => {
    return (
        <button className={styles.ButtonPlaylist}>{children}</button>
    )
}

export default ButtonPlaylist;