document.addEventListener("DOMContentLoaded", ()=>{
    displayCart()
})

function displayCart(){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    let cartContent=document.getElementById("cartContent");
    let totalPrice=document.getElementById("totalPrice")
    
    let totalBill=0;
    if(cart.length==0){
        cartContent.innerHTML="<p>Your cat is empty start shopping...</p>"
        totalPrice.innerHTML=""
    }else{
        cart.map((v,i)=>{
            totalBill+=v.price*90;
        let newElement=document.createElement("div")
        newElement.setAttribute("class","prod-info");
        newElement.innerHTML=`
        <div class="img-prod">
          <div class="img">
             <img src= "${v.images}" >
          </div>
         <div id="details"><h1>${v.title}</h1>
             <p >${v.warrantyInformation}</p>
             <p>${v.availabilityStatus}</p>
             <p>${v.price}</p></div>
             <div><button onclick="removeFromCart(${i})">Remove</button></div>
         </div>
       
         
        `;
        cartContent.append(newElement);
        totalPrice.innerHTML=`<p id="bill">Total Amount is ${totalBill} </p>`
        })
    }

}

function removeFromCart(i){
        let cart=JSON.parse(localStorage.getItem("cart"));
        cart.splice(i,1)
        localStorage.setItem("cart",JSON.stringify(cart));
        window.location.reload();
}