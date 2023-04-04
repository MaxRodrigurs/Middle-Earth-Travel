import Search from "./components/Busca/Search"
import Categories from "./components/Categorias/Categories"
import Gallery from "./components/Galeria/Gallery"
import Menu from "./components/Menu/Menu"
import Offers from "./components/Ofertas/Offers"
import Offers2 from "./components/Ofertas/Offers2"
import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"


function App() {

  return (
    <div className="bg-gray-50">
      <section className="bg-topbackground sm:p-5 lg:p-0 bg-no-repeat bg-cover lg:min-h-[840px] flex flex-col">
        <header className="lg:flex lg:justify-between lg:px-12 lg:py-6">
          <div className="sm:w-20">
            <a href="#!">
              <img src="/assets/logo.svg" alt="" />
            </a>
          </div>

          <Menu />
        </header>

        <section className="sm:w-full lg:min-w-[1100px] lg:mt-20 lg:px-28 lg:py-24">
          <div className="font-Ring text-white cursor-default 
          sm:text-center sm:h-32 sm:mt-24
          lg:text-left lg:w-[70%] lg:mt-10">
            <h1 className="sm:text-md lg:text-5xl">
              "O mundo não está em seus livros e mapas.
            </h1>
            <h2 className="sm:text-4xl lg:text-7xl" >Ele está lá fora."</h2>
          </div>

          <div className="lg:mt-16 lg:justify-between w-full">
            <Search />
          </div>

          <Categories />
        </section>

        <section className="lg:px-28 lg:py-24">
          <h1 className="sm:text-2xl sm:mt-7 lg:text-3xl lg:mt-0 text-white font-gilroy-bold cursor-default">Melhores Lugares</h1>
          <Gallery />
        </section>
      </section>

      <section className="offers sm:p-5 lg:p-0">
        <div className="lg:px-28 lg:py-24">
          <h1 className="font-gilroy-bold sm:text-2xl sm:mt-5 lg:text-3xl lg:mt-0 lg:pt-20 cursor-default">Ofertas</h1>
          <Offers />
        </div>

        <div className="sm:w-full sm:py-10 lg:px-28 lg:py-24">
          <Banner />
        </div>

        <section className="lg:px-28 lg:py-24">
          <h1 className="lg:text-3xl font-gilroy-bold text-black f cursor-default">
            Conheça a Terra-Média!</h1>
          <Offers2 />
        </section>
      </section>

      <section className="bg-[#141414] lg:px-28 lg:py-4">
        <Footer />
      </section>
    </div >
  )
}

export default App
