import React, { Component } from 'react';
import Telephone from '../../telephone';

class InformationsUndEntlastungsgespraeche extends Component {
    state = {  } 
    render() { 
        return  <>
                    <h2>Informations- und Entlastungsgespräche</h2>
                    <p>
                        Eine der zentralen Aufgaben unseres Familienzentrums ist es, ein Gesprächsangebot für Familien bereitzustellen. Unsere Informations- und Entlastungsgespräche bieten Unterstützung bei Erziehungsfragen und der Alltagsgestaltung mit Kindern. Sie können auch ein erster Schritt zu weiterführender Beratung sein. In unseren vertrauensvollen Räumen stehen Ihnen kompetente Ansprechpartner*innen ohne lange Wartezeiten zur Seite.
                    </p>
                    <p>
                        Wir sehen Krisen als Chancen zur Entwicklung und suchen gemeinsam nach Lösungen und Ressourcen.
                    </p>
                    <p>
                        Sie haben ein Anliegen, das über Erziehung hinausgeht? Wir sind für Sie da – ob Sie sich mit anderen familiären Themen beschäftigen oder einfach ein offenes Ohr suchen.
                    </p>
                    <p>
                        Ruft uns gerne an: &nbsp;<Telephone />
                    </p>
                </>;
        
    }
}
 
export default InformationsUndEntlastungsgespraeche;