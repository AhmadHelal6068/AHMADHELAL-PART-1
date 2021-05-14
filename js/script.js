const NavToggle = document.querySelector(".nav-toggle"),
      NavSlider = document.querySelector(".nav-left"),
      NavRemove = document.querySelector(".nav-remove"),
      Landing = document.querySelector(".landing");

NavToggle.onclick = function(){
    NavSlider.classList.add("active");
    NavSlider.classList.add("show");
}
NavRemove.onclick = function(){
    NavSlider.classList.remove("active");
}
Landing.onclick = function(){
    NavSlider.classList.remove("active");
    centerNav.classList.remove("active");
}


const centerNav = document.querySelector(".center-ul"),
      centerToggle = document.querySelector(".center-toggle");

centerToggle.onclick = function(){
    centerNav.classList.toggle("active")
    centerNav.classList.add("show");
}


var infoClick = document.querySelector(".text-1");
var infoBotton = document.querySelectorAll(".info-bottom");

infoClick.addEventListener("click", (event) => {
    if(event.target.classList.contains("info-a")){

        const valueA = event.target.getAttribute("data-a");

        infoBotton.forEach((bul) =>{
            if(bul.classList.contains(valueA)){
                // console.log(bul);
                document.querySelector(".info-bottom.active").classList.remove("active");
                bul.classList.add("active");
                bul.classList.add("show");
            }
        })
    }
})
