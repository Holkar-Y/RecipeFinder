import { useParams } from "react-router"

const RecipeDetails = ({recipe}) => {
    const {id}=useParams();

    const selectedRecipe=recipe.find((item)=>
    item.id===Number(id));

  return (
    <div className="page-container py-8 sm:py-10">
        {selectedRecipe?(
            <div className="surface-card rounded-2xl p-5 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                <div className="flex justify-center items-center">
                    <img  src={selectedRecipe.image} alt={selectedRecipe.name} className="w-full max-w-md aspect-square object-cover rounded-2xl"/>
                </div>

                <div className="flex flex-col justify-center gap-3 min-w-0">

                    <h1 className="font-bold text-3xl md:text-4xl text-[#252B28] font-serif">{selectedRecipe.name}</h1>

                    <p>It is {selectedRecipe.cuisine} cuisine</p>

                    <p>Rating: {selectedRecipe.rating}</p>

                    <div className="grid grid-cols-3 gap-3 mt-5">

                    <div className="rounded-xl border border-[#E8E5DC] bg-[#F8F6F0] p-3">
                        <p className="text-xs text-[#777D76] sm:text-sm">Calories</p>
                        <p className="mt-1 font-semibold text-[#183D32]">
                        {selectedRecipe.caloriesPerServing} Kcal
                        </p>
                    </div>

                    <div className="rounded-xl border border-[#E8E5DC] bg-[#F8F6F0] p-3">
                        <p className="text-xs text-[#777D76] sm:text-sm">Difficulty</p>
                        <p className="mt-1 font-semibold text-[#183D32]">
                        {selectedRecipe.difficulty}
                        </p>
                    </div>

                    <div className="rounded-xl border border-[#E8E5DC] bg-[#F8F6F0] p-3">
                        <p className="text-xs text-[#777D76] sm:text-sm">Total Time</p>
                        <p className="mt-1 font-semibold text-[#183D32]">
                        {selectedRecipe.prepTimeMinutes + selectedRecipe.cookTimeMinutes} min
                        </p>
                    </div>

                    </div>
                    
                </div>

                <div className="min-w-0">
                    <p className="eyebrow mb-2">What you'll need</p>

                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#183D32] mb-5">
                        Ingredients
                    </h2>

                    <ul className="space-y-3">
                        {selectedRecipe.ingredients.map((ingredient, index) => (
                        <li
                            key={index}
                            className="flex items-start gap-3 text-[#252B28]"
                        >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D97745]" />
                            {ingredient}
                        </li>
                        ))}
                    </ul>
                </div>

                <div className="min-w-0">
                <p className="eyebrow mb-2">Let's get cooking</p>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#183D32] mb-5">
                    Instructions
                </h2>

                <ol className="space-y-4">
                    {selectedRecipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#DCE8D8] text-sm font-semibold text-[#183D32]">
                        {index + 1}
                        </span>

                        <p className="pt-1 leading-relaxed text-[#252B28]">
                        {instruction}
                        </p>
                    </li>
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
