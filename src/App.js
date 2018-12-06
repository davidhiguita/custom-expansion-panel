import React, { Component } from 'react';
import 'react-md/dist/react-md.indigo-pink.min.css';

import CustomExpansionPanel from './containers/custom-expansion-panel';
import './style.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="item">
          <CustomExpansionPanel />
        </div>
        <div className="item">text 1</div>
        <div className="item">text 2</div>
      </div>
    );
  }
}

export default App;
