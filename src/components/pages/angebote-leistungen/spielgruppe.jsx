import React, { Component } from 'react';
import '../img.css';

class Spielgruppe extends Component {
    state = {  } 
    render() { 
        return  <>
                    <h2>Spielgruppe</h2>
                    
                    <div className="text-with-image">
                        <div className="textdiv">
                            <strong>
                                Das Kind ist zu groß für die Krabbelgruppe und zu klein für den Kindergarten? Dann seid ihr hier genau richtig! Hier darf getobt und gespielt werden. Angebote zum Klettern, entdecken und kennenlernen.
                            </strong>
                            <p>
                                Unsere Spielgruppe richtet sich an Kinder, die bereits aus der Krabbelphase herausgewachsen sind und nun die Welt erobern wollen! Hier treffen sich kleine Entdecker um gemeinsam zu spielen, zu lernen und Spaß zu haben.
                            </p>
                            <p>
                                Es werden motorische, soziale und kreative Fähigkeiten der Kinder gefördert. Es gibt abwechslungsreiche Spiele und Raum für freies Spiel. Dabei legen wir besonderen Wert auf gemeinsames Erleben und die ersten Freundschaften.
                            </p>
                            <p>
                                Unsere Spielgruppe bietet den Kindern die Möglichkeit, ihre Persönlichkeit zu entfalten und neue Fähigkeiten zu entdecken – ganz ohne Druck, aber mit viel Freude und Abenteuerlust. Gleichzeitig haben Eltern die Gelegenheit, sich auszutauschen und Kontakte zu knüpfen.
                            </p>
                            <p>
                                Wir freuen uns darauf, euch und eure kleinen Entdecker kennenzulernen!
                            </p>
                        </div>
                        <div className="imgdiv">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/krabbelgruppe_pic2.jpg`} alt="Krabbelgruppe Bild 1" className='pageimg1' />
                            <img src={`${process.env.PUBLIC_URL}/assets/img/krabbelgruppe_pic1.jpg`} alt="Krabbelgruppe Bild 2" className='pageimg2' />
                        </div>
                    </div>
                    
                </>;
    }
}
 
export default Spielgruppe;