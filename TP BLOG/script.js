document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('background-audio');
  const controlBtn = document.getElementById('audio-control-btn');

  // Set initial volume
  audio.volume = 0.1; // 20% volume
  console.log('Initial audio volume set to:', audio.volume);

  // Load muted state from localStorage
  const isMuted = localStorage.getItem('audioMuted') === 'true';
  audio.muted = isMuted;
  console.log('Initial muted state:', audio.muted);

  // Initial state: audio not playing
  let isPlaying = false;
  controlBtn.textContent = '▶️'; // Play icon initially

  // Control playback and mute/unmute
  controlBtn.addEventListener('click', () => {
    if (!isPlaying) {
      // Start playback
      audio.play().then(() => {
        isPlaying = true;
        controlBtn.textContent = audio.muted ? '🔇' : '🔊';
        console.log('Audio started, volume:', audio.volume, 'muted:', audio.muted);
      }).catch((error) => {
        console.log('Error playing audio:', error);
      });
    } else {
      // Toggle mute/unmute
      audio.muted = !audio.muted;
      controlBtn.textContent = audio.muted ? '🔇' : '🔊';
      localStorage.setItem('audioMuted', audio.muted);
      console.log('Toggled mute, muted:', audio.muted, 'volume:', audio.volume);
    }
  });
});