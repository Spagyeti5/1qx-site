import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles.css';

// Properly inject Statcounter script (no document.write)
const statScript = document.createElement('script');
statScript.src = 'https://statcounter.com/counter/counter.js';
statScript.async = true;
document.body.appendChild(statScript);

// Set required global vars before script loads
window.sc_project = 1019245;
window.sc_invisible = 1;
window.sc_security = '631c69a7';

// Add <noscript> fallback
const noscript = document.createElement('noscript');
noscript.innerHTML = `
  <div class="statcounter">
    <a title="Web Analytics" href="https://statcounter.com/" target="_blank">
      <img class="statcounter" src="https://c.statcounter.com/1019245/0/631c69a7/1/" alt="Web Analytics" referrerPolicy="no-referrer-when-downgrade" />
    </a>
  </div>
`;
document.body.appendChild(noscript);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

