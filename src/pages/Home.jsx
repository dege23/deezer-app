import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../hooks';
import { urlApiCharts, fetchData } from '../utils';
import Header from "../components/Header";
import Main from "../components/Main";

const Home = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [chartsData, setChartsData] = useState(null);
    const { countryCode } = useParams();

    const navigate = useNavigate();
    const { signed, user } = useAuth();

    useEffect(() => {
        if (signed) {
            if (!countryCode && user.countryCode) {
                navigate(`${user.countryCode}`);
            }
            if (countryCode) {
                fetchData(urlApiCharts, countryCode, setChartsData);
            }
        }
        else {
            navigate('/form/register');
        }
    }, [countryCode, signed, user]);

    return (
        <>
            <Header
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
            />
            <Main
                openMenu={openMenu}
                chartsData={chartsData}
            />
        </>
    )
};

export default Home;