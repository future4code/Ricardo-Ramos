
import React from 'react';
import styled from 'styled-components';
import AddNewUser from './Components/AddNewUser/AddNewUser';
import ListUsers from './Components/ListUsers/ListUsers';

const ButtonChangePage = styled.button`
  background-color: red;
  border-radius: 12px;
  color: whitesmoke;
`

class App extends React.Component {
  state = {
    renderPage: "addNewUser"
  };

  switchPages = () => {
    this.state.renderPage === "listUsers" ? this.setState({ renderPage: "addNewUser" }) : this.setState({ renderPage: "listUsers" })
  };

  render() {
    return (
      <>
        <ButtonChangePage onClick={this.switchPages}> Alternar entre cadastro e lista </ButtonChangePage>
        {this.state.renderPage === "addNewUser" ? <AddNewUser /> : <ListUsers />}
      </>
    );
  };
};

export default App;