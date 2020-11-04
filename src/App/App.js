import React from 'react';
import Joke from '../components/Joke';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h2>React Joke Generator</h2>
        <Joke />
      </div>
    );
  }
}

export default App;
