import React, { useState, useEffect } from 'react';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import Header from "../components/Header";
import Main from "../components/Main";
import LoadingView from '../components/loading/Loading';

const Home = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [trackData, setTrackData] = useState(null);
    const { countryCode } = useParams();

    const navigate = useNavigate();
    const { signed, user } = useAuth();

    countries.registerLocale(enLocale);

    const getCountryCode = async (countryCode) => {
        try {
            navigate(`/home/${countryCode}`);
        } catch (error) {
            console.error('Error getting user countryCode:', error);
        }
    };

    const fetchData = async (countryCode) => {
        try {
            const res = await fetch(`http://localhost:3001/api/deezer-chart/${countryCode}`, {
                mode: 'cors'
            });
            if (!res.ok) {
                throw new Error(`Failed to fetch data (status: ${res.status})`);
            }
            const data = await res.json();

            setTrackData({ ...data });
        } catch (error) {
            console.error('Error fetching data from server:', error);
        }
    };

    useEffect(() => {
        if (signed) {
            if (!countryCode) {
                user?.countryCode
                    &&
                    getCountryCode(user.countryCode);
            }
            if (countryCode) {
                fetchData(countryCode);
            }
        }
    }, [countryCode, signed, user]);

    return (
        signed
            ?
            <>
                <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
                <Main openMenu={openMenu} trackData={trackData} />
            </>
            :
            <Navigate to={'/register'} />
        // <LoadingView error={'Você ainda não tem uma conta'}>
        //     <button
        //     className='text-zinc-100 font-bold tracking-wider border border-zinc-500 rounded-lg px-6 py-2 hover:bg-zinc-800'
        //      onClick={() => {
        //         navigate('/register');
        //     }}>Register</button>
        // </LoadingView>
    )
};

export default Home;