import { TbBrandGithub } from 'react-icons/tb'

export default function SideBar() {
  return (
    <div className='flex items-center justify-around w-full h-16 z-10'>
      <span className='font-bold text-lg'>gabriel.dev</span>
      <div className='flex space-x-7'>
        <button className='navButton'>items</button>
        <button className='navButton'>items</button>
        <button className='navButton'>items</button>
      </div>
      <button><TbBrandGithub className='text-3xl sm:hover:scale-110 transition'/></button>
    </div>
  )
} 