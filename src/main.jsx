import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles.css';

// Inject Statcounter script (invisible)
const statScript = document.createElement('script');
statScript.type = 'text/javascript';
statScript.innerHTML = `
  var sc_project = 1019245;
  var sc_invisible = 1;
  var sc_security = "631c69a7";
  var scJsHost = "https://";
  document.write("<sc"+"ript type='text/javascript' src='" +
    scJsHost +
    "statcounter.com/counter/counter.js'></"+"script>");
`;
document.body.appendChild(statScript);

// Add noscript fallback (invisible)
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
