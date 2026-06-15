async function registerUser() {
    event.preventDefault()
    uname=document.getElementById("username").value;
    uemail=document.getElementById("email").value;
    pwd=document.getElementById("password").value;
    cpwd=document.getElementById("cpassword").value;
    const user={
        username:uname,
        email:uemail,
        password:pwd,
        cpassword:cpwd
    }
    const data=JSON.stringify(user);
    flag=await fetch("http://localhost:3000/users",{
        method:"POST",
        body:data
    })
    if (flag){
        alert("Registration Successful");
        window.location.href="./login.html";
    }
}

async function validateUser(){
    event.preventDefault();
    uname=document.getElementById("username").value;
    pwd=document.getElementById("password").value;
    
    if (pwd){
        response=await fetch("http://localhost:3000/users");
        data=await response.json();
        if (data.some(ele=>ele.username===uname && ele.password===pwd)){
            window.location.href="./dashboard.html"
        }
    }
}