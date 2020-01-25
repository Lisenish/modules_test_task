import React from 'react';
import './App.css';
import ReloadButton from './components/ReloadButton';
import ModuleListContainer from './containers/ModuleListContainer';

function App() {
  return (
    <div className="App">
      <ModuleListContainer />
      <ReloadButton className="App__reload-button" />
    </div>
  );
}

export default App;
