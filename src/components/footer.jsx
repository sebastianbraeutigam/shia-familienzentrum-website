import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const currentYear = new Date().getFullYear();


class Footer extends Component {
    state = {  } 
    render() { 
        return  <footer>
                    <nav className="navbar navbar-expand-sm bg-body-tertiary">
                        <div className="container-fluid">
                          <div className="navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                              <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Kontakt</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" to="/imprint">Impressum</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" to="/privacy">Datenschutzerklärung</NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                    </nav>
                    <p className="text-center text-muted bg-body-tertiary">&copy; {currentYear} SHIA Familienzentrum. Alle Rechte vorbehalten.</p>
                </footer>;
    }
}
 
export default Footer;