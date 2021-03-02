import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../../constants/BASE_URL/BASE_URL';
import ProfileCard from '../ProfileCard/ProfileCard'
import ShowMatchList from '../ShowMatchList/ShowMatchList'

const Header = () => {

  const [pageOnScreen, setPageOnScreen] = useState("ProfileCard")

  const switchPages = () => {
    if(pageOnScreen === "ProfileCard") {
      setPageOnScreen("ShowMatchList")
    } else {
      setPageOnScreen("ProfileCard")
    }
  };

  const clearMatchList = () => {
    axios.put(`${BASE_URL}/clear`)

    .then(() => {
      window.confirm("Deseja mesmo limpar a lista de matches?")
    })

    .catch((err) => {
      console.log(err)
    })
  };

  return (
    <div>
      <button onClick={switchPages}> Ver matches </button>
      <button onClick={() => clearMatchList()}> Resetar matches </button>
      {pageOnScreen === "Home" ? (
        <div>
          <ProfileCard />
        </div>
      ) : (
        <ShowMatchList />
      )}
    </div>
  );
};

export default Header;