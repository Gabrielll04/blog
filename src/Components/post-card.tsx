export default function PostCard({}) {
    return (
        <a className="flex flex-col  w-full h-14 cursor-pointer">
            <span className="underline-offset-4 font-semibold text-lg underline decoration">Title</span>
            <span className="opacity-70">This is a message about the post contetn</span>
        </a>
    )
}