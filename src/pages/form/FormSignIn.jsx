import { useEffect } from "react";
import Input from "./Input";

const FormSignIn = ({ email, setEmail, password, setPassword }) => {

    const handleChange = (e, setter) => {
        setter(e.target.value);
    };

    useEffect(() => {
        setEmail('');
        setPassword('');
    }, []);

    return (
        <section className="flex flex-col gap-6 items-center">
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
        </section>
    )
};

export default FormSignIn;
