import { PlayIcon } from 'lucide-react';

const ButtonComercial = () => {

    return (
        <label
            htmlFor="sound-deezer"
            className='flex justify-center bg-purple-600 text-white rounded-lg py-2 px-8 gap-2 duration-300'
        >
            <PlayIcon
                className='fill-white mt-1 mb-0.5'
                size={10}
            />
            <input
                type="button"
                id="sound-deezer"
                className='font-bold flex bg-transparent text-xs text-white border-0 outline-0 duration-300'
                value="Ouça na Deezer"
            />
        </label>
    );
};

export default ButtonComercial;
