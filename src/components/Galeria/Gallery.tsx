import ScrollContainer from 'react-indiana-drag-scroll'

function Gallery() {
  return (
    <ScrollContainer className='flex sm:gap-5 sm:mt-8 lg:gap-6 lg:pt-8 max-w-full'>
      <div className='relative sm:min-w-[330px] lg:min-w-[500px] lg:min-h-[300px]'>
        <img className="rounded-lg object-cover w-full h-72 " src="/assets/image1.jpg" alt="" />

        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-72 overflow-hidden bg-black rounded-lg bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-[0.32]">
        </div>

        <p className='absolute text-xl sm:left-[38%] sm:top-[85%] lg:top-[80%] lg:left-[41%] bottom-10 text-white font-bold '>Iron Bay</p>
      </div>

      <div className='relative sm:min-w-[330px] lg:min-w-[500px] lg:min-h-[300px]'>
        <img className="absolute rounded-lg object-cover w-full h-72" src="/assets/image2.jpg" alt="" />

        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-72 overflow-hidden bg-black rounded-lg bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-[0.32]">
        </div>

        <p className='absolute text-xl sm:left-[38%] sm:top-[85%] lg:top-[80%]  lg:left-[41%] mx-auto bottom-10 text-white font-bold'>Rivendell</p>
      </div>

      <div className='relative sm:min-w-[330px] lg:min-w-[500px] lg:min-h-[300px]'>
        <img className="rounded-lg object-cover w-full h-72" src="/assets/image3.jpg" alt="" />

        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-72 overflow-hidden bg-black rounded-lg bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-[0.32]">
        </div>

        <p className='absolute text-xl sm:left-[38%] sm:top-[85%] lg:top-[80%]  lg:left-[41%] mx-auto bottom-10 text-white font-bold'>Lost City</p>
      </div>

      <div className='relative sm:min-w-[330px] lg:min-w-[500px] lg:min-h-[300px]'>
        <img className=" rounded-lg object-cover w-full h-72" src="/assets/image4.jpg" alt="" />

        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-72 overflow-hidden bg-black rounded-lg bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-[0.32]">
        </div>

        <p className='absolute text-xl sm:left-[38%] sm:top-[85%] lg:top-[80%]  lg:left-[35%] mx-auto bottom-10 text-white font-bold'>Forest of Brethil</p>
      </div>

      <div className='relative sm:min-w-[330px] lg:min-w-[500px] lg:min-h-[300px]'>
        <img className=" rounded-lg object-cover w-full h-72" src="/assets/image5.jpg" alt="" />

        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-72 overflow-hidden bg-black rounded-lg bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-[0.32]">
        </div>

        <p className='absolute text-xl sm:left-[38%] sm:top-[85%] lg:top-[80%]  lg:left-[36%] mx-auto bottom-10 text-white font-bold'>Society's Bridge</p>
      </div>

      <div className='relative sm:min-w-[330px] lg:min-w-[500px] lg:min-h-[300px]'>
        <img className=" rounded-lg object-cover w-full h-72" src="/assets/image6.jpg" alt="" />

        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-72 overflow-hidden bg-black rounded-lg bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-[0.32]">
        </div>

        <p className='absolute text-xl sm:left-[38%] sm:top-[85%] lg:top-[80%]  lg:left-[38%] mx-auto bottom-10 text-white font-bold'>Minas Tirith</p>
      </div>

      <div className='relative sm:min-w-[330px] lg:min-w-[500px] lg:min-h-[300px]'>
        <img className=" rounded-lg object-cover w-full h-72" src="/assets/image7.jpg" alt="" />

        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-72 overflow-hidden bg-black rounded-lg bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-[0.32]">
        </div>

        <p className='absolute text-xl sm:left-[38%] sm:top-[85%] lg:top-[80%]  lg:left-[32%] mx-auto bottom-10 text-white font-bold'>Smaug's Mountain</p>
      </div>

      <div className='relative sm:min-w-[330px] lg:min-w-[500px] lg:min-h-[300px]'>
        <img className=" rounded-lg object-cover w-full h-72" src="/assets/image1.jpg" alt="" />

        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-72 overflow-hidden bg-black rounded-lg bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-[0.32]">
        </div>

        <p className='absolute text-xl sm:left-[38%] sm:top-[85%] lg:top-[80%] lg:left-[41%] mx-auto bottom-10 text-white font-bold'>Iron Bay</p>
      </div>
    </ScrollContainer >
  )
}

export default Gallery