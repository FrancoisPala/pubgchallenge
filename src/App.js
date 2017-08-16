import React, { Component } from 'react';
import './App.css';
import First from './tables/first';

class App extends Component {
  render() {

    // add a complexity marker if you want more chalenges in one
    // (start there AND only use that kind of weapon AND kill somebody with a car before killing anybody else)

    const first = First[Math.floor(Math.random() * (First.length - 0))];
    const second = first.table[Math.floor(Math.random() * (first.table.length - 0) + 0)];
    const sentence = `${first.phrase}${second.title} ${second.hint} Worth ${second.points} useless internet points`;

    return (
      <div className="sentence">
        {sentence}
      </div>
    );
  }
}

export default App;
