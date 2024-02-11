import { Link } from 'react-router-dom';
import Icon from './icons';
import Menu from './menu/Menu';

const Header = ({ openMenu, setOpenMenu }) => {
    return (
        <header className={`relative flex justify-between w-full p-3`} >
            <Link to={'/'}>
                <Icon.Logo />
            </Link>
            <Menu
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
            />
        </header>
    );
};

export default Header;