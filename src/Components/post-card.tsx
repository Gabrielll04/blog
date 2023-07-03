import { useState, useEffect } from 'react';

type ColorsObject = {
    background: string,
    text: string
}

export default function PostCard({ darkMode, title, id, content, topics, synopsis }: any) {
  const RandomColors: ColorsObject[] = [{background: '#86efac', text: '#166534'}, {background: '#fda4af', text: '#9f1239'}, {background: '#93c5fd', text: '#1e40af'}, {background: '#a5b4fc', text: '#5b21b6'}, {background: '#7dd3fc', text: '#075985'}];
  const [color, setColor] = useState<ColorsObject>();

  useEffect(() => {
    const randomColor = RandomColors[Math.floor(Math.random() * RandomColors.length)];
    setColor(randomColor);
  }, []);

 
  return (
    <a
      href={`/blog/${id}`}
      className={`flex flex-col w-full max-h-96 cursor-pointer overflow-hidden gap-3 p-5 rounded-xl ${darkMode ? "bg-zinc-800" : "bg-zinc-200"}`}
    >
      <span className="font-semibold text-xl">{title}</span>
      <div className="flex w-full gap-2">
        {topics.map((topic: string, index: number) => (
          <div
            key={index}
            style={{
                color: color?.text,
                backgroundColor: color?.background,
              }}
            className={`max-w-max text-sm font-semibold px-2 rounded-full`}
          >
            {topic}
          </div>
        ))}
      </div>
      <span className="opacity-70">{synopsis}</span>
    </a>
  );
}