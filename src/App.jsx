import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className={`App ${openMenu ? 'openMenu' : null}`}>
            <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <Main openMenu={openMenu} />
        </div>
    );
};

export default App;