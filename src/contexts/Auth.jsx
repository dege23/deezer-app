import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem('user_token');
        const usersStorage = localStorage.getItem('users_db');
        const objUserToken = JSON.parse(userToken);
        const objUsersStorage = JSON.parse(usersStorage);

        if (userToken && usersStorage) {
            const hasUser = objUsersStorage?.filter((user) => user.email === objUserToken.email && user.password === objUserToken.password);

            if (hasUser) {
                setUser(hasUser[0]);
            }
        }
    }, []);

    const signIn = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem('users_db'));

        const hasUser = usersStorage?.filter((user) => user.email === email);

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

    const signUp = (username, email, password, countryCode) => {
        const usersStorage = JSON.parse(localStorage.getItem('users_db'));

        const hasUser = usersStorage?.filter((user) => user.email === email || user.username === username);

        if (hasUser?.length) {
            return 'Já existe um usuário com esse nome ou e-mail!';
        }

        let newUser;

        if (usersStorage) {
            newUser = [...usersStorage, { username, email, password, countryCode }]
        }
        else {
            newUser = [{ username, email, password, countryCode }];
        }

        localStorage.setItem('users_db', JSON.stringify(newUser));

        return;
    }

    const signOut = () => {
        setUser(null);
        localStorage.removeItem('user_token');
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                signed: !!user,
                signIn,
                signUp,
                signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}