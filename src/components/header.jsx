import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

class Header extends Component {
    state = {  }

    // damit bei einer neu geladenen Seite das menu gescchloss ist, muss im Button className=.navbar-toggler .collapsed drin sein 
    render() { 
        return  <header>
                   <nav className="navbar navbar-expand-md bg-body-tertiary">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand imgTag" to="/">
                                <img src="/assets/img/Logo_Shia.png" alt="Logo" style={{width: '60%', mixBlendMode: 'multiply', paddigLeft:'0.5em'}}  />
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item" style={{whiteSpace: 'nowrap'}}>
                                        <NavLink className="nav-link" to="/about">Über uns</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Angebote
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><NavLink className="dropdown-item" to="/angebote/achtsamkeitstraining">Achtsamkeitstraining</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/angebote/informations-und-entlastungsgesraeche">Informations- und Entlastungsgespräche</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/angebote/kinder-und-jugendlichensprechstunde">Kinder- und Jugendlichensprechstunde</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Kurse
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><NavLink className="dropdown-item" to="/kurse/kinderyoga">Kinderyoga</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/kurse/eltern-kind-gruppe">Eltern-Kind-Gruppe</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/kurse/spielgruppe">Spielgruppe</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/kurse/musikkreis">Musikkreis</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Projekte
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><NavLink className="dropdown-item" to="/projekte/gelbe-feen">gelbe Feen</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/projekte/oldi">OLdi</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/projekte/klein-hilft-gross">Klein hilft Groß</NavLink></li>
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