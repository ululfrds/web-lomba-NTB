var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000, // Atur delay antara slide (dalam milidetik)
        disableOnInteraction: false, // Tetapkan ke false agar slider terus berputar setelah interaksi pengguna
    },
});
