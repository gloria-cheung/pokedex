import Pokecard from './Pokecard';
import './Pokedex.css'

export default function Pokedex(props) {
  const pokemons = props.pokemonData.map(pokemon => {
    return <Pokecard {...pokemon} key={pokemon.id}/>;
  });

  let title;
  if (props.isWinner) {
    title = <h2 className="Pokedex-winner">Winning Hand</h2>;
  } else {
    title = <h2 className="Pokedex-loser">Losing Hand</h2>;
  }

  return (
    <div className="Pokedex">
      {title}
      <h4>Total Experience: {props.exp}</h4>
      <div className="Pokedex-cards">
        {pokemons}
      </div>
    </div>
  );
}