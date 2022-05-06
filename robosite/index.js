//back to top button animation using js

const backTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
    if (window.pageYOffset > 450){
        if(!backTopButton.classList.contains("btnEntrance")){
            backTopButton.classList.remove("btnExit");
            backTopButton.classList.add("btnEntrance");
            backTopButton.style.display = "block";
            }
        } 
        else {
            if (backTopButton.classList.contains("btnEntrance")){
                backTopButton.classList.remove("btnEntrance");
                backTopButton.classList.add("btnExit");
                setTimeout(function() {
                    backTopButton.style.display = "none";
                }, 250);
            }
        }
    }

backTopButton.addEventListener("click", backToTop);

function backToTop(){
    window.scrollTo(0, 0);
}

//navigation open/close

function toggleMobileMenu(menu){
    menu.classList.toggle('open');
}