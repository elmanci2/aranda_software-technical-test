import React from 'react';
import Home from './screens/Home';
import '../src/scss/app.scss'
import Context from './context/Context';

function App() {
  return (
    <div className="App">
      <Context>
        <Home />
      </Context>

    </div>
  );
}

export default App;
