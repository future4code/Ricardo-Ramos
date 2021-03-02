import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL/BASE_URL';

const ProfileCard = () => {

  const [currentProfile, setCurrentProfile] = useState({});

  const getProfileData = () => {
    axios.get(`${BASE_URL}/person`)

    .then ((res) => {
      setCurrentProfile(res.data.profile)
    })

    .catch(() => {
      alert("Erro ao carregar os dados do perfil")
    })
  };

  useEffect(() => {
    getProfileData()
  }, []);

  const chooseCurrentProfile = (id) => {
    const body = {
      id: currentProfile.id,
      choice: id
    };

    axios.post(`${BASE_URL}/choose-person`, body)

    .then((res) => {
      getProfileData()
      if(res.data.isMatch === true) {
        alert("Rolou um match!")
      }
    })

    .catch((err) => {
      console.log(err)
    })
  };

  return (
    <main>
      {currentProfile &&
        <section>
          <img src={currentProfile.photo} alt="" />
          <h2> { currentProfile.name }, { currentProfile.age } </h2>
          <p> { currentProfile.bio } </p>
        </section>
      }

      <button onClick={() => chooseCurrentProfile(currentProfile.id, false)}> X </button>
      <button onClick={() => chooseCurrentProfile(currentProfile.id, true)}> ♥ </button>
    </main>
  );
};

export default ProfileCard;