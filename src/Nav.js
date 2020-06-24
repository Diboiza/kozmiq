import React from 'react';
import './App.css';

const Nav = () => {
    return (
        <header className="flex justify-between bb b--white-10">
            <a className="link white-70 hover-white no-underline flex items-center pa3 logo" href="#Home">KozmiqDJ</a>
            <nav className="flex-grow pa3 flex items-center">
                <a className="f6 link dib white dim mr3 mr4-ns" href="https://www.facebook.com/Karabo1Time"><img src={require('../src/img/facebook.png')} alt="facebook"/></a>
                <a className="f6 link dib white dim mr3 mr4-ns" href="https://twitter.com/Karabo1time"><img src={require('../src/img/twitter.png')} alt="twitter"/></a>
                <a className="f6 link dib white dim mr3 mr4-ns" href="https://twitter.com/Karabo1time"><img src={require('../src/img/instagram.png')} alt="instagram"/></a>
            </nav>
        </header>
       
    )
}

export default Nav;