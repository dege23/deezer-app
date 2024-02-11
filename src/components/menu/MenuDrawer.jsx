import { useAuth } from "../../hooks/useAuth";

const MenuDrawer = ({ openMenu }) => {
    const { signOut } = useAuth();

    return (
        <ul className={`${openMenu ? 'menuDrawer-Open' : 'hidden'} absolute w-full top-full right-0 p-3 gap-6 list-none font-medium`}>

            <li className='item-menu'>
                Lançar Deezer
            </li>

            <li className='item-menu'>
                Baixe o aplicativo
            </li>

            <li className='item-menu'>
                Planos
            </li>

            <li className='item-menu'>
                Explore os Canais
            </li>

            <li className='item-menu' onClick={signOut}>
                Desconectar
            </li>
        </ul>
    )
}

export default MenuDrawer;
