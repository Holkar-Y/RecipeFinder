
import { Link, useNavigate } from "react-router";

const RecipeCard = (props) => {
  const favorites = props.favorites;
  const setFavorites = props.setFavorites;
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();

    if (!props.currentUser) {
      navigate("/login");
      return;
    }

    if (!favorites.includes(props.id)) {
      setFavorites([...favorites, props.id]);
    } else {
      setFavorites(favorites.filter((id) => id !== props.id));
    }
  }

  return (
    <div className="surface-card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1">

      {/* Recipe Image */}
      <Link to={`/recipes/${props.id}`} className="block overflow-hidden">
        <img
          src={props.image}
          alt={props.name}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Recipe Information */}
      <div className="flex flex-1 flex-col gap-4 p-5">

        <Link to={`/recipes/${props.id}`}>
          <h3 className="text-xl font-semibold text-[#252B28] transition-colors hover:text-[#D97745]">
            {props.name}
          </h3>
        </Link>

        {/* Recipe Details */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-[#777D76]">

          <p>⏱️ {props.time} min</p>

          <p className="rounded-full bg-[#DCE8D8] px-3 py-1 text-[#183D32]">
            {props.level}
          </p>

          <p className="font-semibold text-[#D97745]">
            ⭐ {props.rating}
          </p>

        </div>

        {/* Favorite Button */}
        <button
          className={`btn-primary mt-auto w-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
            favorites.includes(props.id)
              ? "bg-[#D97745] border-[#D97745]"
              : ""
          }`}
          onClick={handleClick}
        >
          {favorites.includes(props.id)
            ? "♥ Remove from favorites"
            : "♡ Add to favorites"}
        </button>

      </div>
    </div>
  );
};

export default RecipeCard;
