import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        };
    }

    toggleMenu = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    closeMenu = () => {
        this.setState({ isMenuOpen: false });
    }

    render() {
        const { isMenuOpen } = this.state;

        return (
            <header>
                <nav className="navbar navbar-expand-md bg-*">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand imgTag" to="/">
                            <img src="/assets/img/Logo_Shia.png" alt="Logo" style={{width: '60%', paddingLeft:'0.5em'}} onClick={this.closeMenu} />
                        </NavLink>
                        <button className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isMenuOpen ? 'true' : 'false'} aria-label="Toggle navigation" onClick={this.toggleMenu}>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/" onClick={this.closeMenu}>Home</NavLink>
                                </li>
                                <li className="nav-item" style={{whiteSpace: 'nowrap'}}>
                                    <NavLink className="nav-link" to="/about" onClick={this.closeMenu}>Über uns</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <button className="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Angebote &amp; Leistungen
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><NavLink className="dropdown-item" to="/angebote-leistungen/ueberblick" onClick={this.closeMenu}>Überblick</NavLink></li>
                                        <ul>
                                            <li><NavLink className="dropdown-item" to="/angebote-leistungen/achtsamkeitstraining" onClick={this.closeMenu}>Achtsamkeitstraining</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/angebote-leistungen/informations-und-entlastungsgesraeche" onClick={this.closeMenu}>Informations- und Entlastungsgespräche</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/angebote-leistungen/kinder-und-jugendlichensprechstunde" onClick={this.closeMenu}>Kinder- und Jugendlichensprechstunde</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/angebote-leistungen/kinderyoga" onClick={this.closeMenu}>Kinderyoga</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/angebote-leistungen/eltern-kind-gruppe" onClick={this.closeMenu}>Eltern-Kind-Gruppe</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/angebote-leistungen/spielgruppe" onClick={this.closeMenu}>Spielgruppe</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/angebote-leistungen/musikkreis" onClick={this.closeMenu}>Musikkreis</NavLink></li>
                                        </ul>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <button className="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Projekte
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><NavLink className="dropdown-item" to="/projekte/gelbe-feen" onClick={this.closeMenu}>gelbe Feen</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/projekte/oldi" onClick={this.closeMenu}>OLdi</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;