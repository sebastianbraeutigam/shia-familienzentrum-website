import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

class Header extends Component {
    state = {
        isMenuOpen: false
    };

    toggleMenu = () => {
        this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));
      };

      closeMenu = () => {
        this.setState({ isMenuOpen: false });
      };

    // damit bei einer neu geladenen Seite das menu gescchloss ist, muss im Button className=.navbar-toggler .collapsed drin sein 
    render() { 
        const { isMenuOpen } = this.state;

        return  <header>
                   <nav className="navbar navbar-expand-md bg-*">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand imgTag" to="/">
                                <img src="/assets/img/Logo_Shia.png" alt="Logo" style={{width: '60%', mixBlendMode: 'multiply', paddigLeft:'0.5em'}} onClick={this.closeMenu}  />
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
                                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Angebote &amp; Leistungen
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><NavLink className="dropdown-item" to="/angebote/achtsamkeitstraining" onClick={this.closeMenu}>im Überblick</NavLink></li>
                                            <ul>
                                                <li><NavLink className="dropdown-item" to="/angebote/achtsamkeitstraining" onClick={this.closeMenu}>Achtsamkeitstraining</NavLink></li>
                                                <li><NavLink className="dropdown-item" to="/angebote/informations-und-entlastungsgesraeche" onClick={this.closeMenu}>Informations- und Entlastungsgespräche</NavLink></li>
                                                <li><NavLink className="dropdown-item" to="/angebote/kinder-und-jugendlichensprechstunde" onClick={this.closeMenu}>Kinder- und Jugendlichensprechstunde</NavLink></li>
                                                <li><NavLink className="dropdown-item" to="/kurse/kinderyoga" onClick={this.closeMenu}>Kinderyoga</NavLink></li>
                                                <li><NavLink className="dropdown-item" to="/kurse/eltern-kind-gruppe" onClick={this.closeMenu}>Eltern-Kind-Gruppe</NavLink></li>
                                                <li><NavLink className="dropdown-item" to="/kurse/spielgruppe" onClick={this.closeMenu}>Spielgruppe</NavLink></li>
                                                <li><NavLink className="dropdown-item" to="/kurse/musikkreis" onClick={this.closeMenu}>Musikkreis</NavLink></li>
                                            </ul>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Projekte
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><NavLink className="dropdown-item" to="/projekte/gelbe-feen" onClick={this.closeMenu}>gelbe Feen</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/projekte/oldi" onClick={this.closeMenu}>OLdi</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/projekte/klein-hilft-gross" onClick={this.closeMenu}>Klein hilft Groß</NavLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>;
    }
}
 
export default Header;