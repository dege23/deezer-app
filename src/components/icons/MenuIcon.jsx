const MenuIcon = ({ onClick, openMenu }) => {
    return (
        <section
            className='flex flex-col gap-2'
            onClick={onClick}
        >
            <div className={`line-menu ${openMenu ? 'line-menu-Open rotate-45 translate-y-[11px]' : ''}`}></div>
            <div className={`line-menu ${openMenu ? 'opacity-0' : ''}`}></div>
            <div className={`line-menu ${openMenu ? 'line-menu-Open -rotate-45 -translate-y-[9px]' : ''}`}></div>
        </section>
    );

};

export default MenuIcon;