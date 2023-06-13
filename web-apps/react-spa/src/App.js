import logo from './logo.svg';
import './App.css';

function App() {
  const apiUrl = window.config.apiUrl;
    const enableNewFeature = window.config.featureFlags.enableNewFeature;
    const enableExperimentalFeature = window.config.featureFlags.enableExperimentalFeature;
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
            <label>API URL: apiUrl</label> <br />
            <label> enable New Feature: enableNewFeature </label><br />
            <label> Enable Experiment Feature: enableExperimentalFeature </label><br />
      </body>
    </div>
  );
}

export default App;
