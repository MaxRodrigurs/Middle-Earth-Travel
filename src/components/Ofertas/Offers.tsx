import ScrollContainer from "react-indiana-drag-scroll"

function Offers() {
  return (
    <section className="mt-7">
      <ScrollContainer className="flex gap-5">
        <div className="relative m-5 bg-white min-w-[50%] h-[300px] drop-shadow-xl rounded-3xl text-gray-500">
          <div className="flex">
            <img className="rounded-3xl w-[450px] h-[254px] m-6" src="/assets/image2.jpg" alt="" />

            <div className="flex-col mt-5 mr-6">
              <div className="cursor-default">
                <span>Voo doméstico</span>
                <h2 className="text-2xl text-black font-bold mb-[28px]">Descontos gigantescos com a trxvl.</h2>
                <span className="text-md">Agende seu voo doméstico com valores a partir de ₹1459</span>
              </div>
              <button className="rounded-[32px] font-gilroy-bold mt-12 text-white p-3 text-center w-32 text-md bg-blue-700 hover:bg-blue-900" >Reservar</button>
            </div>
          </div>
        </div>

        <div className="relative m-5 bg-white min-w-[50%] h-[300px] drop-shadow-xl rounded-3xl text-gray-500">
          <div className="flex">
            <img className="rounded-3xl w-[450px] h-[254px] m-6" src="/assets/image6.jpg" alt="" />

            <div className="flex-col mt-5 mr-6">
              <div className="cursor-default">
                <span>Voo doméstico</span>
                <h2 className="text-2xl text-black font-bold mb-[28px]">Descontos gigantescos com a trxvl.</h2>
                <span className="text-md">Agende seu voo doméstico com valores a partir de ₹1459</span>
              </div>
              <button className="rounded-[32px] font-gilroy-bold mt-12 text-white p-3 text-center w-32 text-md bg-blue-700 hover:bg-blue-900" >Reservar</button>
            </div>
          </div>
        </div>

        <div className="relative m-5 bg-white min-w-[50%] h-[300px] drop-shadow-xl rounded-3xl text-gray-500">
          <div className="flex">
            <img className="rounded-3xl w-[450px] h-[254px] m-6" src="/assets/image4.jpg" alt="" />

            <div className="flex-col mt-5 mr-6">
              <div className="cursor-default">
                <span>Voo doméstico</span>
                <h2 className="text-2xl text-black font-bold mb-[28px]">Descontos gigantescos com a trxvl.</h2>
                <span className="text-md">Agende seu voo doméstico com valores a partir de ₹1459</span>
              </div>
              <button className="rounded-[32px] font-gilroy-bold mt-12 text-white p-3 text-center w-32 text-md bg-blue-700 hover:bg-blue-900" >Reservar</button>
            </div>
          </div>
        </div>

      </ScrollContainer >
    </section>
  )
}

export default Offers