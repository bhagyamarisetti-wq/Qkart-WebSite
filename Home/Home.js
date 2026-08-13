let product=[];

function fetchData() {
    fetch("https://dummyjson.com/products")
    .then((res)=>{
        return res.json()
    })
    .then((v)=>{
        // console.log(v.products);
        product = v.products;
        localStorage.setItem("allproducts",JSON.stringify(product));
         displayProduct(product);
        
    });
}
function displayProduct(prod){
    console.log(prod);
    let output="";
    prod.map((val)=>{
          output += `
<div class="card">
    <img src="${val.images}">

    <h2>${val.title}</h2>

    <div class="info">
        <div class="rating">⭐ ${val.rating}</div>
        <h3 class="price">₹${val.price*90}</h3>
    </div>

    <div class="bottom">
        <p class="stock"><b>InStock:</b> ${val.stock}</p>
        <button onclick="viewMore(${val.id})">Details</button>
    </div>
</div>
`;    
        
    });
    document.getElementById("productcontainer").innerHTML = output;
    
}
fetchData();
document.getElementById("searchProduct").addEventListener("input",(e)=>{
    let searchTerm=e.target.value.toLowerCase();
    let filteredProduct = product.filter((v)=>{
        return(
            v.title.toLowerCase().includes(searchTerm)||
            v.category.toLowerCase().includes(searchTerm)
        );
    });


displayProduct(filteredProduct)
});

function viewMore(id){
    // console.log(id);
    localStorage.setItem("productid",id);
    window.location.href="../Details/Details.html"
}



