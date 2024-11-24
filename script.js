const heartsContainer = document.querySelector(".hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Posisi acak di layar
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 6 + "s"; // Durasi animasi acak

  // Tingkat kecerahan acak untuk opacity
  const opacity = Math.random() * 0.8 + 0.2; // Opacity antara 0.2 dan 1
  heart.style.opacity = opacity;

  // Ukuran acak (lebih besar dari sebelumnya)
  const size = Math.random() * 40 + 20; // Ukuran antara 20px hingga 60px
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;

  // Sudut awal mengikuti arah (rotasi acak agar unik)
  const rotationAngle = Math.random() * 90 - 45; // Sudut rotasi acak (-45 hingga 45 derajat)
  heart.style.transform = `rotate(${rotationAngle}deg)`;

  // Tambahkan SVG bentuk hati
  heart.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 29.6">
            <path d="M23.6,0c-3.4,0-5.7,2.1-7.6,4.2C14.1,2.1,11.8,0,8.4,0C3.7,0,0,3.6,0,8.3c0,9.4,16,17.9,16,17.9
            s16-8.5,16-17.9C32,3.6,28.3,0,23.6,0z"/>
        </svg>
    `;
  heartsContainer.appendChild(heart);

  // Hapus elemen setelah animasi selesai
  const animationDuration = parseFloat(heart.style.animationDuration) * 1000; // Durasi animasi dalam milidetik
  setTimeout(() => {
    heart.remove();
  }, animationDuration); // Menghapus hati setelah animasi selesai
}

// Tambahkan hati setiap 100ms agar terlihat lebih banyak
setInterval(createHeart, 100); // Lebih sering menambahkan hati

const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.style.pointerEvents = "none"; // Nonaktifkan interaksi setelah musik mulai
  }
});
