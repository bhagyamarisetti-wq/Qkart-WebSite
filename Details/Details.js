document.addEventListener("DOMContentLoaded",()=>{
    let allproducts=JSON.parse(localStorage.getItem("allproducts"));
    let productID=localStorage.getItem("productid");
    let productDetails=document.getElementById("productDetails");
    console.log(allproducts,productID,productDetails);
    if(allproducts && productID){
        let selectedProduct=allproducts.find((v)=>{
            return v.id == productID
        });
        if(selectedProduct){
            console.log(selectedProduct);
            let price=Math.round( selectedProduct.price *90);    
productDetails.innerHTML = `
<div class="product-card">
  <div class="left">
        <img src="${selectedProduct.images}" alt="">
    </div>
    <div class="right">
        <h1>${selectedProduct.title}</h1>
        <h3>Brand : ${selectedProduct.brand}</h3>
        <h3>Category : ${selectedProduct.category}</h3>
        <p>${selectedProduct.description}</p>
        <div class="price">
            ₹ ${price}
        </div>
        <div class="buttons">
            <button id="cart">Add To Cart</button>
            <button id="back" onclick=window.open('../Home/Home.html')>Back to home</button>
        </div>
    </div>
</div>
<div class="review">
    <h2>Customer Reviews</h2>
    ${
        selectedProduct.reviews.map((review) => `
            <div class="review-card">
                <div class="stars">
                    ${"❤️".repeat(review.rating)}
                    ${"🩶".repeat(5 - review.rating)}
                </div>
                <p><b>${review.comment}</b></p>
                <p>
                    By <b>${review.reviewerName}</b>
                    on ${new Date(review.date).toLocaleString()}
                </p>
                <br>
            </div>
        `).join("")
    }
</div>
  </div>
`;
// document.getElementById("back").addEventListener("click",()=>{
//     window.location.href="../Home/Home.html"
// });
document.getElementById("cart").addEventListener("click",()=>{
    addProductToCart(selectedProduct)
})
document.getElementById("cart").addEventListener("click",()=>{
  window.location.href="../Cart/cart.html"
})

        }else{
            productDetails.innerHTML="<p>product not available..</p>";
        }
        }else{
            productDetails.innerHTML="<p>no product found</p>";
        }
    })
    function addProductToCart(product){
        // console.log(product);
        let cart=JSON.parse(localStorage.getItem("cart"))|| [];
        cart.push(product);
        localStorage.setItem("cart",JSON.stringify(cart));
        alert("product added succefully")

        
    }
    
