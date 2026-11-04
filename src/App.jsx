import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import RecipeGrid from './components/RecipeGrid'
import { useEffect, useState } from 'react'
import Favorites from './components/Favorites'
import RecipeDetails from './components/RecipeDetails'
import Auth from '../pages/Auth'
import Profile from '../pages/Profile'

function App() {
  const [search,setSearch]=useState("");
  const [recipe, setRecipe]=useState([]);
  const [sortBy, setSortBy]=useState("default");

  const[currentUser, setCurrentUser]=useState(()=>{
    const savedUser=localStorage.getItem("currentUser");
    return savedUser? JSON.parse(savedUser):null;
  });

  const[favorites,setFavorites]=useState([]);
  const[favoritesUserId, setFavoritesUserId]=useState(null);

  useEffect(()=>{
    if(currentUser){
      const key=`favorites_${currentUser.id}`;
      const savedFavorites=localStorage.getItem(key);

      setFavorites(savedFavorites?JSON.parse(savedFavorites):[]);
      setFavoritesUserId(currentUser.id);
    }else{
      setFavorites([]);
      setFavoritesUserId(null);
    }
  },[currentUser]);

  useEffect(()=>{
    if(currentUser && favoritesUserId===currentUser.id){
      const key=`favorites_${currentUser.id}`;
      localStorage.setItem(key,JSON.stringify(favorites));
    }
  },[favorites,currentUser,favoritesUserId])

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <BrowserRouter>
      <Navbar favorites={favorites} recipe={recipe} currentUser={currentUser} setCurrentUser={setCurrentUser} setFavorites={setFavorites}/>

      <Routes>
        <Route 
          path='/'
          element={
            <>
              <HeroSection search={search} setSearch={setSearch} />
              <RecipeGrid search={search} favorites={favorites} setFavorites={setFavorites} recipe={recipe} setRecipe={setRecipe} sortBy={sortBy} setSortBy={setSortBy} currentUser={currentUser}/>
            </>
          }
        />
        <Route 
          path='/favorites'
          element={currentUser?
            <Favorites recipe={recipe} favorites={favorites} setFavorites={setFavorites} currentUser={currentUser}/>:
            <Navigate to='/login' replace/>
          }
        />
        <Route
          path="/recipes/:id"
          element={
            <RecipeDetails recipe={recipe} />
          }
        />
        <Route
          path='/login'
          element={<Auth currentUser={currentUser} setCurrentUser={setCurrentUser}/>} 
        />
        <Route
          path='/profile'
          element={currentUser?<Profile currentUser={currentUser} favorites={favorites} />:
          <Navigate to="/login" replace/>}
        />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


//useParams()-React Router used to read the recipe ID(1) from /recipes/1 on the details page