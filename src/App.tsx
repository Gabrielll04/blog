import { useState } from "react"
import { SiOpenaigym } from "react-icons/si"
import { TbAlignBoxLeftTop, TbAddressBook } from "react-icons/tb"
import SocialButtons from "./Components/social-buttons"
import ThemeToggle from "./lib/theme-toggle"
import ThemeButton from "./Components/ui/theme-button"
import getTheme from "./lib/get-theme"
import SideBar from "./Components/side-bar"

function App() {
  const usrTheme = getTheme()
  const [darkMode, setDarkMode] = useState<boolean>(usrTheme)
  
  function themeToggleHandler() {
    ThemeToggle(usrTheme, setDarkMode)
  }

  return (
    <main className={`flex flex-col max-w-none max-h-none min-h-screen transition ease-in-out delay-400 ${darkMode ? "dark" : ""}`}>
      <SideBar/>
      <div className="flex sm:flex-col justify-center items-center px-8 sm:px-0 sm:my-auto ">
        <div className="flex my-auto sm:flex-row flex-col items-center w-[66rem] sm:space-x-5">
          <div className="flex justify-center items-center sm:w-[33rem] sm:h-[33rem] hover:ring-zinc-300">
            <SiOpenaigym className="w-52 h-52 sm:w-96 sm:h-96 text-green-500" />
          </div>
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col sm:items-start items-center sm:space-y-3">
              <span className="sm:font-bold sm:text-5xl invisible sm:visible">
                gabriel.dev
              </span>
              <span className="text-lg text-center sm:text-start w-96">
                Welcome to my personal site! I'am currently studying Software
                Engineering and i am learning about various
                technologies such as Docker, TS, Next13 and NixOS. Additionally, i
                have been exploring function programming language like Nix
                and Elixir! Please fell free to visit my portfolio and blogs
                using the links below.
              </span>
            </div>
            <div className="flex flex-col h-52 items-center sm:items-start">
              <div className="land-button ring-green-200 dark:ring-green-900 bg-green-100 cursor-pointer dark:bg-green-400 mb-3 animate-button">
                <TbAddressBook className="text-green-700 text-4xl" />
                <span className="font-semibold text-xl">Portfolio</span>
              </div>
              <div className="land-button ring-indigo-200 dark:ring-indigo-900 bg-indigo-100 cursor-pointer dark:bg-indigo-400">
                <TbAlignBoxLeftTop className="text-indigo-700 text-4xl" />
                <span className="font-semibold text-xl">Blog</span>
              </div>
              <SocialButtons/>
            </div>
          </div>
        </div>
        <ThemeButton darkMode={darkMode} themeToggleHandler={themeToggleHandler}/>
      </div>
    </main>
  )
}

export default App;