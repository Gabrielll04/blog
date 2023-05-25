export default function ThemeToggle(userTheme: boolean, setDarkMode: Function) {
    if (!userTheme) {
        localStorage.setItem("dark-mode", "true")
        setDarkMode(true)
    } else {
        localStorage.setItem("dark-mode", "false")
        setDarkMode(false)
    }
}
