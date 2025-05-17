import React, { Component } from 'react';
import Telephone from '../../telephone';

class Musikkreis extends Component {
    state = {  } 
    render() { 
        return  <>
                    <h2>Musikkreis</h2>
                    <p>
                        Unsere Eltern-Kind-Gruppe bietet die perfekte Gelegenheit für Eltern und ihre kleinen Schätze, gemeinsam zu musizieren und sich mit anderen Familien auszutauschen. Hier im Kreis haben schon die Kleinen die Möglichkeit, mit Rasseln und Glocken in Berührung zu kommen. Sowie Musik – Rhythmik und die ersten Kinderverse und auch Fingerspiele kennenzulernen. In einer entspannten und liebevollen Atmosphäre können die Kinder erste Kontakte knüpfen, spielen und die Welt um sich herum entdecken. Gleichzeitig haben die Eltern die Möglichkeit, sich über Alltagsthemen, Erziehungsfragen und persönliche Erfahrungen auszutauschen. Neben Spiel und Spaß fördern wir die soziale Entwicklung der Kinder und unterstützen sie in ihrer Sprachentwicklung. Kommt vorbei und werdet Teil unserer Gemeinschaft – wir freuen uns auf euch!
                    </p>
                    <p>
                        Meldet euch gern unter: 
                        &nbsp;<Telephone />
                    </p>
                </>;
    }
}
 
export default Musikkreis;