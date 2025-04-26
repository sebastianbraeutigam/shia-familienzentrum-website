import React, { Component } from 'react';
import './contact.css';
import Telephone from '../telephone';
import Mail from '../mail';

class Contact extends Component {
    state = { 
        loadIframe: false 
    };

    componentDidMount() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.setState({ loadIframe: true });
                        observer.disconnect();
                    }
                });
            });

            observer.observe(this.iframeContainer);
        } else {
            // Fallback für Browser, die IntersectionObserver nicht unterstützen
            this.setState({ loadIframe: true });
        }
    }

    render() { 
        return (
            <>
                <h2>Kontakt</h2>
                <div className="addressContainer">
                    <div className="adressDiv">
                        <h5><strong>SHIA Familienzentrum</strong></h5>
                        <p>Wörlitzer Straße 69</p>
                        <p>06844 Dessau-Roßlau</p>
                        <p className='telephone'><Telephone /></p>
                        <p className='email'><Mail /></p>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/front.JPG`} alt="Frontbild" className="contactimg" /> 
                    </div>
                    <div className="addressCard" ref={el => this.iframeContainer = el}>
                        {this.state.loadIframe ? (
                            <iframe
                                className='mapsIframe'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.115327102633!2d12.248367777115122!3d51.84058948630762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a616d06b62adcd%3A0x5b20bf781d8b22a0!2sW%C3%B6rlitzer%20Str.%2069%2C%2006844%20Dessau-Ro%C3%9Flau!5e0!3m2!1sde!2sde!4v1731363374194!5m2!1sde!2sde"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps"
                                allowFullScreen
                            />
                        ) : (
                            <div className="iframe-placeholder">
                                <p>Karte wird geladen...</p>
                            </div>
                        )}
                    </div>
                </div>
            </>
        );
    }
}
 
export default Contact;