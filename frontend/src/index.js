import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';
import ScrollToTop from './components/scrolltotop';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter basename="/shia-familienzentrum-website">
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </React.StrictMode>
);