import styles from './css/main.module.css';
import stylesCard from './cards/css/cards.module.css';
import Card from './cards';
import Icon from './icons';
import Button from './buttons';

const Main = ({ openMenu, location, loading, trackData, cards, restCards }) => {

    if (loading || !trackData) {
        return <main className={styles.loading}><h1>...Carregando</h1></main>;
    }

    const cardLocationTop100 = () => {
        if (!cards || !cards.locations) {
            return null;
        }

        return cards.locations.find(card => card.location === location) || null;
    };

    const formatterFans = (fans) => {
        fans &&
            fans.toString().toLocaleString('en-US').split(',').join(' ');
    };

    const keysRest = restCards.slice(0, 4)

    console.log(trackData);

    const userLocationPlaylist = trackData.playlists.userLocationPlaylist;

    return (
        <main className={openMenu ? styles.openMenu : null}>
            <h1>Charts</h1>
            <label
                htmlFor="sound-deezer"
                className={styles.comercialButton}
            >
                <Icon.Play
                    className={styles.PlayIcon}
                />
                <input
                    type="button"
                    id="sound-deezer"
                    className={styles.insideComercialButton}
                    value="Ouça na Deezer"
                />
            </label>

            <section className={stylesCard.Cards}>
                <Card.Group>

                    {/* Init Group Card */}

                    <Card.Header
                        h2={'Os Hits de Hoje'}
                        headerPara={'Atualizados todos os dias'}
                    />
                    <Card.Group className={stylesCard.innerGroup}>

                        <Card.Root>
                            <Card.Main
                                img={userLocationPlaylist.picture_big}
                                h3={userLocationPlaylist.title}
                                tracks={`${userLocationPlaylist.nb_tracks} faixas`}
                                fans={userLocationPlaylist.fans}
                            />
                        </Card.Root>

                    </Card.Group>

                </Card.Group>

                {/* Finish Group Card */}

                <Button.Playlist>Ver mais playlists</Button.Playlist>

                {/* Init Group Card */}

                <Card.Group>
                    <Card.Header
                        className={stylesCard.CardHeader2}
                        h2={'Charts'}
                        icon={(
                            <Icon.IonIcon.ChevronRight />
                        )}
                    />

                    <Card.Group className={stylesCard.innerGroup}>

                        {
                            restCards
                            &&
                            keysRest.map((restCard, index) => (
                                <Card.Root key={index}>
                                    <Card.Main
                                        img={restCard.top100.image}
                                        h3={restCard.top100.name}
                                        tracks={`${restCard.top100.tracks} faixas`}
                                        fans={`${restCard.top100.fans} fãs`}
                                    />
                                </Card.Root>
                            )
                            )
                        }

                    </Card.Group>
                </Card.Group>

                {/* Finish Group Card */}

                <Button.Playlist>Ver mais playlists</Button.Playlist>
            </section>
        </main >
    )
}

export default Main;
