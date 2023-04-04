import { AiFillMail } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-transparent">
      <div className="sm:mx-10 lg:mx-5 py-10 text-center md:text-left" >
        <div className="md:flex">
          <div className="sm:w-14 sm:mb-10 lg:w-1/2 lg:mb-0">
            <img src="/assets/logo.svg" alt="" />
          </div>
          <div className="sm:w-full lg:w-1/2 flex justify-between gap-8 md:grid-cols-2">

            <div className="" >
              <h6
                className="mb-4 text-gray-400  flex justify-center font-semibold uppercase md:justify-start" >
                Pacotes
              </h6 >
              <p className="mb-4" >
                <a href="#!" className="text-zinc-600 hover:text-zinc-500"
                > Sociedades</a>
              </p >
              <p className="mb-4" >
                <a href="#!" className="text-zinc-600 hover:text-zinc-500"
                > Família</a>
              </p >
              <p className="mb-4" >
                <a href="#!" className="text-zinc-600 hover:text-zinc-500"
                > Amigos</a>
              </p >
              <p>
                <a href="#!" className="text-zinc-600 hover:text-zinc-500"
                >Casal</a>
              </p >
            </div >

            <div className="" >
              <h6
                className="mb-4 flex text-gray-400 justify-center font-semibold uppercase md:justify-start" >
                Regiões
              </h6 >
              <p className="mb-4" >
                <a href="#!" className="text-zinc-600 hover:text-zinc-500"
                > Mordor</a>
              </p >
              <p className="mb-4" >
                <a href="#!" className="text-zinc-600 hover:text-zinc-500"
                > Rohan</a>
              </p >
              <p className="mb-4" >
                <a href="#!" className="text-zinc-600 hover:text-zinc-500"
                > Gondor</a>
              </p >
              <p>
                <a href="#!" className="text-zinc-600 hover:text-zinc-500"
                > Minhiriath</a>
              </p >
            </div >

            <div className="" >
              <h6
                className="mb-4 flex text-gray-400 justify-center font-semibold uppercase md:justify-start" >
                + infos
              </h6 >
              <p className="mb-4" >
                <a href="#!" className="text-zinc-600 hover:text-zinc-500"
                > Preços</a>
              </p >
              <p className="mb-4" >
                <a href="#!" className="text-zinc-600 hover:text-zinc-500"
                > Seguro</a>
              </p >
              <p className="mb-4" >
                <a href="#!" className="text-zinc-600 hover:text-zinc-500"
                > Ordens</a>
              </p >
              <p>
                <a href="#!" className="text-zinc-600 hover:text-zinc-500"
                >Ajuda</a>
              </p >
            </div >

          </div >
        </div>


        <div className="md:flex justify-between mt-10" >
          <p className="text-[#5e5e5e] font-gilroy-bold pointer-events-none">
            ©1997 - 2023 TRXL., Inc.
          </p >
          <div className="sm:mt-10 sm:justify-center sm:items-center lg:mt-0 flex gap-8 items-center">
            <a href="#!" className="text-zinc-500 hover:text-blue-400" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24" >
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg >
            </a >
            <a href="#!" className="text-zinc-500 hover:text-red-400" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24" >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg >
            </a >
            <a href="#!" className='text-zinc-500 hover:text-zinc-200'>
              <AiFillMail size={20} className="" />
            </a>
            <a href="#!" className="text-zinc-500 hover:text-blue-400" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24" >
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg >
            </a >
          </div>

        </div >
      </div >
    </footer >
  )
}

export default Footer