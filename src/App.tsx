import { SiOpenaigym } from 'react-icons/si'
import { TbBrandTypescript } from 'react-icons/tb'
import { TbBrandNextjs } from 'react-icons/tb'
import { TbBrandFirebase } from 'react-icons/tb'
import { TbMoonStars, TbMoonFilled } from 'react-icons/tb'

import SideBar from './Components/SideBar'
function App() {
  return (
    <div className='flex flex-col w-screen min-h-screen max-h-none bg-slate-50'>
      <SideBar />
      <div className='flex my-auto sm:flex-col justify-center items-center'>
        <div className='flex sm:flex-row flex-col items-center w-[66rem] space-y-10 sm:space-x-10'>
          <div className='card flex justify-center items-center sm:w-[33rem] sm:h-[33rem] hover:ring-zinc-300'><SiOpenaigym className='w-80 h-80 text-green-500' /></div>
          <div className='flex flex-col mb-10 space-y-7 '>
            <div className='flex flex-col sm:items-start items-center space-y-2'>
              <span className='font-bold text-5xl'>gabriel.dev</span>
              <span className='text-xl text-center sm:text-start'>Using my passion to solve your problems</span>
            </div>
            <div className='flex  justify-around sm:justify-between w-full h-24 '>
              <div className='flex flex-col justify-around items-center w-20 hover:scale-110 hover:shadow-2xl transition rounded ring-1 ring-green-200 bg-green-100'>
                <TbBrandTypescript className='text-green-400 text-4xl' />
                <span className=''>Typescript</span>
              </div>
              <div className='flex flex-col justify-around items-center w-20 hover:scale-110 hover:shadow-2xl transition rounded ring-1 ring-indigo-200 bg-indigo-100'>
                <TbBrandNextjs className='text-indigo-400 text-4xl' />
                <span className=''>Next.js</span>
              </div>
              <div className='flex flex-col justify-around  items-center w-20 hover:scale-110 hover:shadow-2xl transition rounded ring-1 ring-rose-200 bg-rose-100'>
                <TbBrandFirebase className='text-rose-400 text-4xl' />
                <span className=''>Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className='self-end text-5xl mr-10 mb-7 rounded-full shadow-inner'><TbMoonStars /></button>
    </div>
  );
}

export default App;