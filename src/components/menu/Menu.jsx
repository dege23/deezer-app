import Icon from '../icons';
import MenuDrawer from './MenuDrawer';

const Menu = ({ openMenu, setOpenMenu, icon }) => {
    const handleMenuIconClick = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <nav className={`flex flex-col gap-2`}>
            <Icon.Menu
                className='menuIcon'
                openMenu={openMenu}
                onClick={handleMenuIconClick}
            />
            <MenuDrawer
                openMenu={openMenu}
            />
        </nav>
    );
};

export default Menu;