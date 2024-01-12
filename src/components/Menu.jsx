import MenuIcon from './icons/MenuIcon';
import MenuDrawer from './MenuDrawer';
import styles from './css/header.module.css';

const Menu = ({ className, openMenu, setOpenMenu }) => {
    const handleMenuIconClick = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <section className={className}>
            <MenuIcon
                className={styles.MenuIcon}
                onClick={handleMenuIconClick}
            />
            <MenuDrawer className={styles.MenuDrawer} />
        </section>
    );
};

export default Menu;