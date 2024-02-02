import styles from './css/main.module.css';
import stylesCard from './cards/css/cards.module.css';
import Card from './cards';
import Icon from './icons';
import Button from './buttons';

const Main = ({ openMenu, trackData }) => {

    const formatterFans = (fans, separator) => {
        return fans.toLocaleString('en-US').split(',').join(separator);
    }

    return (
        <main className={`${openMenu && styles.openMenu} ${!trackData && styles.loading}`}>
            {
                !trackData ?
                    <>
                        <h1>...Carregando</h1>
                    </>
                    :
                    <>
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
                                            img={trackData.playlists.userLocationPlaylist.picture_xl}
                                            h3={trackData.playlists.userLocationPlaylist.title}
                                            tracks={`${trackData.playlists.userLocationPlaylist.nb_tracks} faixas`}
                                            fans={`${formatterFans(trackData.playlists.userLocationPlaylist.fans, ' ')} fãs`}
                                        />
                                    </Card.Root>

                                    <Card.MusicList musicList={trackData.playlists.userLocationPlaylist.tracks.data.slice(0, 5)} />

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
                                        trackData.playlists.otherLocationPlaylists.map((track) => (
                                            <Card.Root key={track.id}>
                                                <Card.Main
                                                    img={track.picture_xl}
                                                    h3={track.title}
                                                    tracks={`${track.nb_tracks} faixas`}
                                                    fans={`${formatterFans(track.fans, ' ')} fãs`}
                                                />
                                            </Card.Root>
                                        )
                                        )
                                    }

                                </Card.Group>
                            </Card.Group>

                            {/* Finish Group Card */}

                            <Button.Playlist>Ver mais playlists</Button.Playlist>

                            {/* Init Group Card */}

                            <Card.Group>
                                <Card.Header
                                    h2={'SongCatcher'}
                                    headerPara={'Playlist das músicas mais procuradas'}
                                />

                                <Card.Group className={stylesCard.innerGroup}>

                                    {
                                        <Card.Root key={trackData.playlists.songCatcher.id}>
                                            <Card.Main
                                                img={trackData.playlists.songCatcher.picture_xl}
                                                h3={trackData.playlists.songCatcher.title}
                                                tracks={`${trackData.playlists.songCatcher.nb_tracks} faixas`}
                                                fans={`${formatterFans(trackData.playlists.songCatcher.fans, ' ')} fãs`}
                                            />
                                        </Card.Root>
                                    }

                                </Card.Group>
                            </Card.Group>

                            {/* Finish Group Card */}

                            <Button.Playlist>Ver mais playlists</Button.Playlist>

                        </section>
                    </>
            }
        </main>
    )
}

export default Main;
