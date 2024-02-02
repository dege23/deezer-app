const LoadingView = ({ error, children }) => {

    return (
        <div className='flex flex-col justify-center items-center w-screen h-screen gap-6'>
            <h1 className='font-extrabold text-2xl text-white tracking-tighter'>
                {
                    error
                        ?
                        error
                        :
                        '...Carregando'
                }
            </h1>
            {children}
        </div>
    )
};

export default LoadingView;