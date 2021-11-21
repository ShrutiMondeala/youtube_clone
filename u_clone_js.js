var a= document.querySelector(".menu_icon");

var sidebar = document.querySelector(".sidebar");

var main = document.querySelector(".main");

a.onclick = function(){
    sidebar.classList.toggle("sidecollaps");
    main.classList.toggle("largemain");
}

