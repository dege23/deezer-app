import { useState, useEffect } from "react";
import Card from './';

const CardRoot = ({ cardId, cardData, userFavs, musicList, grid }) => {

    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        const cardIsFav = userFavs?.includes(cardId);

        setIsFav(cardIsFav);
    }, [userFavs]);

    return (
        <section className='flex flex-col w-full gap-3'>
            <>
                <Card.Main
                    cardId={cardId}
                    cardData={cardData}
                    userFavs={userFavs}
                    isFav={isFav}
                    musicList={musicList}
                    grid={grid}
                />
                <Card.Info
                    cardData={cardData}
                />
            </>
        </section>
    )
}

export default CardRoot;