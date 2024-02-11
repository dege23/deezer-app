import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Card from './cards';
import Button from './buttons';
import { useAuth } from '../hooks';
import { tv } from 'tailwind-variants';

const Main = ({ openMenu, chartsData }) => {
    const [userFavs, setUserFavs] = useState();

    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            setUserFavs(user.userFavs);
        }
    }, [user?.userFavs]);

    const mainStyle = tv({
        base: 'flex flex-col items-center w-full h-full py-2 px-6 gap-6',
        variants: {
            openMenu: {
                true: 'hidden'
            },
        }
    });

    return (
        <main
            className={`${mainStyle({ openMenu })} ${!chartsData ? 'justify-center h-screen' : ''}`}
        >
            {
                !chartsData
                    ?
                    <>
                        <h1 className='title'>...Carregando</h1>
                    </>
                    :
                    <>
                        <h1 className='title'>Charts</h1>

                        <Button.Comercial />

                        <section className='flex flex-col w-full max-w-[100vw] gap-6'>

                            {/* Init Group Card */}

                            <section className='wrapperCardGroup'>

                                <Card.Header
                                    title={'Os Hits de Hoje'}
                                    flexDirection={'col'}
                                    description={'Atualizados todos os dias'}
                                />

                                <Card.Container>
                                    <Card.Root
                                        cardId={chartsData.playlists.userLocationPlaylist.id}
                                        cardData={chartsData.playlists.userLocationPlaylist}
                                        userFavs={userFavs}
                                        musicList={chartsData.playlists.userLocationPlaylist.tracks.data?.slice(0, 5)}
                                        grid={'oneCard'}
                                    />
                                </Card.Container>

                            </section>

                            {/* Finish Group Card */}

                            <Button.Playlist>Ver mais playlists</Button.Playlist>

                            {/* Init Group Card */}

                            <section className='wrapperCardGroup'>
                                <Card.Header
                                    title={'Charts'}
                                    icon={(
                                        <ChevronRight />
                                    )}
                                />

                                <Card.Container grid={'multiCards'}>
                                    {
                                        chartsData.playlists.otherLocationPlaylists.map((track) => (
                                            <Card.Root
                                                key={track.id}
                                                cardId={track.id}
                                                userFavs={userFavs}
                                                cardData={track}
                                            />
                                        )
                                        )
                                    }
                                </Card.Container>

                            </section>

                            {/* Finish Group Card */}

                            <Button.Playlist>Ver mais playlists</Button.Playlist>

                            {/* Init Group Card */}

                            <section className='wrapperCardGroup'>
                                <Card.Header
                                    title={'SongCatcher'}
                                    flexDirection={'col'}
                                    description={'Playlist das músicas mais procuradas'}
                                />

                                <Card.Container>
                                    <Card.Root
                                        cardId={chartsData.playlists.songCatcher.id}
                                        cardData={chartsData.playlists.songCatcher}
                                        userFavs={userFavs}
                                        grid={'oneCard'}
                                    />
                                </Card.Container>
                            </section>

                            {/* Finish Group Card */}

                            <Button.Playlist>Ver mais playlists</Button.Playlist>

                        </section>
                    </>
            }
        </main >
    )
}

export default Main;
