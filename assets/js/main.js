// import axios from 'axios';
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
        <a href="details.html?m_id=${mobile.id}">Details</a>
        </div>`
    });

    document.querySelector(".products").innerHTML = result.join("");
    const img = data.products.map((img) => {
        return `<div class="swiper-slide"><img src="${img.thumbnail}" alt=""></div>`;
    });
    document.querySelector(".swiper-wrapper").innerHTML = img.join("");
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        clickable: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        // Navigation arrows
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });
}
getproducts();
