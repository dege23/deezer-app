import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';

// lembrar de usar React Icons

const App = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [cards, setCards] = useState({});
    const [restCards, setRestCards] = useState([]);
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await fetch('http://localhost:5173/data.json');
            if (!res.ok) {
                throw new Error(`Failed to fetch data (status: ${res.status})`);
            }
            const data = await res.json();

            setCards(data);
            setRestCards({ ...data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        setLocation('brazil');

        restCards.globals
            &&
            delete restCards.globals[location];
    }, [])

    return (
        <div className={`App ${openMenu ? 'openMenu' : null}`}>
            <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <Main
                openMenu={openMenu}
                location={location}
                loading={loading}
                cards={cards}
                restCards={restCards}
            />
        </div>
    );
};

export default App;