let a = document.getElementById("loginBtn");
let b = document.getElementById("registerBtn");
let x = document.getElementById("login");
let y = document.getElementById("register");

function login() {
  x.style.left = "4px";
  y.style.right = "-520px";
  a.className += " white-btn";
  b.className = "btn";
}

function register() {
  x.style.left = "-520px";
  y.style.right = "5px";
  a.className = "btn";
  b.className += " white-btn";
}


function myMenuFunction(){
    let i = document.getElementById("navMenu");

    if(i.className === "nav-menu"){
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}