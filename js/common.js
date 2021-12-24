window.addEventListener("scroll", ()=>{
    const header = document.getElementById("header");

    let scroll = window.pageYOffset;
    header.classList.toggle("scrollEffect", scroll > 0);
})

function initTheme(){
    if(localStorage.getItem("darkTheme")){
        const body = document.getElementsByTagName("BODY")[0];
        const change_theme_btn = document.querySelector(".change-theme-btn");
        const switch_round = document.querySelector(".switch");
        body.classList.add('changeTheme');
        change_theme_btn.classList.toggle("active");
        switch_round.classList.toggle("active");
    }
}

function controlMenu(){
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("show");
}

function controlSwitchBtn(){
    const change_theme_btn = document.querySelector(".change-theme-btn");
    const switch_round = document.querySelector(".switch");
    change_theme_btn.classList.toggle("active");
    switch_round.classList.toggle("active");
}

function changeTheme(){
    if(localStorage.darkTheme){
        localStorage.removeItem("darkTheme");
    }else{
        localStorage.setItem("darkTheme",true);
    }
    const body = document.getElementsByTagName("BODY")[0];
    body.classList.toggle('changeTheme');
}