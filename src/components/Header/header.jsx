import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [angeboteIsHovered, setAngeboteIsHovered] = useState(false);
    const [projectsIsHovered, setProjectsIsHovered] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleMouseEnter = (menu) => {
        if (menu === 'angebote') {
            setAngeboteIsHovered(true);
        } else if (menu === 'projects') {
            setProjectsIsHovered(true);
        }
    };

    const handleMouseLeave = (menu) => {
        if (menu === 'angebote') {
            setAngeboteIsHovered(false);
        } else if (menu === 'projects') {
            setProjectsIsHovered(false);
        }
    };

    const renderDropdownMenu = (menu, items) => {
        const isHovered = menu === 'angebote' ? angeboteIsHovered : projectsIsHovered;
        return (
            <li className={`nav-item dropdown ${isHovered ? 'show' : ''}`} onMouseEnter={() => handleMouseEnter(menu)} onMouseLeave={() => handleMouseLeave(menu)}>
                <button className="nav-link dropdown-toggle" type="button" aria-expanded={isHovered}>
                    {menu === 'angebote' ? 'Angebote & Leistungen' : 'Projekte'}
                </button>
                <ul className={`dropdown-menu dropdown-menu-end ${isHovered ? 'show' : ''}`} onClick={closeMenu}>
                    {items.map((item, index) => (
                        <li key={index}><NavLink className="dropdown-item" to={item.path} onClick={closeMenu}>{item.label}</NavLink></li>
                    ))}
                </ul>
            </li>
        );
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
            <nav className="navbar navbar-expand-md bg-*">
                <div className="container-fluid">
                    <NavLink className="navbar-brand imgTag" to="/" onClick={closeMenu}>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/logo_shia.png`} alt="Shia Logo" />
                    </NavLink>
                    <button className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isMenuOpen ? 'true' : 'false'} aria-label="Toggle navigation" onClick={toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link navlink" to="/" onClick={closeMenu}>Home</NavLink>
                            </li>
                            <li className="nav-item" style={{whiteSpace: 'nowrap'}}>
                                <NavLink className="nav-link navlink" to="/about" onClick={closeMenu}>Über uns</NavLink>
                            </li>
                            {renderDropdownMenu('angebote', angeboteItems)}
                            {renderDropdownMenu('projects', projectsItems)}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;