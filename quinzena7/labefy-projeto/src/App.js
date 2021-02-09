import React from 'react';
import Menu from './Components/Menu/Menu';
import Reset from './Constants/Reset';
import NewPlaylist from './Components/NewPlaylist/NewPlaylist';
import EditPlaylists from './Components/EditPlaylists/EditPlaylists';

class App extends React.Component {
  state = {
    pageOnScreen: "NewPlaylist"
  };

  switchPages = (pageOnScreen) => {
    this.setState({ pageOnScreen: pageOnScreen })
  };

  render() {
    const renderComponent = () => {
      if (this.state.pageOnScreen === "NewPlaylist") {
        return <NewPlaylist />
      } else if (this.state.pageOnScreen === "EditPlaylists") {
        return <EditPlaylists />
      }
    };

    return (
      <main>
        <Reset />
        <Menu switchPages={ this.switchPages } />
        {renderComponent()}
      </main>
    );
  };
};

export default App;