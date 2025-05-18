import React, { Component } from 'react';
import OverviewCard from './overview-card';
import overviewItems from '../../../data/overviewItems.json'; // Importiere die JSON-Datei

class Overview extends Component {
    render() {
        return (
            <>
                <h2>Überblick</h2>
                <b>Wir bieten folgende Angebote und Leistungen an:</b>
                <div className='overview-container'>
                    {overviewItems.map((item, index) => (
                        <OverviewCard
                            key={index}
                            image={item.image}
                            imageAlt={item.imageAlt}
                            title={item.title}
                            description={item.description}
                            path={item.path}
                        />
                    ))}
                </div>
            </>
        );
    }
}

export default Overview;