import heroSection from '../assets/heroSection.png'

const HeroSection = ({search, setSearch}) => {
  return (
    <section
      className='w-full bg-center bg-cover h-80 sm:h-96 relative'
      style={{backgroundImage: `url(${heroSection})`}}
    >
      <div className='absolute inset-0 z-10 bg-black/20'>
        <div className="h-full flex flex-col justify-center items-center gap-4 sm:gap-7 px-4">

          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center'>
            Find something good to cook
          </h1>

          <p className='text-base sm:text-lg md:text-xl text-gray-300 text-center'>
            Discover your next favourite meal.
          </p>

          <input
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            type="text"
            placeholder='Search recipes by name...'
            className='w-full max-w-xl text-emerald-950 bg-emerald-50 rounded-full px-5 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-600'
          />

        </div>
      </div>
    </section>
  )
}

export default HeroSection
