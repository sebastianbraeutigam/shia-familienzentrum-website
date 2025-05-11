import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import HamburgerIcon from './HamburgerIcon';
import CloseIcon from './CloseIcon';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const angeboteItems = [
        { path: '/angebote-leistungen/achtsamkeitstraining', label: 'Achtsamkeitstraining' },
        { path: '/angebote-leistungen/informations-und-entlastungsgesraeche', label: 'Informations- und Entlastungsgespräche' },
        { path: '/angebote-leistungen/kinder-und-jugendlichensprechstunde', label: 'Kinder- und Jugendlichensprechstunde' },
        { path: '/angebote-leistungen/eltern-kind-gruppe', label: 'Eltern-Kind-Gruppe' },
        { path: '/angebote-leistungen/spielgruppe', label: 'Spielgruppe' },
        { path: '/angebote-leistungen/musikkreis', label: 'Musikkreis' }
    ];

    const projectsItems = [
        { path: '/projekte/gelbe-feen', label: 'gelbe Feen' },
        { path: '/projekte/oldi', label: 'OLdi' },
        { path: '/projekte/klein-hilft-gross', label: 'Klein hilft Groß' }
    ];

    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    <NavLink className="navbar-brand" to="/" onClick={closeMenu}>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/logoshia.png`} alt="Shia Logo" />
                    </NavLink>
                    <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                    </button>
                    <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                        <li>
                            <NavLink className="nav-link" to="/" onClick={closeMenu}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/about" onClick={closeMenu}>Über uns</NavLink>
                        </li>
                        <li className="dropdown">
                            <button className="dropdown-toggle">Angebote & Leistungen</button>
                            <ul className="dropdown-menu">
                                {angeboteItems.map((item, index) => (
                                    <li key={index}>
                                        <NavLink className="dropdown-item" to={item.path} onClick={closeMenu}>
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="dropdown">
                            <button className="dropdown-toggle">Projekte</button>
                            <ul className="dropdown-menu">
                                {projectsItems.map((item, index) => (
                                    <li key={index}>
                                        <NavLink className="dropdown-item" to={item.path} onClick={closeMenu}>
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;