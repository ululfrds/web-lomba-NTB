// Memilih semua elemen yang diperlukan
const filterItem = document.querySelector(".items");
const filterImages = document.querySelectorAll(".image");

window.onload = () => {
    const filterItems = document.querySelectorAll(".item");
    const filterImages = document.querySelectorAll(".image");

    filterItems.forEach((item) => {
        item.addEventListener("click", () => {
            const selectedCategory = item.getAttribute("data-name");

            // Hapus kelas "active" dari semua item
            filterItems.forEach((item) => {
                item.classList.remove("active");
            });

            // Tambahkan kelas "active" ke item yang dipilih
            item.classList.add("active");

            // Tampilkan gambar yang sesuai dengan kategori yang dipilih, sembunyikan yang lain
            filterImages.forEach((image) => {
                const imageCategory = image.getAttribute("data-name");
                if (selectedCategory === "semua" || selectedCategory === imageCategory) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            });
        });
    });
};



document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image');
    const previewBox = document.querySelector('.preview-box');
    const previewImage = previewBox.querySelector('img');
    const closeIcon = previewBox.querySelector('.close-icon');

    images.forEach(function (image) {
        image.addEventListener('click', function () {
            const imgSrc = image.querySelector('img').src;
            previewImage.src = imgSrc;
            previewBox.style.display = 'block'; // Menampilkan tampilan layar penuh
        });
    });

    closeIcon.addEventListener('click', function () {
        previewBox.style.display = 'none'; // Menyembunyikan tampilan layar penuh
    });
});

