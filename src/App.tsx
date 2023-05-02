import { SiOpenaigym } from 'react-icons/si'
import { TbBrandTypescript } from 'react-icons/tb'
import { TbBrandNextjs } from 'react-icons/tb'
import { TbMoonStars, TbMoonFilled } from 'react-icons/tb'

import SideBar from './Components/SideBar'
function App() {
  return (
    <div className='flex flex-col w-screen min-h-screen max-h-none'>
      <SideBar />
      <div className='flex my-auto sm:flex-col justify-center items-center px-8 sm:px-0'>
        <div className='flex sm:flex-row flex-col items-center w-[66rem] sm:space-x-5'>
          <div className='flex justify-center items-center sm:w-[33rem] sm:h-[33rem] hover:ring-zinc-300'><SiOpenaigym className='w-32 h-32 sm:w-96 sm:h-96 sm:mb-9 text-green-500' /></div>
          <div className='flex flex-col mb-10 space-y-10'>
            <div className='flex flex-col sm:items-start items-center sm:space-y-3'>
              <span className='sm:font-bold sm:text-5xl invisible sm:visible'>gabriel.dev</span>
              <span className='text-xl text-center sm:text-start'>Using my passion to solve your problems</span>
            </div>
            <div className='flex flex-col h-52 space-y-3 items-center sm:items-start'>
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
      <button className='self-end text-3xl mr-3 mb-3 sm:mr-10 sm:mb-7 rounded-full shadow-inner font-bold'><TbMoonStars /></button>
    </div>
  );
}

export default App;