import { useState } from "react"
import getTheme from "../lib/get-theme"
import ThemeToggle from "../lib/theme-toggle"
import ThemeButton from "../Components/ui/theme-button"
import SideBar from "../Components/side-bar"
import PostCard from "../Components/post-card"

export default function BlogPage() {
  const usrTheme = getTheme()
  const [darkMode, setDarkMode] = useState<boolean>(usrTheme)

  function themeToggleHandler() {
    ThemeToggle(usrTheme, setDarkMode)
  }

  return (
    <main className={`flex flex-col w-screen h-screen max-h-none overflow-auto lg:overflow-hidden transition ease-in-out delay-400 ${darkMode ? "dark" : ""}`}>
      <SideBar />
      <section className="mx-auto w-[30rem] h-full max-h-none">
        <article className="flex flex-col mt-5">
          <p className="font-semibold text-2xl">Welcome to my blog! &#128640;</p>
          <span className="text-lg">Hear you can read posts about topics that interest me.</span>
          <span className="opacity-70 mt-6">Some posts may have been written only in portuguese.</span>
          <hr className="opacity-70 mt-6"/>
        </article >
        <article className="flex flex-col mt-6">
          <p className="text-2xl font-semibold">Blog</p>
          <div className="flex flex-col w-full py-5">
            <PostCard />
          </div>
        </article>
      </section>
      <div className="bottom-0 right-0 fixed">
        <ThemeButton darkMode={darkMode} themeToggleHandler={themeToggleHandler}/>
      </div>
    </main>
  )
}