const form = document.getElementById("login-form");
const button = document.getElementById("button");

button.addEventListener("click", (e) =>{
    e.preventDefault();
    const username = form.username.value;
    const password = form.password.value;
    
    if(username == "user" && password == "user"){
        location.href = "/birodavidka/keret/vizual-v2.html";
    } else if(username == "keret" && password == "keret"){
        location.href = "/birodavidka/keret/keret.html";
    }
     else if(username == "krib" && password == "krib"){
    location.href = "/birodavidka/keret/krib.html";
     }else {
        alert("username or pass not correct")
    }
    // else {
    //     alert("username or pass not correct");
    // }
});
