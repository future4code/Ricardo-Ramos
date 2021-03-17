import React, { useEffect } from 'react';
import axios from 'axios';
import useInput from '../../hooks/useInput';
import { BASE_URL } from '../../constants/Requests';
import { useHistory } from 'react-router-dom';
import { goToAdminHome } from '../../routes/Coordinator';

export default function AdminAuth() {
  const history = useHistory();
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmit = () => {
    const body = {
      email, password
    }

    axios.post(`${BASE_URL}/login`, body)

    .then((res) => {
      window.localStorage.setItem("token", res.data.token)
      goToAdminHome(history)
    })

    .catch((err) => {
      console.log(err)
    })

  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token) {
      goToAdminHome(history)
    }
  }, [history])

  return (
    <>
      <input
        placeholder="email"
        value={email}
        onChange={onChangeEmail}
      />

      <input
        type={"password"}
        placeholder="senha"
        value={password}
        onChange={onChangePassword}
      />
      
      <button onClick={onSubmit}> Login </button>
    </>
  );
};