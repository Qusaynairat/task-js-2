async function getproducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
    const mobiles = data.products;
    console.log(mobiles);
    const result = mobiles.map((mobile) => {
        
        return `
        <div class="product">
        <img src="${mobile.thumbnail}" alt="">
        <h2><span>Title : </span> ${mobile.title}</h2>
        <h3><span>Price : </span>${mobile.price} $</h3>
        <h4><span>Brand : </span>${mobile.brand}</h4>
        </div>`
});
document.querySelector(".products").innerHTML=result.join(""); 
}
getproducts();
