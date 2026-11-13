import { useNavigate } from "react-router"

const Profile = ({currentUser, favorites}) => {
    const navigate=useNavigate();

    return (
    <div className="page-container py-10 sm:py-12">

        <div className="surface-card rounded-2xl p-5 sm:p-8 md:p-10 flex flex-col gap-8">

            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row gap-5 items-center border-b border-[#E8E5DC] pb-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#DCE8D8] text-4xl font-bold text-[#183D32]">
                {currentUser.name.charAt(0).toUpperCase()}
                </div>

                <div className="text-center sm:text-left">
                <p className="eyebrow mb-2">Your RecipeFinder account</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#252B28]">
                    {currentUser.name}
                </h1>
                <p className="muted-text mt-1">RecipeFinder Member</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="rounded-xl border border-[#E8E5DC] bg-[#F8F6F0] p-5 sm:p-6">
                    <h2 className="font-serif text-2xl font-bold text-[#183D32] mb-5">
                    Personal Information
                    </h2>

                    <div className="space-y-4">
                    <div>
                        <p className="text-sm text-[#777D76]">Full Name</p>
                        <p className="font-medium text-[#252B28]">{currentUser.name}</p>
                    </div>

                    <div>
                        <p className="text-sm text-[#777D76]">Email Address</p>
                        <p className="font-medium text-[#252B28] break-all">{currentUser.email}</p>
                    </div>
                    </div>
                </div>

                {/* Favorites Summary */}
                <div className="rounded-xl border border-[#E8E5DC] p-5 sm:p-6">
                    <p className="eyebrow mb-2">Your collection</p>

                    <h2 className="font-serif text-2xl font-bold text-[#183D32]">
                    Favorite Recipes
                    </h2>

                    <p className="text-3xl font-bold text-[#D97745] mt-3">
                    {favorites.length}
                    </p>

                    <p className="muted-text mt-1">Recipes saved by you</p>

                    <button
                    className="btn-primary px-6 py-3 mt-5"
                    onClick={() => navigate('/favorites')}
                    >
                    Explore Favorites
                    </button>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Profile
