import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard"

const RecipeGrid = ({search, favorites, setFavorites, recipe, setRecipe, sortBy, setSortBy, currentUser}) => {
  const [load, setLoad]=useState(true);
  const [error, setError]=useState("");
  const [difficulty, setDifficulty]=useState("all");

  const filteredRecipes= recipe.filter((item)=>{
    const matchesSearch=
    item.name.toLowerCase().includes(search.toLowerCase()) || 
    item.ingredients.some((ingredient)=>ingredient.toLowerCase().includes(search.toLowerCase()))

    const matchesDifficulty= difficulty==="all"||
    item.difficulty===difficulty;

    return matchesSearch && matchesDifficulty;
  });

  const sortedRecipes= [...filteredRecipes];
  if(sortBy==="rating"){
    sortedRecipes.sort((a,b)=>b.rating-a.rating)
  }else if(sortBy==="time"){
    sortedRecipes.sort((a,b)=> (a.prepTimeMinutes + a.cookTimeMinutes)-(b.prepTimeMinutes + b.cookTimeMinutes))  
  }

  useEffect(()=>{
    async function fetchRecipe() {
      try {
        let response = await fetch("https://dummyjson.com/recipes");
        if(response.ok){
          let data= await response.json();
          setRecipe(data.recipes);
        }else{
          throw new Error("Failed to load recipes.")
        }
      } catch (error) {
        setError(error.message);
      } finally{
        setLoad(false);
      }
    }
    fetchRecipe();
  },[]);

  return (
    <section className="page-container">
      <div className="mb-8">
        <p className="eyebrow">
          Discover something delicious
        </p>

        <h2 className="section-heading">
          Trending Recipes
        </h2>

        <p className="muted-text mt-2">
          Explore recipes people are loving right now.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-6">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full sm:w-auto p-3 rounded-full border border-[#E8E5DC] bg-white text-[#252B28] outline-none"
        >
          <option value="default">Default</option>
          <option value="rating">Highest Rating</option>
          <option value="time">Shortest Cooking Time</option>
        </select>

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="w-full sm:w-auto p-3 rounded-full border border-[#E8E5DC] bg-white text-[#252B28] outline-none"
        >
          <option value="all">All difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {load ? (
          <div className="col-span-full flex min-h-72 flex-col items-center justify-center gap-4">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#DCE8D8] border-t-[#183D32]" />
              <p className="text-sm font-medium text-[#777D76]">Preparing something delicious...</p>
          </div>
        ) : 
        error? (
          <div className="col-span-full flex min-h-72 flex-col items-center justify-center gap-3 rounded-2xl border border-[#E8E5DC] bg-white p-6 text-center">
            <span className="text-4xl">🍽️</span>
            <h3 className="font-serif text-xl font-bold text-[#183D32]">Oops! Something went wrong.</h3>
            <p className="text-sm text-[#777D76]">{error}</p>
          </div>
        ) : 
        sortedRecipes.length === 0 ? (
          <div className="col-span-full flex min-h-72 flex-col items-center justify-center gap-3 rounded-2xl border border-[#E8E5DC] bg-white p-6 text-center">
            <span className="text-4xl">🔍</span>
            <h3 className="font-serif text-xl font-bold text-[#183D32]">
              No recipes found
            </h3>
            <p className="max-w-sm text-sm text-[#777D76]">
              We couldn't find any recipes matching your search. Try a different keyword or difficulty.
            </p>
          </div>
        ) : 
        (sortedRecipes.map((item) => (
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
          ))
        )}
      </div>
    </section>
  )
}

export default RecipeGrid
