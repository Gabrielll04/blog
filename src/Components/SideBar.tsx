import { TbBrandGithub, TbMenu2 } from 'react-icons/tb'
import { Menu, Transition } from '@headlessui/react'

function MyDropdown() {
  return (
    <Menu>
      <Menu.Button><TbMenu2 className='flex text-2xl items-end'/></Menu.Button>

      {/* Use the `Transition` component. */}
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="flex flex-col w-24 origin-right absolute right-0 bg-slate-200 px-2 rounded ring-1 ring-slate-300">
          <Menu.Item><span className='dropItem'>item</span></Menu.Item>
          <Menu.Item><span className='dropItem'>item</span></Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default function SideBar() {
  return (
    <div className='flex items-center justify-around w-screen h-12 sm:h-20 z-10 sm:text-xl sm:px-0 px-3 '>
      <span className='text-lg font-semibold sm:font-bold sm:text-2xl'>gabriel.dev</span>
      <div className='flex sm:space-x-20'>
        <button className='navButton'>items</button>
        <button className='navButton'>items</button>
        <button className='navButton'>items</button>
      </div>
      <button><TbBrandGithub className='text-5xl sm:hover:scale-110 transition invisible sm:visible'/></button>
      {/* <button className='' ><TbMenu2 className='text-2xl'/></button> */}
      {<div className='sm:hidden'>{MyDropdown()}</div>}
    </div>
  )
} 