const burgerbtn = document.querySelector(".burger");
const navitems = document.querySelector(".primary-header-navigation-items")

const bgColumn = document.querySelector("#bg-column")
const frontColumnHood = document.querySelector("#front-column-hood")
const column = document.querySelector("#column")

const info = document.querySelector("#info")
const frontColumn = document.querySelector("#front-column")
const productTitle = document.querySelector("#name")

window.addEventListener('scroll',() => {
    let value = window.scrollY
    bgColumn.style.top = value*1.05 +'px'
    frontColumnHood.style.top = value*0.5 +'px'
    column.style.top = value*0.2 +'px'
    frontColumn.style.top = value* 0 +'px'
    productTitle.style.marginTop = value * 0.2 +'px'
})

burgerbtn.addEventListener("click",() => navitems.classList.toggle("active"))