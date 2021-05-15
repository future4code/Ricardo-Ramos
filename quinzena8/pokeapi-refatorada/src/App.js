import React, { useState, useEffect } from "react";
// import "./styles.css";
import AppMain from "./Styled"
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import { BASE_URL } from "./constants/Constants"

function App() {

  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  // método que roda após a montagem do componente
  useEffect(() => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get(`${BASE_URL}/?limit=151`)
      .then((response) => {
        // função que está setando no estado os 151 pokemons
        setPokeList(response.data.results);
      })
      .catch(() => {
        alert("Ih, deu ruim! :( Manda e-mail avisando que a gente arruma!");
      })
    },
    []
  )

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  return (
    <AppMain>
      {/* evento onChange chama função toda vez que o usuário 
      escolhe um novo pokemon no dropdown */}
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {/* renderizando a lista de pokemons como opções do select */}
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {/* expressão booleana que renderiza o componente PokeCard,
      caso o valor de pokeName, no estado, seja true */}
      {pokeName && <PokeCard pokemon={pokeName} />}
    </AppMain>
  );
}

export default App;