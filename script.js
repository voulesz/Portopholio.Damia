// Fungsi untuk cek apakah elemen terlihat di viewport
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Ambil semua elemen dengan class .fade-in
const fadeElements = document.querySelectorAll('.fade-in');

// Cek setiap elemen saat halaman di-scroll
function checkScroll() {
    fadeElements.forEach(element => {
        if (isInView(element)) {
            element.classList.add('visible');  // Tambahkan class "visible"
        }
    });
}

// Jalankan fungsi checkScroll saat scroll terjadi
window.addEventListener('scroll', checkScroll);

// Panggil fungsi checkScroll saat pertama kali halaman dimuat untuk elemen yang sudah terlihat
document.addEventListener('DOMContentLoaded', checkScroll);
