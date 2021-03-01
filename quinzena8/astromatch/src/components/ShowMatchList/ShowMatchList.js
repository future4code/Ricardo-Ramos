import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL/BASE_URL';

const ShowMatchList = () => {
  const [getMatches, setGetMatches] = useState([])

  const getMutualMatches = () => {
    axios.get(`${BASE_URL}/matches`)

    .then((res) => {
      setGetMatches(res.data.matches)
    })

    .catch(() => {
      alert("Erro ao baixar lista dos seus matches")
    })
  }

  useEffect(() => {
    if(getMutualMatches.length === 0) {
      getMutualMatches()
    } else {
      setGetMatches()
    }
  }, [getMutualMatches])

  const matchList = getMatches.map((match) => {
    return (
      <div>
        <img src={match.photo} alt="" />
        <p>{match.name}</p>
      </div>
    )
  })
  return (matchList);
};

export default ShowMatchList;