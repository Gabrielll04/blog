import { useState } from 'react'
import getTheme from '../lib/get-theme'
import ThemeButton from '../Components/ui/theme-button'
import ThemeToggle from '../lib/theme-toggle'
import Navbar from '../Components/nav-bar'

export default function Whoami() {
    const usrTheme = getTheme()
    const [darkMode, setDarkMode] = useState<boolean>(usrTheme)

    function themeToggleHandler() {
        ThemeToggle(usrTheme, setDarkMode)
    }

    return (
        <main className={`flex flex-col w-screen h-screen max-h-none overflow-auto transition ease-in-out delay-400 ${darkMode ? "dark" : ""}`}>
            <Navbar />
            <section className="flex flex-col w-screen items-center p-20">
                <div className="flex flex-col w-[30rem] space-y-10">
                    <p className="text-3xl font-semibold">Hi! I am Gabriel Guimarães Carneiro! &#128075;</p>
                    <span className="text-justify">Hello, I'm a student from Brazil who loves technology, my main topics of study are web development and ~lately~ Machine Learning. I have experience with several technologies applied in several personal projects, such as Next.JS, Tailwind, Azure Cloud, Typescript, Docker and so on.</span>
                </div>
            </section>
            <div className="flex bottom-0 right-0 fixed">
                <ThemeButton darkMode={darkMode} themeToggleHandler={themeToggleHandler} />
            </div>
        </main>
    )
}