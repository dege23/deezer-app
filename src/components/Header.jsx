import styles from './css/header.module.css';
import Icon from './icons'
import Menu from './Menu';

const Header = ({ openMenu, setOpenMenu }) => {
    return (
        <header className={`${styles.Header} ${openMenu ? styles.openMenu : null}`} >
            <a href="/">
                <Icon.Logo className={styles.Logo} />
            </a>
            <Menu
                className={`${styles.Menu} ${openMenu ? styles.open : null}`}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
            />
        </header>
    );
};

export default Header;