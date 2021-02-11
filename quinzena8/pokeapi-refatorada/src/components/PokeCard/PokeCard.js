import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/Constants"

const PokeCard = (props) => {

  const [pokemon, setPokemon] = useState({})

  // método que roda após a montagem do componente
  useEffect(() => {
    pegaPokemon(props.pokemon)
  }, [props.pokemon])

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  const pegaPokemon = pokeName => {
    axios
      .get(`${BASE_URL}/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        setPokemon(response.data);
      })
      .catch(() => {
        alert("Ih, deu ruim! :( Manda e-mail avisando que a gente arruma!");
      });
  };

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}

export default PokeCard;