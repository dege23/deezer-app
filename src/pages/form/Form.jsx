import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';
import ButtonForm from './ButtonForm';

const Form = ({ isLogin, className }) => {

    const [loginSection, setLoginSection] = useState(isLogin);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const { signed, signUp, signIn } = useAuth();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!username || !email || !password || !countryCode) {
            setError('Preencha todos os campos!');
            return;
        }

        try {
            const res = await signUp(username, email, password, countryCode);
            if (!res) {
                navigate('/form/login');
            }
            else {
                setError(res);
            }
        } catch (error) {
            setError(error.message || 'Erro durante o cadastro.');
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Preencha todos os campos!');
            return;
        }

        try {
            const res = await signIn(email, password);
            if (res) {
                setError(res);
            }
        } catch (error) {
            setError(error.message || 'Erro durante o login.');
        }
    }

    useEffect(() => {
        if (isLogin !== loginSection) {
            setLoginSection(isLogin);
            setError('');
        }
        if (signed) {
            navigate('/app/home');
        }
    }, [isLogin, signed]);

    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            {
                !signed
                &&
                <form
                    className={`flex flex-col justify-center items-center text-white border border-zinc-700 bg-opacity-10 bg-zinc-800 p-6 px-12 gap-6 rounded-md ${className}`}
                    onSubmit={
                        loginSection
                            ?
                            handleLogin
                            :
                            handleRegister
                    }
                >
                    {
                        loginSection
                            ?
                            <>
                                <h1 className='font-bold'>Login</h1>
                                <FormSignIn
                                    email={email}
                                    setEmail={setEmail}
                                    password={password}
                                    setPassword={setPassword}
                                />
                            </>
                            :
                            <>
                                <h1 className='font-bold'>Register</h1>
                                <FormSignUp
                                    username={username}
                                    setUsername={setUsername}
                                    email={email}
                                    setEmail={setEmail}
                                    password={password}
                                    setPassword={setPassword}
                                    countryCode={countryCode}
                                    setCountryCode={setCountryCode}
                                />
                            </>
                    }

                    <ButtonForm
                        type={'button'}
                        text={
                            loginSection
                                ?
                                'Register'
                                :
                                'Login'
                        }
                        action={() => {
                            loginSection
                                ?
                                (navigate('/form/register'))
                                :
                                (navigate('/form/login'))
                        }
                        }
                    />

                    <p className='text-red-600'>{error}</p>

                    <ButtonForm
                        type={'submit'}
                        text={'Enter'}
                    />
                </form>
            }
        </div>
    )
};

export default Form;