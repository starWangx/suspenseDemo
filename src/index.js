import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// I did a little hack here to make mouse click interactive
import './registerMouseClick';

ReactDOM.unstable_createRoot(document.getElementById('root')).render(<App />)