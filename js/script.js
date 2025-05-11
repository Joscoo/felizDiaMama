const music = document.getElementById("bg-music");
const toggleButton = document.getElementById("music-toggle");
const modal = document.getElementById("lyrics-modal"); // 💡 Añadido aquí

let isPlaying = false;

toggleButton.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    toggleButton.textContent = "🔈 House of Gold - Twenty One Pilots";
  } else {
    music.play();
    toggleButton.textContent = "🔊 Reproduciendo House of Gold - Twenty One Pilots";
  }
  isPlaying = !isPlaying;
});

// Mostrar modal
document.getElementById('show-lyrics').addEventListener('click', () => {
  modal.style.display = 'block';
});

// Cerrar modal desde la X
document.querySelector('.close-btn').addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Cerrar desde botón inferior
document.getElementById('closeModalBtn').addEventListener('click', function () {
  modal.style.display = 'none';
});

document.getElementById('closeModalBtn').addEventListener('click', function () {
  modal.style.display = 'none';
});
