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
        <div className='flex sm:flex-row flex-col items-center w-[66rem] space-y-10 sm:space-x-5'>
          <div className='card flex justify-center items-center sm:w-[33rem] sm:h-[33rem] hover:ring-zinc-300'><SiOpenaigym className='w-80 h-80 text-green-500' /></div>
          <div className='flex flex-col mb-10 space-y-7 '>
            <div className='flex flex-col sm:items-start items-center space-y-2'>
              <span className='font-bold text-5xl'>gabriel.dev</span>
              <span className='text-xl text-center sm:text-start'>Using my passion to solve your problems</span>
            </div>
            <div className='flex flex-col h-52 space-y-3'>
              <div className='land-button ring-green-200 bg-green-100 cursor-pointer'>
                <TbBrandTypescript className='text-green-400 text-4xl' />
                <span className=''>Blog</span>
              </div>
              <div className='land-button ring-indigo-200 bg-indigo-100 cursor-pointer'>
                <TbBrandNextjs className='text-indigo-400 text-4xl' />
                <span className=''>Next.js</span>
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