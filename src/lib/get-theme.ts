export default function getTheme() {
    const usrTheme = localStorage.getItem("dark-mode")

    if (usrTheme == null || usrTheme == undefined) {
        localStorage.setItem("dark-mode", "false")
        return
    } else {
        return JSON.parse(usrTheme)
    }
}