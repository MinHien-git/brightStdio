const burgerbtn = document.querySelector(".burger");
const navitems = document.querySelector(".primary-header-navigation-items")

const bgColumn = document.querySelector("#bg-column")
const frontColumnHood = document.querySelector("#front-column-hood")
const column = document.querySelector("#column")

const info = document.querySelector("#info")
const frontColumn = document.querySelector("#front-column")
const productTitle = document.querySelector("#name")

const hightlights = document.querySelectorAll(".highlighted")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show",entry.isIntersecting)
    })
},{
    threshold:1,
})

hightlights.forEach(hightlight => {
    observer.observe(hightlight)
})
