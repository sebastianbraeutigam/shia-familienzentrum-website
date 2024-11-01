import React, { Component } from 'react';
import OverviewCard from './overview-card';

class Overview extends Component {
    state = {  } 
    render() { 
        return  <>
                    <h2>Überblick</h2>
                    <b>Wir bieten folgende Angebote und Leistungen an:</b>
                    <div className='overview-container'>
                        <OverviewCard image='' title='Achtsamkeitstraining' description='In diesem Kurs erleben Kinder zusammen mit einer Begleitperson abwechslungsreiche Entspannungs- und Bewegungsübungen, lernen durch Geschichten und Atemspiele Ruhe und Anspannung bewusst wahrzunehmen und ihre Sinne zu entdecken.' path='achtsamkeitstraining' />
                        <OverviewCard image='' title='Informations- und Entlastungsgespräche' description='Unser Familienzentrum bietet vertrauensvolle Gesprächsangebote ohne Wartezeiten, um Familien bei Erziehungsfragen, Alltagsproblemen und Krisen zu unterstützen und gemeinsam Lösungen zu finden.' path='informations-und-entlastungsgesraeche' />
                        <OverviewCard image='' title='Kinder- und Jugendlichensprechstunde' description='Diese Sprechstunde bietet jungen Menschen einen sicheren Raum, um über persönliche Anliegen zu sprechen, gemeinsam Lösungen zu finden und bei Bedarf Unterstützung für die nächsten Schritte zu erhalten – alles in ihrem eigenen Tempo und mit der Option, eine Vertrauensperson dabei zu haben.' path='kinder-und-jugendlichensprechstunde'/>
                        <OverviewCard image='kinderyoga.jpg' title='Kinderyoga' description='Beginne deinen Tag entspannt mit unserem Yoga-Kurs für Mütter, der Körper und Geist in Einklang bringt, neue Energie schenkt und gleichzeitig Raum für dich und dein Kind schafft.' path='kinderyoga' />
                        <OverviewCard image='' title='Eltern-Kind-Gruppe' description='Eine Krabbelgruppe bietet Eltern und Kindern die Möglichkeit, in entspannter Atmosphäre Zeit miteinander zu verbringen, soziale Kontakte zu knüpfen und die Entwicklung der Kinder spielerisch zu fördern.' path='eltern-kind-gruppe' />
                        <OverviewCard image='spielgruppe.jpg' title='Spielgruppe' description='Unsere Spielgruppe bietet Kindern nach der Krabbelphase Raum zum Spielen, Entdecken und Freunde finden, fördert spielerisch motorische, soziale und kreative Fähigkeiten und ermöglicht Eltern den Austausch untereinander.' path='spielgruppe' />
                        <OverviewCard image='musikkreis.jpg' title='Musikkreis' description='In unserer Eltern-Kind-Gruppe können Eltern und Kinder gemeinsam musizieren, erste Instrumente und Verse kennenlernen und in entspannter Atmosphäre soziale Kontakte knüpfen und die Sprachentwicklung fördern.' path='musikkreis' />
                        <OverviewCard image='familiencafe.jpg' title='Familiencafe' description='Unser Familiencafé bietet Neuankömmlingen und Familien eine entspannte Atmosphäre zum Austausch über Erziehung und Alltag, um bei Kaffee und Kuchen neue Kontakte zu knüpfen, Ideen zu sammeln und entspannte gemeinsame Zeit zu genießen.' path='familiencafe'/>
                    </div>
                </>;
    }
}
 
export default Overview;