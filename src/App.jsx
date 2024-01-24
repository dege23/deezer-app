import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [cards, setCards] = useState({});
    const [restCards, setRestCards] = useState({});
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(true);

    const [trackData, setTrackData] = useState({});


    const fetchData = async () => {
        try {
            const res = await fetch('http://localhost:5173/data.json');
            if (!res.ok) {
                throw new Error(`Failed to fetch data (status: ${res.status})`);
            }
            const data = await res.json();

            setCards({ ...data });
            setRestCards({ ...data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchData2 = async () => {
        try {
            const res = await fetch('http://localhost:3001/api/deezer-chart/BR', {
                mode: 'cors'
            });
            if (!res.ok) {
                throw new Error(`Failed to fetch data (status: ${res.status})`);
            }
            const data = await res.json();

            const formattedUserLocationPlaylist = {
                ...data.playlists.userLocationPlaylist,
                fans: formatterFans(data.playlists.userLocationPlaylist.fans)
            };

            const formattedOtherLocationPlaylists = data.playlists.otherLocationPlaylists.map(playlist => ({
                ...playlist,
                fans: formatterFans(playlist.fans)
            }));

            const formattedData = {
                ...data,
                playlists: {
                    userLocationPlaylist: formattedUserLocationPlaylist,
                    otherLocationPlaylists: formattedOtherLocationPlaylists
                }
            };

            setTrackData({ ...formattedData });
        } catch (error) {
            console.error('Error fetching data from server:', error);
        }
    };


    useEffect(() => {
        const fetchAndSetData = async () => {
            await fetchData();
            await fetchData2();
            setLoading(false);
        };

        setLocation('brazil');
        fetchAndSetData();
    }, []);

    const filterRestCards = () => {
        if (restCards.locations && location) {
            setRestCards(
                restCards.locations.filter(card => card.location !== location)
            );
        }
    }

    filterRestCards();

    return (
        <div className={`App ${openMenu && 'openMenu'}`}>
            <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <Main
                openMenu={openMenu}
                location={location}
                loading={loading}
                trackData={trackData}
                cards={cards}
                restCards={restCards}
            />
        </div>
    );
};

export default App;
