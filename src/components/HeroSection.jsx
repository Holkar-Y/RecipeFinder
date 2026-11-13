
import heroSection from "../assets/heroSection.png";

const HeroSection = ({ search, setSearch }) => {
  return (
    <section
      className="relative flex h-105 sm:h-120 items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroSection})` }}
    >
      {/* Image Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-emerald-950/85 via-emerald-950/55 to-emerald-950/20" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-5 py-16 text-center animate-in fade-in duration-700 sm:gap-7">

        <p className="text-sm font-bold uppercase tracking-[3px] text-[#F0B18E]">
          Good food, good mood
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Find your next
          <span className="block italic text-[#F0B18E]">
            favourite recipe.
          </span>
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          Discover delicious recipes, explore new flavours
          and make every meal special.
        </p>

        {/* Search Bar */}
        <div className="mt-2 flex w-full max-w-2xl items-center rounded-full border border-white/50 bg-white p-2 shadow-xl">

          <span className="pl-3 text-xl text-[#777D76]">
            🔍
          </span>

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search recipes by name or ingredient..."
            aria-label="Search recipes by name or ingredient"
            className="hero-search-input min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-[#252B28] outline-none placeholder:text-[#999D97] sm:text-base"
          />

          <span className="hidden cursor-pointer rounded-full bg-[#183D32] px-5 py-3 text-sm font-semibold text-white sm:inline-block">
            Explore
          </span>

        </div>

        <p className="text-xs text-white/75 sm:text-sm">
          Find inspiration for your next delicious meal.
        </p>

      </div>
    </section>
  );
};

export default HeroSection;
