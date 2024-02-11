import { useEffect } from "react";
import { useAuth } from "./hooks";
import { useNavigate } from "react-router-dom";

const App = () => {
    const navigate = useNavigate();

    const { signed } = useAuth();

    useEffect(() => {

        if (!signed) {
            navigate('/form/register', { replace: true });
        }
    }, [signed]);
};

export default App;
