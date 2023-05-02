import { useState } from "react";
import {
  SiOpenaigym,
  SiLinkedin,
  SiTwitter,
  SiGithub,
  SiInstagram,
} from "react-icons/si";
import {
  TbBrandTypescript,
  TbBrandNextjs,
  TbMoonStars,
  TbSun,
} from "react-icons/tb";

import SideBar from "./Components/SideBar";

function App() {
  let darkModeToggle: any = localStorage.getItem("dark-mode"); //getting the localstorage data
  let parsedDarkMode: any = null;

  if (darkModeToggle != null) {
    parsedDarkMode = JSON.parse(darkModeToggle); //if the localstorage data != null, then set to a useState
  }

  const [darkMode, setDarkMode] = useState<boolean>(parsedDarkMode);

  function themeToggle(): void {
    if (!darkMode) {
      localStorage.setItem("dark-mode", "true");
    } else {
      localStorage.setItem("dark-mode", "false");
    }

    let darkModeToggle: any = localStorage.getItem("dark-mode");
    if (darkModeToggle != null) {
      const parsedDarkModeToggle: boolean = JSON.parse(darkModeToggle);
      setDarkMode(parsedDarkModeToggle);
    }
  }

  return (
    <body className={darkMode ? "dark" : ""}>
      <div className="flex flex-col max-w-none max-h-none transition ease-in-out delay-400">
        <SideBar />
        <div className="flex sm:my-auto sm:flex-col justify-center items-center px-8 sm:px-0">
          <div className="flex sm:flex-row flex-col items-center w-[66rem] sm:space-x-5">
            <div className="flex justify-center items-center sm:w-[33rem] sm:h-[33rem] hover:ring-zinc-300">
              <SiOpenaigym className="w-52 h-52 sm:w-96 sm:h-96 text-green-500" />
            </div>
            <div className="flex flex-col space-y-10">
              <div className="flex flex-col sm:items-start items-center sm:space-y-3">
                <span className="sm:font-bold sm:text-5xl invisible sm:visible">
                  gabriel.dev
                </span>
                <span className="text-xl text-center sm:text-start">
                  Using my passion to solve your problems
                </span>
              </div>
              <div className="flex flex-col h-52 items-center sm:items-start">
                <div className="land-button ring-green-200 dark:ring-green-900 bg-green-100 cursor-pointer dark:bg-green-400 mb-3">
                  <TbBrandTypescript className="text-green-700 text-4xl" />
                  <span className="font-semibold text-xl">Blog</span>
                </div>
                <div className="land-button ring-indigo-200 dark:ring-indigo-900 bg-indigo-100 cursor-pointer dark:bg-indigo-400">
                  <TbBrandNextjs className="text-indigo-700 text-4xl" />
                  <span className="font-semibold text-xl">Next.js</span>
                </div>
                <div className="flex w-full h-10 sm:justify-start sm:space-x-2 sm:mt-0 justify-center space-x-4 mt-3">
                  <a href="#" className="h-full">
                    <SiLinkedin className="w-5 h-full text-gray-300" />
                  </a>
                  <a href="#" className="h-full">
                    <SiTwitter className="w-5 h-full text-gray-300" />
                  </a>
                  <a href="#" className="h-full">
                    <SiGithub className="w-5 h-full text-gray-300" />
                  </a>
                  <a href="#" className="h-full">
                    <SiInstagram className="w-5 h-full text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="self-end text-3xl mr-3 mb-3 sm:mr-10 sm:mb-7 rounded-full shadow-inner"
          onClick={() => themeToggle()}
        >
          {darkMode ? <TbSun /> : <TbMoonStars />}
        </button>
      </div>
    </body>
  );
}

export default App;
