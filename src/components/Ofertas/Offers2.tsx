import ScrollContainer from "react-indiana-drag-scroll"

function Offers2() {
  return (
    <section className="mt-7">
      <ScrollContainer className="flex sm:gap-2 lg:gap-5">
        <div className="relative sm:m-2 lg:m-5 bg-white sm:w-[94%] sm:h-[480px] lg:min-w-[29.8%] lg:h-[535px] drop-shadow-xl rounded-3xl text-gray-500">
          <div className="">
            <img className="rounded-3xl sm:w-[280px] sm:h-[200px] lg:w-[450px] lg:h-[254px] sm:m-[17px] lg:m-[24px]" src=" /assets/image2.jpg" alt="" />

            <div className="flex-col sm:w-[300px] lg:w-[88%] sm:m-5 lg:m-7">
              <div className="cursor-default">
                <span>Voo doméstico</span>
                <h2 className="text-2xl text-black font-bold mt-4">Conheça Rivendell,</h2>
                <p className="sm:text-sm lg:text-base">Situa-se a norte do continente da Terra Média, próximo das Montanhas Nebulosas.</p>
              </div>
              <button className="rounded-[32px] font-gilroy-bold mt-8 text-white p-3 text-center sm:w-[91%] lg:w-full text-md bg-blue-700 hover:bg-blue-900" >Reservar</button>
            </div>
          </div>
        </div>

        <div className="relative sm:m-2 lg:m-5 bg-white sm:w-[94%] sm:h-[480px] lg:min-w-[29.8%] lg:h-[535px] drop-shadow-xl rounded-3xl text-gray-500">
          <div className="">
            <img className="rounded-3xl sm:w-[280px] sm:h-[200px] lg:w-[450px] lg:h-[254px] sm:m-[17px] lg:m-[24px]" src=" /assets/image6.jpg" alt="" />

            <div className="flex-col sm:w-[300px] lg:w-[88%] sm:m-5 lg:m-7">
              <div className="cursor-default">
                <span>Voo doméstico</span>
                <h2 className="text-2xl text-black font-bold mt-4">Conheça Minas Tirith,</h2>
                <p className="sm:text-sm lg:text-base">O castelo que tornou-se a capital de Gondor na segunda metade da Terceira Era da Terra-Média.</p>
              </div>
              <button className="rounded-[32px] font-gilroy-bold mt-8 text-white p-3 text-center w-full text-md bg-blue-700 hover:bg-blue-900" >Reservar</button>
            </div>
          </div>
        </div>

        <div className="relative sm:m-2 lg:m-5 bg-white sm:w-[94%] sm:h-[480px] lg:min-w-[29.8%] lg:h-[535px] drop-shadow-xl rounded-3xl text-gray-500">
          <div className="">
            <img className="rounded-3xl sm:w-[280px] sm:h-[200px] lg:w-[450px] lg:h-[254px] sm:m-[17px] lg:m-[24px]" src=" /assets/image5.jpg" alt="" />

            <div className="flex-col sm:w-[300px] lg:w-[88%] sm:m-5 lg:m-7">
              <div className="cursor-default">
                <span>Voo doméstico</span>
                <h2 className="text-2xl text-black font-bold mt-4">Conheça a Society's Bridge,</h2>
                <p className="sm:text-sm lg:text-base">A famosa ponte por onde diversas Sociedades começaram seus trajetos.</p>
              </div>
              <button className="rounded-[32px] font-gilroy-bold mt-8 text-white p-3 text-center w-full text-md bg-blue-700 hover:bg-blue-900" >Reservar</button>
            </div>
          </div>
        </div>

        <div className="relative sm:m-2 lg:m-5 bg-white sm:w-[94%] sm:h-[480px] lg:min-w-[29.8%] lg:h-[535px] drop-shadow-xl rounded-3xl text-gray-500">
          <div className="">
            <img className="rounded-3xl sm:w-[280px] sm:h-[200px] lg:w-[450px] lg:h-[254px] sm:m-[17px] lg:m-[24px]" src=" /assets/image7.jpg" alt="" />

            <div className="flex-col sm:w-[300px] lg:w-[88%] sm:m-5 lg:m-7">
              <div className="cursor-default">
                <span>Voo doméstico</span>
                <h2 className="text-2xl text-black font-bold sm:m=0 lg:mt-4">Conheça Smaug's Mountain,</h2>
                <p className="sm:text-sm lg:text-base">A Montanha Solitária, ou Erebor, fica a leste da Floresta das Trevas e a oeste das Colinas de Ferro.</p>
              </div>
              <button className="rounded-[32px] font-gilroy-bold mt-8 text-white p-3 text-center w-full text-md bg-blue-700 hover:bg-blue-900" >Reservar</button>
            </div>
          </div>
        </div>

        <div className="relative sm:m-2 lg:m-5 bg-white sm:w-[94%] sm:h-[480px] lg:min-w-[29.8%] lg:h-[535px] drop-shadow-xl rounded-3xl text-gray-500">
          <div className="">
            <img className="rounded-3xl sm:w-[280px] sm:h-[200px] lg:w-[450px] lg:h-[254px] sm:m-[17px] lg:m-[24px]" src=" /assets/image1.jpg" alt="" />

            <div className="flex-col sm:w-[300px] lg:w-[88%] sm:m-5 lg:m-7">
              <div className="cursor-default">
                <span>Voo doméstico</span>
                <h2 className="text-2xl text-black font-bold mt-4">Conheça Iron Bay,</h2>
                <p className="sm:text-sm lg:text-base">A enorme travessa onde residem as estatuas dos nossos grandes guerreiros ancestrais.</p>
              </div>
              <button className="rounded-[32px] font-gilroy-bold mt-8 text-white p-3 text-center w-full text-md bg-blue-700 hover:bg-blue-900" >Reservar</button>
            </div>
          </div>
        </div>

      </ScrollContainer >
    </section>
  )
}

export default Offers2