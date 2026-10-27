import React from 'react'
import RecipeCard from './RecipeCard'
import { useNavigate } from 'react-router'

const Favorites = ({recipe, favorites, setFavorites}) => {
  const navigate=useNavigate();
  return (
    <div>
      {favorites.length===0?
        <div className='flex flex-col justify-center items-center min-h-screen gap-10'>
          <h1 className='text-3xl'>You haven't added any recipe to favorites yet!</h1>
          <button onClick={()=>navigate('/')} className='bg-emerald-800 p-4 rounded-4xl cursor-pointer text-xl shadow-md shadow-emerald-500 hover:shadow-2xs'>Explore now!</button>
        </div>
      :<div className='grid grid-cols-1 md:grid-cols-4 gap-10 p-10'>
        {recipe.filter((item)=>favorites.includes(item.id)).map((item)=>(
            <RecipeCard  key={item.id} id={item.id} name={item.name} time={item.prepTimeMinutes + item.cookTimeMinutes} image={item.image} level={item.difficulty} rating={item.rating} favorites={favorites} setFavorites={setFavorites}/>
        ))}
      </div>
      }
    </div>
  )
}

export default Favorites

