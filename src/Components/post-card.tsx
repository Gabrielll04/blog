export default function PostCard({darkMode, title, id, content}: any) {
    return (
        <a href={`/blog/${id}`} className={`flex flex-col w-full max-h-96 cursor-pointer overflow-hidden gap-3 p-5 rounded-xl ${darkMode ? " bg-zinc-800" : "bg-zinc-300"}`}>
            <span className="font-semibold text-xl">{title}</span>
            <div className="max-w-max text-sm font-semibold text-green-900 px-2 rounded-full bg-green-300">Fullstack development</div>
            <span className="opacity-70">{content}</span>
        </a>
    )
}