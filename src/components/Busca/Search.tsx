function Search() {
  return (
    <div className="font-gilroy-medium
    lg:bg-white/30 lg:backdrop-blur-lg lg:items-center lg:rounded-2xl
    sm:w-full sm:p-4 sm:mt-8 
    lg:flex lg:w-full lg:h-14 lg:gap-40 lg:px-4 lg:justify-between ">

      <div className="text-white gap-3 flex 
      sm:flex sm:items-center sm:w-full sm:h-10 sm:bg-white/30 sm:backdrop-blur-lg sm:rounded-full 
      lg:bg-transparent lg:backdrop-blur-none lg:rounded-2xl lg:w-full">
        <img className="w-[24px] h-[24px]
        sm:ml-4 lg:ml-0" src="/assets/icon-search.svg" alt="" />
        <input className="border-none bg-transparent outline-none sm:ml-2 lg:ml-4 placeholder-white/70 sm:w-[75%] lg:w-full
        " type="search" placeholder="Pesquise os lugares e hotéis" />

      </div>

      <div className="gap-4 sm:dates-container sm:grid-cols-3 sm:mt-4 sm:h-10 sm:bg-white/30 sm:backdrop-blur-lg sm:rounded-full 
      lg:bg-transparent lg:backdrop-blur-none lg:rounded-2xl lg:w-full
      lg:flex lg:mt-0">
        <div className="text-white
        sm:gap-3 sm:grid sm:grid-cols-1
        lg:flex lg:gap-12">
          <div className="flex justify-center items-center 
          sm:m-2 lg:m-0 sm:gap-2 lg:gap-0">
            <img className="lg:mr-3 lg:w-7" src="./assets/calendar.svg" alt="" />
            <input className="border-none bg-transparent" type="date" name="Check in" id="" />

            <img className="lg:ml-10 lg:mr-3 lg:w-7" src="./assets/calendar.svg" alt="" />
            <input className="border-none bg-transparent outline-none appearance-none " type="date" name="Check out" id="" />
          </div>

          <div className="
          flex justify-center items-center
          sm:w-full sm:h-10 sm:bg-white/30 sm:backdrop-blur-lg sm:gap-12 sm:rounded-full 
          lg:bg-transparent lg:backdrop-blur-none lg:rounded-2xl lg:w-full
          lg:flex lg:w-42 lg:gap-7">
            <img className="sm:ml-4 sm:w-[7%] lg:ml-0 lg:w-[11%]" src="/assets/person.svg" alt="" />
            <p className="sm:w-full lg:w-[200px]">1 quarto, 2 adultos</p>
          </div>
        </div>

        <button className="bg-white text-[#2659C3] font-gilroy-bold rounded-[32px]
      sm:w-full sm:h-12 sm:mt-4
      lg:w-[180px] lg:mt-0 lg:h-10 
      hover:bg-[#1f2d49] hover:text-gray-200 focus:outline-none focus:ring focus:ring-[#98b9ff]">
          Pesquisar
        </button>

      </div>
    </div >
  )
}

export default Search