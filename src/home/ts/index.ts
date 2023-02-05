//CSS: global
import "../../sass/index.scss"
//CSS: home
import "./../../home/sass/index.scss"



const angleArrow = document.querySelector('.nav__arrow-right') as HTMLDivElement
const sidebar = document.querySelector(".sidebar") as HTMLDivElement
const container = document.querySelector(".container") as HTMLDivElement

angleArrow.addEventListener('click',(e:any)=>{
    e.target.className ="fa fa-angle-left";
    sidebar.classList.toggle('sidebar--active')

    container.classList.toggle("container--sidebar-active")
})