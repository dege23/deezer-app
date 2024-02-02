import { useAuth } from "../hooks/useAuth";

const MenuDrawer = ({ className }) => {
    const { signOut } = useAuth();

    return (
        <ul className={className}>
            <li>
                Lançar Deezer
            </li>
            <li>
                Baixe o aplicativo
            </li>
            <li>
                Planos
            </li>
            <li>
                Explore os Canais
            </li>
            <li onClick={signOut}>
                Desconectar
            </li>
        </ul>
    )
}

export default MenuDrawer;
