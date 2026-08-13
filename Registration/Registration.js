document.getElementById("account").addEventListener("submit",(e)=>{
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password=document.getElementById("password").value
    let mobile=document.getElementById("mobile").value
    
  console.log(name,email,password,mobile) 
  let formData={
    name:name,
    email:email,
    password:password,
    mobile:mobile,
  };
localStorage.setItem("userdetails",JSON.stringify(formData));
alert("Registration sucessful!..")
  window.location.href="../Login/Login.html";
  

})