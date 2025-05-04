# 🎵 PK Media Player

**PK Media Player** is a lightweight desktop media player built using [Electron.js](https://www.electronjs.org/), capable of playing video and audio files with support for custom playback controls, drag-and-drop functionality, subtitle files, and limited multi-audio track selection.

![PK Media Player Screenshot](./screenshot.png) <!-- Replace with actual screenshot path -->

---

## 🚀 Features

- 📁 Drag and drop support for media files
- ▶️ Play and pause video/audio
- 🔊 Volume control
- ⏩ Playback speed control (0.5x – 2x)
- 🎧 Switch between multiple audio tracks (if available)
- 📜 Load subtitle files (`.vtt` format supported)
- 📂 Open files manually through file picker

---

## 📦 Tech Stack

- **Electron.js** – for creating the desktop application
- **HTML/CSS/JavaScript** – for building the UI and logic

---

## 📷 Screenshots

> Replace these with your actual screenshots:

| Drop Area | Media Playing |
|-----------|----------------|
| ![Drop Area](./screenshots/drop-area.png) | ![Media Playing](./screenshots/media-playing.png) |

---

## 🛠️ Installation & Usage

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16+ recommended)
- [Git](https://git-scm.com/)

### Clone the Repository

```bash
git clone https://github.com/Shadmans-World/Pk-Media-Player.git
cd Pk-Media-Player
Install Dependencies
bash
Copy
Edit
npm install
Start the Application
bash
Copy
Edit
npm start
Build Executable (Windows)
bash
Copy
Edit
npm run build
Output .exe file will be in the dist/ folder.

🧪 How to Use
Open the app using npm start or your built .exe file.

Drag and drop any audio/video file into the drop zone, or use the file input.

Control playback using:

Play/Pause button

Volume slider

Playback speed slider

Audio track dropdown (if available)

Add subtitle .vtt files by modifying the HTML or loading dynamically.

📁 Project Structure
bash
Copy
Edit
Pk-Media-Player/
├── node_modules/
├── public/
│   └── subtitles.vtt       # Example subtitle file
├── main.js                 # Electron main process
├── index.html              # App UI
├── renderer.js             # Frontend logic
├── style.css               # Stylesheet
├── package.json
└── README.md

 📝 License
This project is licensed under the MIT License.

🙌 Acknowledgments
Built with ❤️ using Electron.js

Icons by Lucide or any open-source set (if used)

Special thanks to the open-source community

📫 Contact
Md. Shadman Shoumik Shaon Pk
📍 Wari, Dhaka, Bangladesh
🌐 shadmans-world.github.io
📧 shshaon99@gmail.com