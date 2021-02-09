import React from 'react';
import GlobalStyle from './Constants/StyledReset'
import BoredContainer from './Components/BoredContainer/BoredContainer';

class App extends React.Component {

  render() {
      console.log(this.state)
      return(
        <>
          <GlobalStyle />
          <BoredContainer />
        </>
      )
  };
};

export default App;