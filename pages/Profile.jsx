import { useNavigate } from "react-router"

const Profile = ({currentUser, favorites}) => {
    const navigate=useNavigate();
  return (
    <div className='bg-emerald-950 m-5 p-10 flex flex-col gap-15 justify-center'>
        <div className="flex gap-6 justify-center items-center border-emerald-600 border-2 p-10 rounded-3xl">
            <div>
                <p className="text-6xl bg-emerald-800 p-5 rounded-b-full">{currentUser.name.charAt(0).toUpperCase()}</p>
            </div>
            <div>
                <h1 className="text-4xl">{currentUser.name}</h1>
                <p>RecipeFinder Member</p>
            </div>
        </div>
        <div className="border-emerald-600 border-2 p-10 rounded-3xl">
            <h2 className="text-2xl">Personal Information</h2>
            <p>Name: {currentUser.name}</p>
            <p>Email: {currentUser.email}</p>
        </div>
        <div className="flex flex-col gap-3 border-emerald-600 border-2 p-10 rounded-3xl">
            <h2 className="text-2xl">Favorites Recipes</h2>
            <p>Your total saved recipes: {favorites.length}</p>
            <button className="p-3 bg-emerald-900 rounded-3xl" onClick={()=>navigate('/favorites')}>Explore Favorites</button>
        </div>
    </div>
  )
}

export default Profile
