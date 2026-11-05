import { Link, useNavigate } from "react-router";

const RecipeCard = (props) => {
  let favorites=props.favorites;
  let setFavorites=props.setFavorites;
  const navigate=useNavigate();

  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();

    if(!props.currentUser){
      navigate('/login');
      return;
    }
    
    if(!favorites.includes(props.id)){
      setFavorites([...favorites,props.id]);
    }else{
      setFavorites(favorites.filter((id)=>id!==props.id));
    }
  }
  return (
    <Link to={`/recipes/${props.id}`} className="block h-full">
    <div className="h-full flex flex-col gap-4
    shadow-md shadow-emerald-800
    hover:shadow-2xl hover:shadow-emerald-500/30
    transition-all duration-300 ease-in-out
    border border-emerald-800 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8">
      <h3 className="text-lg md:text-xl font-medium min-h-12">{props.name}</h3>

      <img src={props.image} alt="image" className="w-full h-36 object-cover rounded-lg"/>

      <div className="flex flex-wrap gap-2 justify-between text-xs sm:text-sm text-gray-400 min-h-10">
        <p>⏱️{props.time} min</p>
        <p>👨🏻‍🍳{props.level}</p>
        <p>⭐{props.rating}</p>
      </div>

      <button className="mt-auto cursor-pointer text-base sm:text-lg text-gray-300 bg-emerald-900 p-3 rounded-3xl" onClick={handleClick}>
        {favorites.includes(props.id)?"Remove from favorites":"Add to favorites"}
      </button>

    </div>
    </Link>
  )
}

export default RecipeCard
