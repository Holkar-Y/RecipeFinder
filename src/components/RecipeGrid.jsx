import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard"

const RecipeGrid = ({search, favorites, setFavorites, recipe, setRecipe}) => {
  const [load, setLoad]=useState(true);
  const [error, setError]=useState("");

  const filteredRecipes= recipe.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase()) || 
    item.ingredients.some((ingredient)=>ingredient.toLowerCase().includes(search.toLowerCase()) )
  );

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
    <section className="p-10">
      <h2 className="bg-emerald-950 p-6 text-2xl font-medium">Trending Recipes</h2>

      <div>
        <select>
          <option value="">Sort by rating</option>
          <option value="">Sort by time</option>
          <option value="">Sort by ingredients</option>
        </select>
      </div>

      <div className="bg-emerald-950 grid grid-cols-1 md:grid-cols-4 gap-10 py-2 px-6">

        {load? "Loading recipes...": 
         error? error:
         filteredRecipes.length===0? "No recipes found. Try another search.":
         filteredRecipes.map((item)=>(
          <RecipeCard key={item.id} id={item.id} name={item.name} time={item.prepTimeMinutes + item.cookTimeMinutes} image={item.image} level={item.difficulty} rating={item.rating} favorites={favorites} setFavorites={setFavorites}/>
        ))}
      </div>
    </section>
  )
}

export default RecipeGrid
