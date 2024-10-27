function filterContent(category) {
    // Ambil semua elemen dengan class "card"
    const cards = document.querySelectorAll('.card');
  
    // Loop melalui setiap elemen card
    cards.forEach(card => {
      // Cek kategori dari data-category setiap card
      if (category === 'All' || card.getAttribute('data-category') === category) {
        // Tampilkan card jika kategorinya cocok atau "Semua" dipilih
        card.classList.remove('hidden');
      } else {
        // Sembunyikan card jika kategorinya tidak cocok
        card.classList.add('hidden');
      }
    });
  }
  window.onload = () =>{
    filterProduct("All");
}