import './Pokecard.css'


export default function Pokecard(props) {
  const {id, name, type, base_experience} = props;
  const formatURL = (id) => {
    if (id < 10) {
      id = "00" + id;
    } else if (id >= 10 && id <100) {
      id = "0" + id;
    }
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
  }
  return (
    <div className="Pokecard">
      <h2 className="Pokecard-title">{name}</h2>
      <img src={formatURL(id)} alt={name}/>
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">EXP: {base_experience}</div> 
    </div>
  );
}