export default function PostCard({ darkMode, title, id, content, topics }: any) {
    const RandomColors: string[] = ["green", "rose", "blue", "indigo", "sky"]

    function getRandomColors(RandomColors: string[]) {
        return RandomColors[Math.floor(Math.random() * RandomColors.length)]
    }

    return (
        <a href={`/blog/${id}`} className={`flex flex-col w-full max-h-96 cursor-pointer overflow-hidden gap-3 p-5 rounded-xl ${darkMode ? " bg-zinc-800" : "bg-zinc-200"}`}>
            <span className="font-semibold text-xl">{title}</span>
            <div className="flex w-full gap-2">
                {topics.map((topic: string, index: number) => {
                    const color = getRandomColors(RandomColors)
                    return <div key={index} className={`max-w-max text-sm font-semibold text-${color}-900 px-2 rounded-full bg-${color}-300`}>{topic}</div>
                })}
            </div>
            <span className="opacity-70">{content}</span>
        </a>
    )
}