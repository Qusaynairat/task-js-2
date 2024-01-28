
async function getproduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get("m_id");
    const response = await fetch(`https://dummyjson.com/products/${q}`);
    const data = await response.json();
    console.log(data);
    const {title, description, price,rating,brand,thumbnail} = data;
    document.querySelector(".title").innerHTML=title;
    document.querySelector(".description").innerHTML="Description: "+description;
    document.querySelector(".price").innerHTML="Price: "+price+" $";
    document.querySelector(".rating").innerHTML="Rating: "+rating;
    document.querySelector(".brand").innerHTML="Brand: "+brand;
    document.querySelector(".image").src=thumbnail;
    
    }
getproduct();