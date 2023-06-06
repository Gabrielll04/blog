import { useState } from "react"
import { SiOpenaigym } from "react-icons/si"
import { TbAlignBoxLeftTop, TbAddressBook } from "react-icons/tb"
import SocialButtons from "./Components/social-buttons"
import ThemeToggle from "./lib/theme-toggle"
import ThemeButton from "./Components/ui/theme-button"
import getTheme from "./lib/get-theme"
import Navbar from "./Components/nav-bar"

function App() {
  const usrTheme = getTheme()
  const [darkMode, setDarkMode] = useState<boolean>(usrTheme)
  
  function themeToggleHandler() {
    ThemeToggle(usrTheme, setDarkMode)
  }

  return (
    <main className={`flex flex-col w-screen h-screen max-h-none overflow-auto lg:overflow-hidden transition ease-in-out delay-400 ${darkMode ? "dark" : ""}`}>
      <Navbar/>
      <div className="flex sm:flex-col justify-center items-center px-8 sm:px-0 lg:my-auto ">
        <div className="flex my-auto flex-col items-center sm:space-x-5 lg:w-[66rem] lg:flex-row">
          <div className="flex justify-center items-center lg:w-[33rem] lg:h-[33rem]">
            <SiOpenaigym className="w-32 h-36 sm:w-52 sm:h-52 sm:my-20 lg:w-96 lg:h-96 text-green-500" />
          </div>
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col sm:items-start items-center sm:space-y-3">
              <span className="sm:mx-auto lg:mx-0 sm:font-bold sm:text-5xl invisible sm:visible">
                gabriel.dev
              </span>
              <span className="text-base text-center w-72 sm:w-[30rem] sm:mx-auto lg:mx-0 sm:text-lg lg:text-start lg:w-96">
                Welcome to my personal site! I'am currently studying Software
                Engineering and i am learning ab  out various
                technologies such as Docker, TS, Next13 and NixOS. Additionally, i
                have been exploring function programming language like Nix
                and Elixir! Please fell free to visit my portfolio and blogs
                using the links below.
              </span>
            </div>
            <div className="flex flex-col h-52 items-center lg:items-start">
              <div className="land-button ring-green-200 dark:ring-green-900 bg-green-100 cursor-pointer dark:bg-green-400 mb-3 animate-button">
                <TbAddressBook className="text-green-700 text-4xl" />
                <span className="font-semibold text-xl">Portfolio</span>
              </div>
              <a href="/blog" className="land-button ring-indigo-200 dark:ring-indigo-900 bg-indigo-100 cursor-pointer dark:bg-indigo-400">
                <TbAlignBoxLeftTop className="text-indigo-700 text-4xl" />
                <span className="font-semibold text-xl">Blog</span>
              </a>
              <SocialButtons/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bottom-0 right-0 fixed">
        <ThemeButton darkMode={darkMode} themeToggleHandler={themeToggleHandler}/>
      </div>
    </main>
  )
}

export default App