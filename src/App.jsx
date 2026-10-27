import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import RecipeGrid from './components/RecipeGrid'
import { useEffect, useState } from 'react'
import Favorites from './components/Favorites'

function App() {
  const [search,setSearch]=useState("");
  const [recipe, setRecipe]=useState([]);

  const [favorites,setFavorites]=useState(()=>{
   const savedFavorites=localStorage.getItem("favorites");
   if(savedFavorites) return JSON.parse(savedFavorites);
   return []; 
  });

  useEffect(()=>{
    localStorage.setItem("favorites",JSON.stringify(favorites));
  },[favorites]);

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <BrowserRouter>
      <Navbar favorites={favorites} recipe={recipe}/>

      <Routes>
        <Route 
          path='/'
          element={
            <>
              <HeroSection search={search} setSearch={setSearch} />
              <RecipeGrid search={search} favorites={favorites} setFavorites={setFavorites} recipe={recipe} setRecipe={setRecipe}/>
            </>
          }
        />
        <Route 
          path='/favorites'
          element={
            <Favorites recipe={recipe} favorites={favorites} setFavorites={setFavorites} />
          }
        />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
