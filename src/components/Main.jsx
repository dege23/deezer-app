import styles from './css/main.module.css';
import stylesCard from './cards/css/card.module.css';
import Card from './cards'
import Icon from './icons'
import Button from './buttons'
import { useState, useEffect } from 'react';

const Main = ({ openMenu }) => {
    const [location, setLocation] = useState('');
    const [cards, setCards] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        /* Data JSON */
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:5173/data.json');
                if (!res.ok) {
                    throw new Error(`Failed to fetch data (status: ${res.status})`);
                }
                const data = await res.json();
                setCards(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            finally {
                setLoading(false);
            }
        };

        fetchData();
        setLocation('brazil');

    }, []);

    if (loading) {
        return '...Carregando';
    }

    const cardsTop100 = cards[location].top100;

    return (
        <main className={openMenu ? styles.openMenu : null}>
            <h1>Charts</h1>
            <label htmlFor="sound-deezer" className={styles.comercialButton}>
                <Icon.Play className={styles.PlayIcon} />
                <input type="button" id="sound-deezer" className={styles.insideComercialButton} value="Ouça na Deezer" />
            </label>

            <Card.Group>
                <Card.Header
                    h2={'Os Hits de Hoje'}
                    headerPara={'Atualizados todos os dias'}
                />
                <Card.Group className={stylesCard.innerGroup}>
                    <Card.Root>

                        <Card.Main
                            img={cardsTop100.image}
                            h3={cardsTop100.name}
                            tracks={cardsTop100.tracks}
                            fans={cardsTop100.fans}
                        />
                    </Card.Root>
                    <Card.Root>

                        <Card.Main
                            img={cardsTop100.image}
                            h3={cardsTop100.name}
                            tracks={cardsTop100.tracks}
                            fans={cardsTop100.fans}
                        />

                    </Card.Root>
                    <Card.Root>

                        <Card.Main
                            img={cardsTop100.image}
                            h3={cardsTop100.name}
                            tracks={cardsTop100.tracks}
                            fans={cardsTop100.fans}
                        />
                    </Card.Root>
                    <Card.Root>

                        <Card.Main
                            img={cardsTop100.image}
                            h3={cardsTop100.name}
                            tracks={cardsTop100.tracks}
                            fans={cardsTop100.fans}
                        />
                    </Card.Root>
                    <Card.Root>

                        <Card.Main
                            img={cardsTop100.image}
                            h3={cardsTop100.name}
                            tracks={cardsTop100.tracks}
                            fans={cardsTop100.fans}
                        />
                    </Card.Root>
                    <Card.Root>

                        <Card.Main
                            img={cardsTop100.image}
                            h3={cardsTop100.name}
                            tracks={cardsTop100.tracks}
                            fans={cardsTop100.fans}
                        />
                    </Card.Root>
                </Card.Group>
            </Card.Group>
            <Button.Playlist>Ver mais playlists</Button.Playlist>
            <Card.Group>
                <Card.Header
                    className={stylesCard.CardHeader2}
                    h2={'Charts'}
                    icon={'dd'}
                />
                <Card.Group className={stylesCard.innerGroup}>
                    <Card.Root>

                        <Card.Main
                            img={cardsTop100.image}
                            h3={cardsTop100.name}
                            tracks={cardsTop100.tracks}
                            fans={cardsTop100.fans}
                        />
                    </Card.Root>
                    <Card.Root>

                        <Card.Main
                            img={cardsTop100.image}
                            h3={cardsTop100.name}
                            tracks={cardsTop100.tracks}
                            fans={cardsTop100.fans}
                        />
                    </Card.Root>
                    <Card.Root>

                        <Card.Main
                            img={cardsTop100.image}
                            h3={cardsTop100.name}
                            tracks={cardsTop100.tracks}
                            fans={cardsTop100.fans}
                        />
                    </Card.Root>
                    <Card.Root>

                        <Card.Main
                            img={cardsTop100.image}
                            h3={cardsTop100.name}
                            tracks={cardsTop100.tracks}
                            fans={cardsTop100.fans}
                        />
                    </Card.Root>
                    <Card.Root>

                        <Card.Main
                            img={cardsTop100.image}
                            h3={cardsTop100.name}
                            tracks={cardsTop100.tracks}
                            fans={cardsTop100.fans}
                        />
                    </Card.Root>
                    <Card.Root>

                        <Card.Main
                            img={cardsTop100.image}
                            h3={cardsTop100.name}
                            tracks={cardsTop100.tracks}
                            fans={cardsTop100.fans}
                        />
                    </Card.Root>
                </Card.Group>
            </Card.Group>
            <Button.Playlist>Ver mais playlists</Button.Playlist>
        </main>
    )
}

export default Main;
