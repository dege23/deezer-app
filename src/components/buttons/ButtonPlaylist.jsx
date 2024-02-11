const ButtonPlaylist = ({ children }) => {
    return (
        <button className='border border-zinc-700 text-white rounded-lg w-max self-center text-sm font-bold py-1.5 px-6 cursor-pointer bg-transparent hover:bg-zinc-800'>
            {children}
        </button>
    )
}

export default ButtonPlaylist;