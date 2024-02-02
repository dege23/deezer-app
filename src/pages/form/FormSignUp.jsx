import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import Input from './Input';
import { useEffect } from "react";

const FormSignUp = ({
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    countryCode,
    setCountryCode
}) => {

    const handleChange = (e, setter) => {
        setter(e.target.value);
    };

    useEffect(() => {
        setUsername('');
        setEmail('');
        setPassword('');
        setCountryCode('');
    }, [])

    return (
        <div
            className="flex flex-col gap-6 items-center"
        >
            <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => handleChange(e, setUsername)}
            />
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => handleChange(e, setEmail)}
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => handleChange(e, setPassword)}
            />
            <Input
                type="text"
                placeholder="Country Code"
                value={countryCode}
                onChange={(e) => handleChange(e, setCountryCode)}
            />
        </div>
    )
};

export default FormSignUp;
