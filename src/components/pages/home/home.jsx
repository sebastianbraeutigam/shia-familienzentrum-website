import React, { Component } from 'react';
import EventTable from './eventTable';

class Home extends Component {
    state = {  } 
    render() { 
        return  <>
                    <h1>SHIA Familienzentrum</h1>
                    <strong>Unterstützung, Information und Austausch für Familien</strong>
                    <p className='introductionHome'>
                        Das SHIA Familienzentrum ist ein Treffpunkt im Herzen Dessaus für die ganze Familie. <br />
                        Wir bieten ein breites Spektrum an Angeboten an, um euch in eurem Alltag zu unterstützen <br />
                        und euch die Möglichkeit zu geben, sich mit anderen Familien auszutauschen.
                    </p>
                    <EventTable />
                </>;
    }
}
 
export default Home;