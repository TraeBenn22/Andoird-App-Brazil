import React from 'react';
import AppContainer from './src/navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  render() {
    return <AppContainer />;
  }
}

export default App;
