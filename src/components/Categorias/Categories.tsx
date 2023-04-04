import ScrollContainer from 'react-indiana-drag-scroll'
import { GiMountainCave, GiPisaTower, GiForestCamp, GiCampingTent, GiPalmTree } from 'react-icons/gi'
import { TbBeach, TbBuildingCastle } from 'react-icons/tb'
import { RiCactusLine } from "react-icons/ri";
import { MdOutlineHouseboat } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";

function Categories() {
  return (
    <div>
      <h2 className="sm:text-2xl sm:mt-52 
      lg:text-3xl lg:mt-20 
      font-gilroy-bold text-white lg:pb-8">Categorias</h2>

      <ScrollContainer className="bg-white/20 backdrop-blur-sm p-3 font-gilroy-medium sm:rounded-3xl sm:mt-6 lg:mt-0 lg:rounded-xl">
        <div className='flex mx-4 gap-11 justify-between items-center'>
          <div className="flex flex-col items-center text-zinc-300 hover:text-[#e6eeff]">
            <a href="#" className='mt-1 pb-1'>
              <TbBeach size={32} className="" />
            </a>
            <span className="font-normal">Praias</span>
          </div>

          <div className="flex flex-col items-center text-zinc-300 hover:text-[#e6eeff]">
            <a href="#" className='mt-1 pb-1'>
              <RiCactusLine size={32} className="" />
            </a>
            <span className="font-normal">Desertos</span>
          </div>

          <div className="flex flex-col items-center text-zinc-300 hover:text-[#e6eeff]">
            <a href="#" className='mt-1 pb-1'>
              <GiMountainCave size={32} className="" />
            </a>

            <span className="font-normal">Montanhas</span>
          </div>

          <div className="flex flex-col items-center text-zinc-300 hover:text-[#e6eeff]">
            <a href="#" className='mt-1 pb-1'>
              <GiPisaTower size={32} className="" />
            </a>

            <span className="font-normal">Cidades</span>
          </div>

          <div className="flex flex-col items-center text-zinc-300 hover:text-[#e6eeff]">
            <a href="#" className='mt-1 pb-1'>
              <MdOutlineHouseboat size={32} className="" />
            </a>

            <span className="font-normal sm:text-center">Casa Flutuante</span>
          </div>

          <div className="flex flex-col items-center text-zinc-300 hover:text-[#e6eeff]">
            <a href="#" className='mt-1 pb-1'>
              <GiForestCamp size={32} className="" />
            </a>

            <span className="font-normal">Campo</span>
          </div>

          <div className="flex flex-col items-center text-zinc-300 hover:text-[#e6eeff]">
            <a href="#" className='mt-1 pb-1'>
              <GiCampingTent size={32} className="" />
            </a>

            <span className="font-normal">Acampamento</span>
          </div>

          <div className="flex flex-col items-center text-zinc-300 hover:text-[#e6eeff]">
            <a href="#" className='mt-1 pb-1'>
              <TbBuildingCastle size={32} className="" />
            </a>

            <span className="font-normal">Castelos</span>
          </div>

          <div className="flex flex-col items-center text-zinc-300 hover:text-[#e6eeff]">
            <a href="#" className='mt-1 pb-1'>
              <FaSkiing size={32} className="" />
            </a>

            <span className="font-normal">Skiing</span>
          </div>

          <div className="flex flex-col items-center text-zinc-300 hover:text-[#e6eeff]">
            <a href="#" className='mt-1 pb-1'>
              <GiPalmTree size={32} className="" />
            </a>

            <span className="font-normal">Tropical</span>
          </div>
        </div>

      </ScrollContainer>
    </div>
  )
}

export default Categories