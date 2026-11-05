import { useParams } from "react-router"

const RecipeDetails = ({recipe}) => {
    const {id}=useParams();
    console.log(id);

    const selectedRecipe=recipe.find((item)=>
    item.id===Number(id));

  return (
    <div className="bg-emerald-950 m-3 sm:m-5 p-4 sm:p-5 md:p-8 rounded-xl">
        {selectedRecipe?(
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

                <div className="flex justify-center items-center">
                    <img  src={selectedRecipe.image} alt="image" className="w-full max-w-md aspect-square object-cover rounded-xl"/>
                </div>

                <div className="flex flex-col justify-center gap-3 min-w-0">

                    <h1 className="ffont-bold text-3xl md:text-4xl text-amber-700 font-serif">{selectedRecipe.name}</h1>

                    <p>It is {selectedRecipe.cuisine} cusinie</p>

                    <p>Rating: {selectedRecipe.rating}</p>

                    <div className="flex flex-wrap justify-between gap-4 px-2 sm:px-5 mt-3">
                        <p>Calories<br/>{selectedRecipe.caloriesPerServing} KCal</p>
                        <p>Level<br/> {selectedRecipe.difficulty}</p>
                        <p>Time<br/> {selectedRecipe.prepTimeMinutes + selectedRecipe.cookTimeMinutes} min</p>
                    </div>
                    
                </div>

                <div className="min-w-0">
                    <h3 className="text-2xl text-amber-500 mb-5">Ingredients: </h3>
                    <ul className="list-disc list-inside space-y-2">
                        {selectedRecipe.ingredients.map((ingredient,index)=>(
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>

                <div className="min-w-0">
                    <h3 className="text-2xl text-amber-500 mb-5">Instructions: </h3>
                    <ol className="list-decimal list-inside space-y-4 text-gray-200">
                        {selectedRecipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                </div>
            </div>
        ):(
            <p>Loading recipe...</p>
        )}
    </div>
  )
}

export default RecipeDetails
