import { TbMoonStars, TbSun } from 'react-icons/tb'

export default function ThemeButton({ darkMode, themeToggleHandler }: any) {
    return (
        <button onClick={themeToggleHandler}
            className="text-3xl mr-3 mb-3 sm:mr-10 sm:mb-7 rounded-full shadow-inner"
        >
            {darkMode ? <TbSun /> : <TbMoonStars />}
        </button>
    )
}