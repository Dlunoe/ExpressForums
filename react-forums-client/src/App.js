import React from 'react';
import './App.css';
import ForumsContainer from './Components/Topics/ForumsContainer'
import Navigation from './Components/Navigation/Navigation'

function App() {
  return (
    <div class="App">
      <Navigation />
      <ForumsContainer />
    </div>
  );
}

export default App;
