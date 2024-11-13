import React, { Component } from 'react';
import OverviewCard from './overview-card';

class Overview extends Component {
    state = {  } 
    render() { 
        return  <>
                    <h2>Überblick</h2>
                    <b>Wir bieten folgende Angebote und Leistungen an:</b>
                    <div className='overview-container'>
                        <OverviewCard image='achtsamkeit.jpg' imageAlt='Achtsamkeitstraining' title='Achtsamkeitstraining' description='In diesem Kurs erleben Kinder zusammen mit einer Begleitperson abwechslungsreiche Entspannungs- und Bewegungsübungen, lernen durch Geschichten und Atemspiele Ruhe und Anspannung bewusst wahrzunehmen und ihre Sinne zu entdecken.' path='achtsamkeitstraining' />
                        <OverviewCard image='umgang.jpg' imageAlt='Umgang' title='Umgang' description='Unser Angebot des begleiteten Umgangs ermöglicht es Kindern, in Anwesenheit einer neutralen Person den getrennt lebenden Elternteil zu treffen, wenn direkter Kontakt nicht möglich ist; dies kann durch das Jugendamt oder eine gerichtliche Entscheidung geregelt sein.' path='umgang' />
                        <OverviewCard image='information-entlastung.jpg' imageAlt='Informations- und Entlastungsgespräche' title='Informations- und Entlastungsgespräche' description='Unser Familienzentrum bietet vertrauensvolle Gesprächsangebote ohne Wartezeiten, um Familien bei Erziehungsfragen, Alltagsproblemen und Krisen zu unterstützen und gemeinsam Lösungen zu finden.' path='informations-und-entlastungsgesraeche' />
                        <OverviewCard image='kinder-jugendsprechstunde.jpg' imageAlt='Kinder- und Jugendsprechstunde' title='Kinder- und Jugendsprechstunde' description='Diese Sprechstunde bietet jungen Menschen einen sicheren Raum, um über persönliche Anliegen zu sprechen, gemeinsam Lösungen zu finden und bei Bedarf Unterstützung für die nächsten Schritte zu erhalten – alles in ihrem eigenen Tempo und mit der Option, eine Vertrauensperson dabei zu haben.' path='kinder-und-jugendlichensprechstunde'/>
                        <OverviewCard image='kinderyoga.jpg' imageAlt='Kinderyoga' title='Kinderyoga' description='Beginne deinen Tag entspannt mit unserem Yoga-Kurs für Mütter, der Körper und Geist in Einklang bringt, neue Energie schenkt und gleichzeitig Raum für dich und dein Kind schafft.' path='kinderyoga' />
                        <OverviewCard image='eltern-kind-gruppe.jpg' imageAlt='Eltern-Kind-Gruppe' title='Eltern-Kind-Gruppe' description='Eine Krabbelgruppe bietet Eltern und Kindern die Möglichkeit, in entspannter Atmosphäre Zeit miteinander zu verbringen, soziale Kontakte zu knüpfen und die Entwicklung der Kinder spielerisch zu fördern.' path='eltern-kind-gruppe' />
                        <OverviewCard image='spielgruppe.jpg' imageAlt='Spielgruppe' title='Spielgruppe' description='Unsere Spielgruppe bietet Kindern nach der Krabbelphase Raum zum Spielen, Entdecken und Freunde finden, fördert spielerisch motorische, soziale und kreative Fähigkeiten und ermöglicht Eltern den Austausch untereinander.' path='spielgruppe' />
                        <OverviewCard image='musikkreis.jpg' imageAlt='Musikkreis' title='Musikkreis' description='In unserer Eltern-Kind-Gruppe können Eltern und Kinder gemeinsam musizieren, erste Instrumente und Verse kennenlernen und in entspannter Atmosphäre soziale Kontakte knüpfen und die Sprachentwicklung fördern.' path='musikkreis' />
                        <OverviewCard image='familiencafe.jpg' imageAlt='Familiencafe' title='Familiencafe' description='Unser Familiencafé bietet Neuankömmlingen und Familien eine entspannte Atmosphäre zum Austausch über Erziehung und Alltag, um bei Kaffee und Kuchen neue Kontakte zu knüpfen, Ideen zu sammeln und entspannte gemeinsame Zeit zu genießen.' path='familiencafe'/>
                        <OverviewCard image='cooking.jpg' imageAlt='Kochen' title='Kochen' description='In unserem Kochkurs können Eltern und Kinder gemeinsam leckere, gesunde Gerichte zubereiten, neue Rezepte ausprobieren und spielerisch die Freude an frischen Lebensmitteln entdecken – ein Erlebnis für Groß und Klein, das mit einem gemeinsamen Essen endet.' path='cooking'/>
                    </div>
                </>;
    }
}
 
export default Overview;