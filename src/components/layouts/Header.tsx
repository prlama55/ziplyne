import React from 'react';
import Logo from '../../images/WithDropShadow.png';

// import './App.css';

function App() {
    return (
        <nav className="navbar navbar-expand-lg static-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className='logo' src={Logo} alt="Ziplyne"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        {/*<li className="nav-item active">*/}
                        {/*    <a className="nav-link" href="#">Product</a>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link" href="#">Solution</a>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link" href="#">Pricing</a>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link" href="#">Customer Store</a>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link" href="#">Resources</a>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link" href="#">*/}
                        {/*        <button className='btn btn-primary'>Request Demo</button>*/}
                        {/*    </a>*/}
                        {/*</li>*/}

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default App;
