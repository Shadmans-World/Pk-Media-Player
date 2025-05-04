// Get references to the drop area, file input, media element, and controls
const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('fileInput');
const mediaElement = document.getElementById('mediaElement');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeSlider = document.getElementById('volumeSlider');
const speedSlider = document.getElementById('speedSlider');
const audioTrackSelect = document.getElementById('audioTrackSelect');

// Handle the file drop
dropArea.addEventListener('drop', (event) => {
  event.preventDefault();
  dropArea.classList.remove('dragover');
  const file = event.dataTransfer.files[0];
  loadMedia(file);
});

// Handle drag over
dropArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropArea.classList.add('dragover');
});

// Handle drag leave
dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('dragover');
});

// Handle file selection via input
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  loadMedia(file);
});

// Function to load media file
function loadMedia(file) {
  const fileType = file.type;
  if (fileType.startsWith('video') || fileType.startsWith('audio')) {
    const fileURL = URL.createObjectURL(file);
    mediaElement.src = fileURL;
    mediaElement.play();
    populateAudioTracks(); // Populate audio tracks (if any)
  } else {
    alert('Please drop a valid video or audio file.');
  }
}

// Play/Pause toggle
playPauseBtn.addEventListener('click', () => {
  if (mediaElement.paused) {
    mediaElement.play();
  } else {
    mediaElement.pause();
  }
});

// Volume control slider
volumeSlider.addEventListener('input', (event) => {
  mediaElement.volume = event.target.value;
});

// Playback speed control
speedSlider.addEventListener('input', (event) => {
  mediaElement.playbackRate = event.target.value;
});

// Populate audio tracks (if available)
function populateAudioTracks() {
  audioTrackSelect.innerHTML = ''; // Clear existing options
  const audioTracks = mediaElement.audioTracks;
  if (audioTracks && audioTracks.length > 0) {
    audioTracks.forEach((track, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `Audio Track ${index + 1}`;
      audioTrackSelect.appendChild(option);
    });
    audioTrackSelect.addEventListener('change', (event) => {
      switchAudioTrack(event.target.value);
    });
  } else {
    audioTrackSelect.disabled = true; // Disable if no audio tracks
  }
}

// Switch audio track based on user selection
function switchAudioTrack(trackIndex) {
  const audioTracks = mediaElement.audioTracks;
  if (audioTracks && audioTracks.length > 0) {
    for (let i = 0; i < audioTracks.length; i++) {
      audioTracks[i].enabled = (i == trackIndex);
    }
  }
}
