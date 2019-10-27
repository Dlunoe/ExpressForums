import React from 'react';
import './App.css';
import ForumsContainer from './Components/Topics/ForumsContainer'
import Navigation from './Components/Navigation/Navigation'

function App() {
  return (
    <div>
      <Navigation />
      <ForumsContainer />
    </div>
  );
}

export default App;
