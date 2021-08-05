
let icon = document.querySelector(".js-menu-icon")
let menu = document.querySelector(".js-menu")

icon.addEventListener("click", function() {
    if (menu.classList.contains("show")) {
        menu.classList.remove("show")
        menu.classList.add("hide")
    } else {
        menu.classList.remove("hide")
        menu.classList.add("show")
    }
})