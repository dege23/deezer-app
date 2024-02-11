const ButtonForm = ({ className, type, action, text }) => {

    return (
        <button
            className={`border border-zinc-700 py-2 px-6 rounded-md bg-opacity-20 bg-zinc-900 hover:bg-zinc-800 font-bold ${className}`}
            type={
                type
                && type
            }
            onClick={
                action
                && action
            }
        >
            {text}
        </button >
    )
}

export default ButtonForm;