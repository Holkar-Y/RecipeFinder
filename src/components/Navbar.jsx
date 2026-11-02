import React from 'react'
import { NavLink, useNavigate } from 'react-router'

const Navbar = ({recipe, favorites,currentUser,setCurrentUser, setFavorites}) => {

  const navigate=useNavigate();
  
  function handleLogout(){
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setFavorites([]);
    navigate("/");
  }

  return (
    <nav className="bg-emerald-950 flex items-center p-3 text-white">
      <h3 className="text-2xl flex-1">RecipeFinder</h3>

      <section className="flex gap-4 text-xl ">
        <NavLink className="hover:text-amber-600" to="/">Home</NavLink>

        <NavLink to="/favorites" className="hover:text-amber-600">
          Favorites
        </NavLink>

        <NavLink to="/profile" className="hover:text-amber-600">Profile</NavLink>

        
          {currentUser?( 
          <button 
            onClick={handleLogout}
            className="hover:text-amber-600">
              Logout
          </button>
          ):(
          <NavLink to="/login" className="hover:text-amber-600">
            Login
          </NavLink>
          )}
        

      </section>
    </nav>
  )
}

export default Navbar
