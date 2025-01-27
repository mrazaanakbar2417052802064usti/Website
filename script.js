const navbarToggle = document.getElementById('navbar-toggle');
const navbar = document.querySelector('.navbar');

navbarToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


    document.addEventListener("DOMContentLoaded", function() {
        const scrollElements = document.querySelectorAll('.scroll');

        const options = {
            root: null, // Menggunakan viewport sebagai root
            rootMargin: '0px',
            threshold: 0.1 // 10% dari elemen harus terlihat
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible'); // Hapus kelas saat elemen tidak terlihat
                }
            });
        }, options);

        scrollElements.forEach(element => {
            observer.observe(element); // Mulai mengamati setiap elemen
        });
    });