const toggleHeader = document.querySelector(".fa-bars")
const navList = document.querySelector('.nav__list')

toggleHeader.addEventListener("click", () => {
    navList.classList.toggle("hide")
})