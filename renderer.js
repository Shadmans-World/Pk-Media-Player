const player = videojs('mediaPlayer');

// File loader
document.getElementById('fileInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const fileUrl = URL.createObjectURL(file);
    const fileName = file.name;

    document.getElementById('fileName').textContent = fileName;

    player.src({ type: file.type, src: fileUrl });
    player.ready(() => player.play());
  }
});

// Subtitle loader
document.getElementById('subtitleInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const subtitleUrl = URL.createObjectURL(file);

    player.addRemoteTextTrack({
      kind: 'subtitles',
      src: subtitleUrl,
      srclang: 'en',
      label: 'English',
      default: true
    }, false);
  }
});

// Playback speed
document.getElementById('speedControl').addEventListener('change', (e) => {
  const rate = parseFloat(e.target.value);
  player.playbackRate(rate);
});

// Volume control
document.getElementById('volumeControl').addEventListener('input', (e) => {
  player.volume(parseFloat(e.target.value));
});
