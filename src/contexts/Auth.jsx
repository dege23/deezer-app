import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

// Adicionar função de gerar um UUID para um novo user criado

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const usersStorage = localStorage.getItem('users_db');
    const userToken = localStorage.getItem('user_token');
    const objUsersStorage = JSON.parse(usersStorage);
    const objUserToken = JSON.parse(userToken);

    useEffect(() => {

        if (userToken && usersStorage) {
            const hasUser = objUsersStorage?.filter((user) => user.email === objUserToken.email && user.password === objUserToken.password);

            if (hasUser) {
                setUser(hasUser[0]);
            }
        }
    }, []);

    const signUp = (username, email, password, countryCode) => {

        const hasUser = objUsersStorage?.filter((user) => user.email === email || user.username === username);

        if (hasUser?.length) {
            return 'Já existe um usuário com esse nome ou e-mail!';
        }

        let newUser;

        if (objUsersStorage) {
            newUser = [...objUsersStorage, { username, email, password, countryCode, userFavs: [] }]
        }
        else {
            newUser = [{ username, email, password, countryCode, userFavs: [] }];
        }

        localStorage.setItem('users_db', JSON.stringify(newUser));

        return;
    }

    const signIn = (email, password) => {

        const hasUser = objUsersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2);

                localStorage.setItem('user_token', JSON.stringify({
                    email,
                    password,
                    token
                }));

                setUser({
                    username: hasUser[0].username,
                    email: hasUser[0].email,
                    password: hasUser[0].password,
                    countryCode: hasUser[0].countryCode,
                    userFavs: hasUser[0].userFavs
                });
                return;
            }
            else {
                return 'E-mail ou senha incorretos!';
            }
        }
        else {
            return 'Usuário não cadastrado';
        }
    };

    const signOut = () => {
        setUser(null);
        localStorage.removeItem('user_token');
    }

    const updateUser = (updatedUser) => {
        if (user) {
            const indexUser = objUsersStorage?.findIndex((thisUser) => user.email === thisUser.email && user.password === thisUser.password);

            const filterDb = objUsersStorage?.filter((thisUser) => thisUser.email !== user.email);

            const newDb = [
                ...filterDb.slice(0, indexUser),
                { ...updatedUser },
                ...filterDb.slice(indexUser)
            ];

            setUser({ ...updatedUser });

            localStorage.setItem('users_db', JSON.stringify([...newDb]));
        }
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                signed: !!user,
                signUp,
                signIn,
                signOut,
                updateUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };