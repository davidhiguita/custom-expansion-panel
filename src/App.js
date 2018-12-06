import React, { Component } from 'react';
import { FontIcon } from 'react-md';
import 'react-md/dist/react-md.indigo-pink.min.css';

import CustomExpansionPanel from './components/custom-expansion-panel';
import './style.scss';

const content = (
  <div style={{ padding: '20px', textAlign: "justify" }}>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of
      letters, as opposed to using 'Content here, content here', making it
      look like readable English. Many desktop publishing packages and web
      page editors now use Lorem Ipsum as their default model text, and a
      search for 'lorem ipsum' will uncover many web sites still in their
      infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like).
  </div>
);

const primaryLabel = (color) => (
  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FontIcon style={{ fontSize: '2rem', color: color }}>location_city</FontIcon>
        <span style={{ color: color }}>Delivery</span>
      </div>
      <div style={{ color: '#01A9F4', fontSize: '1.5rem' }}>Sterling, IL</div>
      <div>Label 3</div>
      <div>Label 4</div>
  </div>
);

const secondaryLabel = (
  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', 'justifyContent': 'center' }}>
      Secondary
  </div>
);

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="item">
                    <CustomExpansionPanel
                        content={content}
                        primaryLabel={
                          <div style={{ width: '50%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                              <FontIcon style={{ fontSize: '2rem', color: 'green' }}>location_city</FontIcon>
                              <span style={{ color: 'green' }}>Delivery</span>
                            </div>
                            <div style={{ color: '#01A9F4', fontSize: '1.5rem' }}>Sterling, IL</div>
                        </div>
                        }
                        // expandedSecondaryLabel={
                        //   <div style={{ display: 'flex', alignItems: 'center' }}>
                        //     <FontIcon style={{ marginRight: '10px' }}>access_time</FontIcon>
                        //     <span>02/15 15:30 - 02/15 15:45</span>
                        //   </div>
                        // }
                    />
                </div>
                <div className="item">
                    <CustomExpansionPanel
                        content={content}
                        primaryLabel={primaryLabel('red')}
                        expandedSecondaryLabel={secondaryLabel}
                    />
                </div>
                <div className="item">
                    <CustomExpansionPanel
                        content={content}
                        primaryLabel={primaryLabel('blue')}
                        expandedSecondaryLabel={secondaryLabel}
                    />
                </div>
                <div className="item">
                    <CustomExpansionPanel
                        content={content}
                        primaryLabel={primaryLabel('orange')}
                        expandedSecondaryLabel={secondaryLabel}
                    />
                </div>
            </div>
        );
    }
}

export default App;
