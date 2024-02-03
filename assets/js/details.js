async function getproduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get("m_id");
    console.log(q);
    const response = await fetch(`https://dummyjson.com/products/${q}`);
    const data = await response.json();
    console.log(data);
    const { title, description, price, rating, brand, thumbnail,images } = data;
    document.querySelector(".title").innerHTML = title;
    document.querySelector(".description").innerHTML = "Description: " + description;
    document.querySelector(".price").innerHTML = "Price: " + price + " $";
    document.querySelector(".rating").innerHTML = "Rating: " + rating;
    document.querySelector(".brand").innerHTML = "Brand: " + brand;
    const image =images.map((img) => {
        return `<div class="swiper-slide"><img src="${img}" alt=""></div>`;
    });
    document.querySelector(".swiper-wrapper").innerHTML = image.join("");
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}
getproduct();