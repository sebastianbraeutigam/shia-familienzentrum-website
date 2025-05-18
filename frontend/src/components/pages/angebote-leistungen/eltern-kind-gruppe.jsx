import React, { Component } from 'react';
import Telephone from '../../telephone';

class ElternKindGruppe extends Component {
    state = {  } 
    render() { 
        return  <>
                    <h2>Unsere Eltern-Kind-Gruppen</h2>
                    <p>
                        Sich bewusst Zeit nehmen, die Entwicklung und Gesundheit des Babys und Kleinkindes fördern, etwas Neues lernen, Kontakte zu anderen Eltern knüpfen – Vieles spricht dafür, mit Ihrem Kind eine Krabbelgruppe zu besuchen.
                    </p>
                    <p>
                        Unsere Eltern-Kind-Gruppe bietet die perfekte Gelegenheit für Eltern und ihre kleinen Schätze, gemeinsam Zeit zu verbringen und sich mit anderen Familien auszutauschen. In einer entspannten und liebevollen Atmosphäre können die Kinder erste Kontakte knüpfen, spielen und die Welt um sich herum entdecken. Gleichzeitig haben die Eltern die Möglichkeit, sich über Alltagsthemen, Erziehungsfragen und persönliche Erfahrungen auszutauschen. Neben Spiel und Spaß fördern wir die soziale Entwicklung der Kinder und unterstützen sie in ihrer natürlichen Neugierde. Kommt vorbei und werdet Teil unserer Gemeinschaft – wir freuen uns auf euch!
                    </p>
                    <p>
                        Meldet euch gern unter: &nbsp;
                        <Telephone />
                    </p>
                </>;
    }
}
 
export default ElternKindGruppe;