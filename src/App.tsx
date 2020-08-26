import React from 'react';
import Header from './components/layouts/Header';
import Home from "./components/Home";
import SampleDesk from './images/ZL-SampleDesk.png';

function App() {
    return (
        <div className="main">
            <Header/>
            <section className="main-home" style={{backgroundImage: `url(${SampleDesk})`}}>
                <Home/>
            </section>
        </div>
    );
}

export default App;
