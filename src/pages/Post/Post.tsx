import React, { useParams } from "react-router-dom"
import posts from '../../../datasets/PostsSet.json'
import ThemeToggle from "../../lib/theme-toggle"
import Navbar from "../../Components/nav-bar"
import getTheme from "../../lib/get-theme"
import { useEffect, useState } from "react"
import ThemeButton from "../../Components/ui/theme-button"
import { marked } from "marked"
import { Post } from "../../lib/models"
import BackButton from "../../Components/ui/back-button"

marked.use({
    async: true,
    pedantic: false,
    gfm: true,
    breaks: true,
    headerIds: false,
})

export default function PostPage() {
    const usrTheme = getTheme()
    const [darkMode, setDarkMode] = useState<boolean>(usrTheme)
    const [parsedContent, setParsedContent] = useState<React.HTMLProps<HTMLLabelElement> | null>()

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

    useEffect(() => {
        async function parsingMDContent(post: Post) {
            const parsedContent = await marked.parse(post.Content)
            setParsedContent(parsedContent)
            return
        }

        if (post === undefined) {
            return
        } else {
            parsingMDContent(post)
        }
    }, [post])

    return (
        <main className={`flex flex-col w-screen h-screen max-h-none overflow-auto transition ease-in-out delay-400 ${darkMode ? "dark" : ""}`}>
            <Navbar />
            <BackButton />
            <section className="flex flex-col max-h-none justify-center items-center p-10">
                <p className="text-center font-bold text-5xl sm:text-7xl sm:w-[50rem]">{post.Title}</p>
            </section>
            <section className="flex flex-col w-full max-h-none">
                <div className="flex flex-col justify-center items-center text-sm gap-2 sm:items-start   sm:flex-row sm:text-base sm:gap-5 opacity-70 mb-5">
                    <span>Gabriel G. Carneiro</span>
                    {post.Topics.map((topic) => (
                        <span>{topic}</span>
                    ))}
                    <span>{formattedData}</span>
                </div>
                <article className="flex w-full justify-center p-12">
                    <label dangerouslySetInnerHTML={{ __html: parsedContent }} className="text-justify indent-8 text-lg w-[60rem] cursor-text">
                    </label>
                </article>
            </section>
            <div className="bottom-0 right-0 fixed">
                <ThemeButton darkMode={darkMode} themeToggleHandler={themeToggleHandler} />
            </div>
        </main>
    )
}