import { SiGithub } from "react-icons/si"
import { TbMenu2 } from "react-icons/tb"
import { Menu, Transition } from "@headlessui/react"

// function MyDropdown() {
//   return (
//     <Menu>
//       <Menu.Button><TbMenu2 className="flex text-3xl items-end sm:hidden" /></Menu.Button>

//       {/* Use the `Transition` component. */}
//       <Transition
//         enter="transition duration-100 ease-out"
//         enterFrom="transform scale-95 opacity-0"
//         enterTo="transform scale-100 opacity-100"
//         leave="transition duration-75 ease-out"
//         leaveFrom="transform scale-100 opacity-100"
//         leaveTo="transform scale-95 opacity-0"
//       >
//         <Menu.Items className="flex flex-col w-32 origin-right absolute right-0 bg-zinc-100 ring-1 ring-zinc-200 p-1 rounded">
//           <Menu.Item><span className="dropItem">item</span></Menu.Item>
//           <Menu.Item><span className="dropItem">item</span></Menu.Item>
//           <Menu.Item><span className="dropItem">item</span></Menu.Item>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   )
// }

export default function Navbar() {
  return (
    <div className="justify-center p-5 sm:space-x-32 w-full h-12 z-10 sm:text-xl mb-10 sm:mb-0 sm:px-0 px-3 hidden sm:flex">
      <button><SiGithub className="text-4xl sm:hover:scale-110 transition" /></button>
      <div className="flex sm:space-x-20 sm:visible">
        <a href="/" className="navButton">Home</a>
        <a href="/blog" className="navButton">Blogs</a>
        <a href="/whoami" className="navButton">Who am I</a>
      </div>
    </div>
  )
} 