const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// scroll on

// Mengambil semua link yang memiliki hash (#)
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

// Loop melalui setiap link dan menambahkan event listener
smoothScrollLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

// Fungsi untuk menganimasikan scroll
function smoothScroll(e) {
  e.preventDefault();

  const targetId = this.getAttribute("href").substring(1); // Ambil id tanpa tanda #
  const targetElement = document.getElementById(targetId); // Ambil elemen target berdasarkan id

  if (targetElement) {
    const targetPosition = targetElement.offsetTop; // Dapatkan posisi offset dari elemen target
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth", // Animasi smooth scroll
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Tambahkan class 'loaded' ke body setelah semua konten dimuat
  document.body.classList.add("loaded");

  // Mengambil semua link yang memiliki hash (#)
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  // Loop melalui setiap link dan menambahkan event listener
  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  // Fungsi untuk menganimasikan scroll
  function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1); // Ambil id tanpa tanda #
    const targetElement = document.getElementById(targetId); // Ambil elemen target berdasarkan id

    if (targetElement) {
      const targetPosition = targetElement.offsetTop; // Dapatkan posisi offset dari elemen target
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth", // Animasi smooth scroll
      });
    }
  }
});
