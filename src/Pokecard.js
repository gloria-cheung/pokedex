
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
    <div>
      <h1>{name}</h1>
      <img src={formatURL(id)}/>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
}