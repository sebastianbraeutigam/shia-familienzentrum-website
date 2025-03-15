import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            angeboteIsHovered: false,
            projectsIsHovered: false
        };
    }

    toggleMenu = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    closeMenu = () => {
        this.setState({ isMenuOpen: false });
    }

    handleMouseEnter = (menu) => {
        this.setState({ [menu]: true });
    }

    handleMouseLeave = (menu) => {
        this.setState({ [menu]: false });
    }

    renderDropdownMenu = (menu, items) => {
        const isHovered = this.state[menu];
        return (
            <li className={`nav-item dropdown ${isHovered ? 'show' : ''}`} onMouseEnter={() => this.handleMouseEnter(menu)} onMouseLeave={() => this.handleMouseLeave(menu)}>
                <button className="nav-link dropdown-toggle" type="button" aria-expanded={isHovered}>
                    {menu === 'angeboteIsHovered' ? 'Angebote & Leistungen' : 'Projekte'}
                </button>
                <ul className={`dropdown-menu dropdown-menu-end ${isHovered ? 'show' : ''}`}>
                    {items.map((item, index) => (
                        <li key={index}><NavLink className="dropdown-item" to={item.path} onClick={this.closeMenu}>{item.label}</NavLink></li>
                    ))}
                </ul>
            </li>
        );
    }

    render() {
        const { isMenuOpen } = this.state;

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
                        <NavLink className="navbar-brand imgTag" to="/">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/logo_shia.png`} alt="Shia Logo" onClick={this.closeMenu} />
                        </NavLink>
                        <button className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isMenuOpen ? 'true' : 'false'} aria-label="Toggle navigation" onClick={this.toggleMenu}>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link navlink" to="/" onClick={this.closeMenu}>Home</NavLink>
                                </li>
                                <li className="nav-item" style={{whiteSpace: 'nowrap'}}>
                                    <NavLink className="nav-link navlink" to="/about" onClick={this.closeMenu}>Über uns</NavLink>
                                </li>
                                {this.renderDropdownMenu('angeboteIsHovered', angeboteItems)}
                                {this.renderDropdownMenu('projectsIsHovered', projectsItems)}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;