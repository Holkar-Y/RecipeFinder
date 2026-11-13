import React from 'react'
import RecipeCard from './RecipeCard'
import { useNavigate } from 'react-router'

const Favorites = ({recipe, favorites, setFavorites, currentUser}) => {
  const navigate=useNavigate();
return (
  <div className="page-container py-10 sm:py-12">

    {favorites.length === 0 ? (
      <div className="surface-card flex min-h-[60vh] flex-col justify-center items-center gap-6 rounded-2xl p-6 text-center">

        <p className="text-5xl">🍽️</p>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#183D32]">
          Your favourites are waiting!
        </h1>

        <p className="muted-text max-w-md">
          You haven't saved any recipes yet. Explore delicious recipes and save the ones you love.
        </p>

        <button
          onClick={() => navigate('/')}
          className="btn-primary px-6 py-3"
        >
          Explore Recipes
        </button>

      </div>
    ) : (
      <>
        <div className="mb-8">
          <p className="eyebrow mb-2">Your personal collection</p>
          <h1 className="section-heading">My Favorites</h1>
          <p className="muted-text mt-2">
            All the recipes you love, in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipe
            .filter((item) => favorites.includes(item.id))
            .map((item) => (
              <RecipeCard
                key={item.id}
                id={item.id}
                name={item.name}
                time={item.prepTimeMinutes + item.cookTimeMinutes}
                image={item.image}
                level={item.difficulty}
                rating={item.rating}
                favorites={favorites}
                setFavorites={setFavorites}
                currentUser={currentUser}
              />
            ))}
        </div>
      </>
    )}
  </div>
)
}

export default Favorites

