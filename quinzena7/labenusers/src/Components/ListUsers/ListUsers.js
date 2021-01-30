import React from 'react';
import axios from 'axios';

const validateAdmin = {
  headers: {
    Authorization: "ricardo-ramos-muyembe"
  }
};

class ListUsers extends React.Component {
  state = {
      listUsers: [],
      renderPage: "listUsers",
      userId: "",
      name: ""
  };

  renderUserList = () => {
      axios
          .get (
              "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
              validateAdmin
          )

          .then (response => {
            this.setState ({ listUsers: response.data })
          });
  };

  componentDidMount = () => {
    this.renderUserList()
  }

  deleteUser = (userId) => {
    if (window.confirm("Deletar usuário?")) {
      axios
        .delete (
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
          validateAdmin
        )

        .then (() => {
          alert("Usuário deletado!");
          this.renderUserList();
        })

        .catch (e => {
          alert("Houve um erro ao deletar este usuário")
        });
    };
  };

  newUsername = (e) => {
    const usernameValue = e.target.value;
    this.setState ({ name: usernameValue })
  };

  render() {
      return (
        <>
          {this.state.renderPage === "listUsers" }
            <div>
              <ul>
                {this.state.listUsers.length === 0}
                {this.state.listUsers.map(user => {
                  return (
                    <li>
                      <span onClick={() => this.switchPages(user.id)}>
                        {user.name}
                      </span>
                      <button onClick={() => this.deleteUser(user.id)}> X </button>
                    </li>
                  );
                })}
              </ul>
            </div>
        </>
      );
  };
};

export default ListUsers