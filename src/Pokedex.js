import Pokecard from './Pokecard';
import './Pokedex.css'

export default function Pokedex(props) {
  
  const pokemons = props.pokemonData.map(pokemon => {
    return <Pokecard {...pokemon} key={pokemon.id}/>;
  })
  return (
    <div className="Pokedex">
      <h1>Pokedex</h1>
      <p>Total Experience: {props.exp}</p>
      <p>{props.isWinner ? "WINNER!" : "LOSER"}</p>
      <div className="Pokedex-cards">
        {pokemons}
      </div>
    </div>
  );
}