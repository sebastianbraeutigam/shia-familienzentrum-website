import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Privacy from './components/pages/privacy';
import Imprint from './components/pages/imprint';
import Kinderyoga from './components/pages/kinderyoga';
import ElternKindGruppe from './components/pages/eltern-kind-gruppe';
import Spielgruppe from './components/pages/spielgruppe';
import Musikkreis from './components/pages/musikkreis';
import Achtsamkeitstraining from './components/pages/achtsamkeitstraining';
import InformationsUndEntlastungsgespraeche from './components/pages/informations-und-entlastungsgespraeche';
import KinderUndJugendlichensprechstunde from './components/pages/kinder-und-jugendlichensprechstunde';
import GelbeFeen from './components/pages/gelbe-feen';
import Oldi from './components/pages/oldi';
import KleinHilftGroß from './components/pages/klein-hilft-gross';



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

                                {/* alle angebote */}
                                <Route path='/angebote/achtsamkeitstraining' element={<Achtsamkeitstraining />} />
                                <Route path='/angebote/informations-und-entlastungsgesraeche' element={<InformationsUndEntlastungsgespraeche />} />
                                <Route path='/angebote/kinder-und-jugendlichensprechstunde' element={<KinderUndJugendlichensprechstunde />} />
                                
                                {/* alle kurse */}
                                <Route path='/kurse/kinderyoga' element={<Kinderyoga />} />
                                <Route path='/kurse/eltern-kind-gruppe' element={<ElternKindGruppe />} />
                                <Route path='/kurse/spielgruppe' element={<Spielgruppe />} />
                                <Route path='/kurse/musikkreis' element={<Musikkreis />} />
                                
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