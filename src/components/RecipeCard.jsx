

const RecipeCard = (props) => {
  let favorites=props.favorites;
  let setFavorites=props.setFavorites;
  function handleClick() {
    if(!favorites.includes(props.id)){
      setFavorites([...favorites,props.id]);
    }else{
      setFavorites(favorites.filter((id)=>id!==props.id));
    }
  }
  return (
    <div className="flex flex-col gap-5
    shadow-md shadow-emerald-800
    hover:shadow-2xl hover:shadow-emerald-500/30
    transition-all duration-300 ease-in-out
    border border-emerald-800 rounded-xl p-10">
      <h3 className="text-xl">{props.name}</h3>
      <img src={props.image} alt="image" />
      <div className="flex gap-4 justify-between text-gray-400">
        <p>⏱️{props.time} min</p>
        <p>👨🏻‍🍳{props.level}</p>
        <p>⭐{props.rating}</p>
      </div>
      <button className="text-xl text-gray-300 bg-emerald-900 p-3 rounded-3xl" 
      onClick={handleClick}>
        {favorites.includes(props.id)?"Remove from favorites":"Add to favorites"}
      </button>
    </div>
  )
}

export default RecipeCard
