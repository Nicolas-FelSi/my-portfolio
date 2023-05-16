const tagHtml = document.querySelector("html")
const toggleHeader = document.querySelector('i[class="fa-solid fa-bars"]')
const navList = document.querySelector('.nav__list')
const inputDarkMode = document.querySelector('.switch input')
const imgDarkMode = document.querySelector(".dark")
const imgLightMode = document.querySelector('.light')
const imgDarkModeMain = document.querySelector(".img-dark-mode")
const imglightModeMain = document.querySelector(".img-light-mode")

toggleHeader.addEventListener("click", () => {
    navList.classList.toggle("hide")
})

inputDarkMode.addEventListener("click", () => {
    imgDarkMode.classList.toggle("hide")
    imgLightMode.classList.toggle("hide")
    imgDarkModeMain.classList.toggle("hide")
    imglightModeMain.classList.toggle("hide")
    tagHtml.classList.toggle("dark-theme")
})

window.onresize = () => {
    if (window.matchMedia("(min-width: 940px)").matches) {
        toggleHeader.remove()
        if (navList.classList.contains("hide")) {
            navList.classList.remove("hide")
        }
    } else {
        const divParent = navList.parentNode
        divParent.insertBefore(toggleHeader, navList)
        if (!navList.classList.contains("hide")) {
            navList.classList.add("hide")
        }
    }
}
