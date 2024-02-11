import { useState } from 'react';
import { tv } from 'tailwind-variants';
import {
    Play,
    Heart,
    MoreHorizontal,
    ListStart,
    ArrowUpRightFromSquare,
    CornerUpRight,
    Users
} from 'lucide-react';
import './css/cards.css';
import Card from './';
import Button from '../buttons';
import { useAuth } from '../../hooks';

const CardMain = ({ cardId, cardData, userFavs, isFav, musicList, grid }) => {
    const [openMore, setOpenMore] = useState(false);

    const { user, updateUser } = useAuth();

    const handleBlur = () => {
        setOpenMore(false);
    };

    const handleMore = () => {
        setOpenMore(!openMore);
    };

    const handleFavorite = () => {
        const isCardFavorited = userFavs?.includes(cardId);

        if (userFavs?.length) {
            if (isCardFavorited) {
                const updatedFavs = userFavs.filter(id => id !== cardId);
                updateUser({ ...user, userFavs: updatedFavs });
            } else {
                updateUser({ ...user, userFavs: [...userFavs, cardId] });
            }
        }
        if (!userFavs?.length) {
            updateUser({ ...user, userFavs: [cardId] });
        }
    };

    const cardMainStyle = tv({
        base: 'grid gap-4 w-full',
        variants: {
            grid: {
                oneCard: 'grid-cols-2'
            }
        }
    });

    const favIconStyle = tv({
        base: '',
        variants: {
            isFav: {
                true: 'fill-purple-500 text-purple-500'
            }
        }
    });

    const menuMoreStyle = tv({
        base: 'absolute -top-2 left-0 right-0 -translate-x-1/3 -translate-y-full flex-col bg-zinc-800 min-w-max max-w-full rounded-lg py-2',
        variants: {
            openMore: {
                true: 'flex',
                false: 'hidden'
            }
        }
    });

    return (

        <section className={cardMainStyle({ grid })}>
            <section
                className='wrapperCard flex justify-center w-full h-40 border-0'
            >
                {/* Image */}
                <div className='wrapperCardImage relative flex w-full h-full'>
                    <div
                        className='cardImage absolute w-full h-full rounded-lg'
                        style={{
                            background: `url('${cardData.picture_xl}') no-repeat center/100% 100%`
                        }}
                    />

                    <section className='optionsCard flex w-full self-end p-2 gap-2 z-10'>
                        <Button.Saturn
                            className='hiddenings'
                            icon={
                                <Play
                                    className='fill-black'
                                />
                            }
                        >dsaads</Button.Saturn>

                        <Button.Saturn
                            className='hiddenings'
                            icon={
                                <Heart
                                    className={favIconStyle({ isFav })}
                                />
                            }
                            handleClick={handleFavorite}
                        >dsaads</Button.Saturn>

                        <div className='relative'>
                            <Button.Saturn
                                className='hiddenings'
                                icon={
                                    <MoreHorizontal />
                                }
                                handleClick={handleMore}
                                handleBlur={handleBlur}
                            >dsadsa</Button.Saturn>

                            <ul
                                className={menuMoreStyle({ openMore: openMore })}
                            >
                                <li className='list-item'>
                                    <ListStart
                                        className='-scale-x-100'
                                    />
                                    Ouvir em seguida
                                </li>
                                <li className='list-item'>
                                    <ListStart
                                        className='rotate-180'
                                    />
                                    Adicionar à fila de espera
                                </li>
                                <li className='list-item'>
                                    <Heart />
                                    Adicionar aos favoritos
                                </li>
                                <li className='list-item'>
                                    <ArrowUpRightFromSquare />
                                    Crie um quiz musical
                                </li>
                                <li className='list-item'>
                                    <CornerUpRight />
                                    Compartilhar
                                </li>
                                <li className='list-item'>
                                    <Users />
                                    Perfil do usuário
                                </li>
                            </ul>
                        </div>

                    </section>
                </div>
            </section >

            {
                musicList
                &&
                <Card.MusicList musicList={musicList} />
            }
        </section >
    )
}

export default CardMain