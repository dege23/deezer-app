import styles from './css/main.module.css';
import stylesCard from './cards/css/card.module.css';
import Card from './cards';
import Icon from './icons';
import Button from './buttons';

const Main = ({ openMenu, location, loading, cards, restCards }) => {

    if (loading) {
        return '...Carregando';
    }

    const cardLocationTop100 = cards.globals[location].top100;
    const globalsRestCards = restCards.globals;

    const formatterFans = (fans) => {
        const formattedFans = fans.split('.').join(' ');
        return formattedFans;
    }

    return (
        <main className={openMenu ? styles.openMenu : null}>
            <h1>Charts</h1>
            <label htmlFor="sound-deezer" className={styles.comercialButton}>
                <Icon.Play
                    className={styles.PlayIcon}
                />
                <input type="button" id="sound-deezer" className={styles.insideComercialButton} value="Ouça na Deezer" />
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
                                img={cardLocationTop100.image}
                                h3={cardLocationTop100.name}
                                tracks={`${cardLocationTop100.tracks} faixas`}
                                fans={`${formatterFans(cardLocationTop100.fans)} fãs`}
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
                            restCards.globals
                            &&
                            Object.keys(restCards.globals).map((key) => (
                                <Card.Root key={key}>
                                    <Card.Main
                                        img={globalsRestCards[key].top100.image}
                                        h3={globalsRestCards[key].top100.name}
                                        tracks={`${globalsRestCards[key].top100.tracks} faixas`}
                                        fans={`${formatterFans(globalsRestCards[key].top100.fans)} fãs`}
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
