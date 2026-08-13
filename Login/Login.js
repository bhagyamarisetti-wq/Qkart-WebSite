document.getElementById("login").addEventListener("submit",(e)=>{
    e.preventDefault();
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let userData=JSON.parse(localStorage.getItem("userdetails"));
    if(userData.email==email && userData.password==password){
        alert("Login successful")
        window.location.href="../Home/Home.html"
        const msg=new SpeechSynthesisUtterance(
            "hello! your login is succesful.welcome to Qkart_India's biggest shopping app");
            msg.lang="en-US";
            speechSynthesis.speak(msg)
    }else{
        alert("Invalid Credentials!..");
        window.location.reload();
    }

})