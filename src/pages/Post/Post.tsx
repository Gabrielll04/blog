import { useParams } from "react-router-dom"
import posts from '../../../datasets/PostsSet.json'
import ThemeToggle from "../../lib/theme-toggle"
import Navbar from "../../Components/nav-bar"
import getTheme from "../../lib/get-theme"
import { useState } from "react"
import ThemeButton from "../../Components/ui/theme-button"

export default function PostPage() {
    const usrTheme = getTheme()
    const [darkMode, setDarkMode] = useState<boolean>(usrTheme)

    function themeToggleHandler() {
        ThemeToggle(usrTheme, setDarkMode)
    }

    const { postid } = useParams()

    const post = posts.find((post) => post.id === postid)
    if (!post) {
        return (
            <p className="text-2xl text-neutral-600">An problem has occured</p>
        )
    }

    let createdAt = new Date(post.CreatedAt)
    const formattedData = createdAt.toLocaleDateString("pt-BR", { timeZone: "UTC" })

    return (
        <main className={`flex flex-col w-screen h-screen max-h-none overflow-auto transition ease-in-out delay-400 ${darkMode ? "dark" : ""}`}>
            <Navbar />
            <section className="flex w-full max-h-none justify-center items-center p-12">
                <p className="text-center font-bold text-7xl w-[50rem]">{post.Title}</p>
            </section>
            <section className="flex flex-col w-full max-h-none">
                <div className="flex w-full h-20 px-20 justify-center py-3 gap-7 opacity-70">
                    <span>Gabriel G. Carneiro</span>
                    {post.Topics.map((topic) => (
                        <span>{topic}</span>
                    ))}
                    <span>{formattedData}</span>
                </div>
                <article className="flex w-full justify-center p-12">
                    <label className="text-justify indent-8 text-lg w-[60rem] cursor-text">{post.Content}</label>
                </article>
            </section>
            <div className="bottom-0 right-0 fixed">
                <ThemeButton darkMode={darkMode} themeToggleHandler={themeToggleHandler} />
            </div>
        </main>
    )
}