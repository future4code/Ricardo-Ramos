import React from 'react';
import axios from 'axios';

class AddNewUser extends React.Component {
  state = {
      name: "",
      email: ""
  };

  newUsername = (e) => {
    const usernameValue = e.target.value;
    this.setState({ name: usernameValue });
  };

  newEmail = (e) => {
    const emailValue = e.target.value;
    this.setState ({ email: emailValue });
  };

  createNewUser = () => {
    const validateAdmin = {
      headers: {
        Authorization: "ricardo-ramos-muyembe"
      }
    };

    const bodyState = {
      name: this.state.name,
      email: this.state.email
    };

    axios
      .post (
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        bodyState,
        validateAdmin
      )

      .then(() => {
        alert(`Feito! Usuário ${this.state.name} foi criado!`)
      })

      .catch((error) => {
        alert("Houve um erro na criação de novo usuário!")
        console.log(error)
      });

  };

  render() {
      return (
        <>
          <input
            placeholder = "Digite o seu nome"
            type = "text"
            value = { this.state.name }
            onChange = { this.newUsername }
          />

          <input
            placeholder = "Digite o seu e-mail"
            type = "email"
            value = { this.state.email }
            onChange = { this.newEmail }
          />
          <button onClick={this.createNewUser}> Adicionar novo usuário </button>
        </>
      );
  };
};

export default AddNewUser;