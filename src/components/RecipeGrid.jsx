import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard"

const RecipeGrid = ({search, favorites, setFavorites, recipe, setRecipe, sortBy, setSortBy}) => {
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
    <section className="p-10">
      <h2 className="bg-emerald-950 p-6 text-2xl font-medium">Trending Recipes</h2>

      <div className="bg-emerald-950 flex justify-between pb-5 px-20">
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} className="p-3 rounded-3xl border-2 border-emerald-700">

          <option value="default" className="text-zinc-600">Default</option>

          <option value="rating" className="text-zinc-600">Highest Rating</option>

          <option value="time" className="text-zinc-600">Shortest Cooking Time</option>          
        </select>

        <select value={difficulty} onChange={(e)=>setDifficulty(e.target.value)} className="p-3 rounded-3xl border-2 border-emerald-700">
          <option value="all" className="text-zinc-600">All difficulties</option>
          <option value="Easy" className="text-zinc-600">Easy</option>
          <option value="Medium" className="text-zinc-600">Medium</option>
          <option value="Hard" className="text-zinc-600">Hard</option>
        </select>
      </div>

      <div className="bg-emerald-950 grid grid-cols-1 md:grid-cols-4 gap-10 py-2 px-6">

        {load? "Loading recipes...": 
         error? error:
         sortedRecipes.length===0? "No recipes found. Try another search.":
         sortedRecipes.map((item)=>(
          <RecipeCard key={item.id} id={item.id} name={item.name} time={item.prepTimeMinutes + item.cookTimeMinutes} image={item.image} level={item.difficulty} rating={item.rating} favorites={favorites} setFavorites={setFavorites}/>
        ))}
      </div>
    </section>
  )
}

export default RecipeGrid
