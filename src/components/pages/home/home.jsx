import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import EventTable from './eventTable';
import './home.css';

class Home extends Component {
    render() { 
        return (
            <>
                <h1>SHIA Familienzentrum</h1>
                <p className='introductionHome'>
                    <strong>Unterstützung, Information und Austausch für Familien</strong>
                </p>
                <p className='introductionText'>
                    Das SHIA Familienzentrum ist ein Treffpunkt im Herzen Dessaus für die ganze Familie. <br />
                    Wir bieten ein breites Spektrum an Angeboten an, um euch in eurem Alltag zu unterstützen <br />
                    und euch die Möglichkeit zu geben, sich mit anderen Familien auszutauschen.
                </p>
                <p>Unsere Angebote:</p>
                <EventTable />
                <p>
                    Das SHIA Familienzentrum lädt Euch herzlich ein, uns kennenzulernen und unsere Angebote in Anspruch zu nehmen.
                </p>
                <br />
                <p>
                    Alle weiteren Angebote findet ihr <NavLink to="/angebote-leistungen/ueberblick" className="link">hier im Überblick</NavLink>!
                </p>
                <br />
                <p>
                    <strong>Wir freuen uns auf euch!</strong>
                </p>
            </>
        );
    }
}
 
export default Home;