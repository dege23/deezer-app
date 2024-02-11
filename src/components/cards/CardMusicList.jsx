const CardMusicList = ({ musicList }) => {
    return (
        <div className='flex flex-col'>
            <div className="px-6">
                <h3 className="text-zinc-400 text-sm font-medium">Músicas</h3>
            </div>

            <ol className='flex flex-col justify-center list-none'>
                {musicList?.map((music, index) => (
                    <li key={music.id} className=' flex gap-1 text-ellipsis whitespace-nowrap overflow-hidden'>
                        <div className="text-xs text-zinc-400 mt-1">{`0${index + 1}`}.</div>
                        <h4 className="text-ellipsis overflow-hidden">{music.title}
                            <span> por {music.artist.name}</span>
                        </h4>
                    </li>
                ))
                }
            </ol>
        </div>
    )
};

export default CardMusicList;
