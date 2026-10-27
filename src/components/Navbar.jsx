import React from 'react'
import { NavLink } from 'react-router'

const Navbar = ({recipe, favorites}) => {
  return (
    <nav className="bg-emerald-950 flex items-center p-3 text-white">
      <h3 className="text-2xl flex-1">RecipeFinder</h3>

      <section className="flex gap-4 text-xl ">
        <NavLink className="hover:text-amber-600" to="/">Home</NavLink>

        <NavLink to="/favorites" className="hover:text-amber-600">
          Favorites
        </NavLink>

        <NavLink to="/profile" className="hover:text-amber-600">Profile</NavLink>

      </section>
    </nav>
  )
}

export default Navbar
