import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'

const Navbar = ({recipe, favorites,currentUser,setCurrentUser, setFavorites}) => {

  const navigate=useNavigate();
  const[menuOpen,setMenuOpen]=useState(false);
  
  function handleLogout(){
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setFavorites([]);
    navigate("/");
    setMenuOpen(false);
  }

  function closeMenu(){
    setMenuOpen(false);
  }

  return (
    <nav className="bg-emerald-950 flex items-center p-3 text-white sticky top-0 z-50">
      <h3 className="text-2xl flex-1">RecipeFinder</h3>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-3xl px-3 cursor-pointer"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <section className={`
        ${menuOpen ? "flex" : "hidden"}
        md:flex
        flex-col md:flex-row
        gap-4 md:gap-4
        text-xl
        absolute md:static
        top-full right-0
        w-full md:w-auto
        bg-emerald-950
        p-5 md:p-0
        z-50
      `}>
        <NavLink className="hover:text-amber-600" to="/" onClick={closeMenu}>Home</NavLink>

        <NavLink onClick={closeMenu} to="/favorites" className="hover:text-amber-600">
          Favorites
        </NavLink>

        <NavLink onClick={closeMenu} to="/profile" className="hover:text-amber-600">Profile</NavLink>

        
          {currentUser?( 
          <button 
            onClick={handleLogout}
            className="hover:text-amber-600">
              Logout
          </button>
          ):(
          <NavLink onClick={closeMenu} to="/login" className="hover:text-amber-600">
            Login
          </NavLink>
          )}
        

      </section>
    </nav>
  )
}

export default Navbar
