document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.style.opacity = '0';
    setTimeout(() => {
        header.style.transition = 'opacity 0.5s ease-in-out';
        header.style.opacity = '1';
    }, 300);

    const main = document.querySelector('main');
    main.style.opacity = '0';
    setTimeout(() => {
        main.style.transition = 'opacity 0.5s ease-in-out';
        main.style.opacity = '1';
    }, 500);
});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const destination = document.getElementById('destination').value;

    if (!name || !email || !phone || !date || !destination) {
        alert('Harap lengkapi semua kolom!');
        event.preventDefault(); // Mencegah formulir untuk dikirim jika ada kolom yang kosong
    }
});
