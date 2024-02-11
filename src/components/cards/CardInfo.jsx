import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CardInfo = ({ cardData }) => {

    const formatterFans = (fans, separator) => {
        return fans.toLocaleString('en-US').split(',').join(separator);
    };

    return (
        <section className={`[grid-area:area3] flex flex-col gap-1.5`}>
            <h3 className='font-extrabold w-max hover:underline'>
                <Link
                    to={`/app/playlist/${cardData.id}`}
                    className='text-white'
                >{cardData.title}</Link>
            </h3>
            <p className='text-zinc-400 text-sm tracking-wider'>
                {
                    cardData.nb_tracks && cardData.fans
                    &&
                    `${cardData.nb_tracks} faixas - ${formatterFans(cardData.fans, ' ')} fãs`
                }</p>
        </section>
    )
}

export default CardInfo;