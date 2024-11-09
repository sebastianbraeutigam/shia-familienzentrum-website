import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/pages/home/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Privacy from './components/pages/privacy';
import Imprint from './components/pages/imprint';
/* import Kinderyoga from './components/pages/angebote-leistungen/kinderyoga'; */
import ElternKindGruppe from './components/pages/angebote-leistungen/eltern-kind-gruppe';
import Spielgruppe from './components/pages/angebote-leistungen/spielgruppe';
import Musikkreis from './components/pages/angebote-leistungen/musikkreis';
import Achtsamkeitstraining from './components/pages/angebote-leistungen/achtsamkeitstraining';
import InformationsUndEntlastungsgespraeche from './components/pages/angebote-leistungen/informations-und-entlastungsgespraeche';
import KinderUndJugendlichensprechstunde from './components/pages/angebote-leistungen/kinder-und-jugendlichensprechstunde';
import GelbeFeen from './components/pages/projekte/gelbe-feen';
import Oldi from './components/pages/projekte/oldi';
import KleinHilftGroß from './components/pages/klein-hilft-gross';
import Overview from './components/pages/angebote-leistungen/overview';
import Familiencafe from './components/pages/angebote-leistungen/familiencafe';
import Cooking from './components/pages/angebote-leistungen/cooking';
import Umgang from './components/pages/angebote-leistungen/umgang';



class App extends Component {
    state = {  } 
    render() { 
        return      <>
                        <Header />
                        <main>
                            <Routes>

                                <Route path='/' element={<Home />} />
                                <Route path='/about' element={<About />} />
                                <Route path='/contact' element={<Contact />} />
                                <Route path='/privacy' element={<Privacy />}  />
                                <Route path='/imprint' element={<Imprint />} />

                                {/* alle angebote + leistungen */}
                                <Route path='/angebote-leistungen/im-ueberblick' element={<Overview />} />
                                <Route path='/angebote-leistungen/umgang' element={<Umgang />} />
                                <Route path='/angebote-leistungen/achtsamkeitstraining' element={<Achtsamkeitstraining />} />
                                <Route path='/angebote-leistungen/informations-und-entlastungsgesraeche' element={<InformationsUndEntlastungsgespraeche />} />
                                <Route path='/angebote-leistungen/kinder-und-jugendlichensprechstunde' element={<KinderUndJugendlichensprechstunde />} />
                                {/*<Route path='/angebote-leistungen/kinderyoga' element={<Kinderyoga />} />*/}
                                <Route path='/angebote-leistungen/eltern-kind-gruppe' element={<ElternKindGruppe />} />
                                <Route path='/angebote-leistungen/spielgruppe' element={<Spielgruppe />} />
                                <Route path='/angebote-leistungen/musikkreis' element={<Musikkreis />} />
                                <Route path='/angebote-leistungen/familiencafe' element={<Familiencafe />} />
                                <Route path='/angebote-leistungen/cooking' element={<Cooking />} />
                                
                                {/* alle projekte */}
                                <Route path='/projekte/gelbe-feen' element={<GelbeFeen />} />
                                <Route path='/projekte/oldi' element={<Oldi />} />
                                <Route path='/projekte/klein-hilft-gross' element={<KleinHilftGroß />} />

                            </Routes>
                        </main>
                        <Footer />
                    </>;
    }
}
 
export default App;