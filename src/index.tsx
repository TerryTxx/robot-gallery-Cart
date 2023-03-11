import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { AppStateProvider } from './AppState';

ReactDOM.render(
    <React.StrictMode>
        <AppStateProvider>
            <App/>
        </AppStateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
