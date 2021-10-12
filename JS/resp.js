burger= document.querySelector('.burger')
navbar= document.querySelector('.navbar')
navList= document.querySelector('.nav-list')
rightNav= document.querySelector('.rightNav')



burger.addEventListener('click' ,()=>{

    rightNav.classList.toggle('v-class-resp');
    nav-list.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})



document.querySelector("#about").addEventListener("click", e=>{
    e.preventDefault();

    document.getElementById("#about").onclick = function () {
        location.href = "http://127.0.0.1:5500/IEEE%20HACKATHON/about.html";
        };
    window.location.replace("http://127.0.0.1:5500/IEEE%20HACKATHON/about.html#about");

})

