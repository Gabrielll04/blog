import { useState, useEffect } from "react"
import getTheme from "../lib/get-theme"
import ThemeToggle from "../lib/theme-toggle"
import ThemeButton from "../Components/ui/theme-button"
import SideBar from "../Components/side-bar"
import PostCard from "../Components/post-card"

import { getPosts } from "../lib/db"

export default function BlogPage() {
  const usrTheme = getTheme()
  const [darkMode, setDarkMode] = useState<boolean>(usrTheme)
  const [feed, setFeed] = useState()

  useEffect(() => {
    async function getFeed(getPosts: Function) {
      const feed = await getPosts() 
      return setFeed(feed)
    }

    getFeed(getPosts)
  
    console.log(feed)
  })

  function themeToggleHandler() {
    ThemeToggle(usrTheme, setDarkMode)
  }

  return (
    <main className={`flex flex-col w-screen h-screen max-h-none overflow-auto transition ease-in-out delay-400 ${darkMode ? "dark" : ""}`}>
      <SideBar />
      <section className="mx-auto w-[30rem] h-full max-h-none">
        <article className="flex flex-col h-44 justify-center gap-2">
          <p className="font-semibold text-4xl mt-2">Welcome to my blog! &#128640;</p>
          <span className="text-xl">Posts about interesting topics</span>
        </article >

        <article className="flex flex-col mt-6">
          <p className="font-semibold text-2xl">Posts</p>
          <div className="flex flex-col w-full py-5 space-y-5">
            <PostCard />
            <PostCard />
            <PostCard />
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