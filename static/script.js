function mulai() {

    document.querySelector(".container").classList.add("mulai-klik");

    setTimeout(() => {

        document.querySelector(".container").innerHTML = `
            <div class="emoji">💌</div>

            <h1 id="typing"></h1>

            <p>
                Aku ada hadiah kecil buat feyy💞
            </p>

            <button onclick="bukaHadiah()">
                Buka Hadiah 🎁
            </button>
        `;

        efekTyping();

    }, 300);
}


function efekTyping() {

    const teks = "KALO GASALAH KAMU ULTAH KAN YA...";

    const elemen = document.getElementById("typing");

    let index = 0;

    function ketik() {

        if (index < teks.length) {

            elemen.innerHTML += teks.charAt(index);

            index++;

            setTimeout(ketik, 70);
        }
    }

    ketik();
}


function bukaHadiah() {

    // Hapus foto lama jika masih ada
    document.querySelectorAll(".foto").forEach(foto => {
        foto.remove();
    });

    // Hapus elemen surprise lama jika masih ada
    document.querySelectorAll(".surprise-photo").forEach(foto => {
        foto.remove();
    });

    // Hapus audio lama jika ada
    const oldMusic = document.getElementById("birthdayMusic");
    if (oldMusic) {
        oldMusic.remove();
    }

    document.querySelector(".container").innerHTML = `
        <div class="desktop">

            <div class="desktop-icons">

                <div class="desktop-icon" onclick="bukaWindow('recycle')">
                    <div class="icon-image">🗑️</div>
                    <div class="icon-name">Recycle Bin</div>
                </div>

                <div class="desktop-icon" onclick="bukaWindow('computer')">
                    <div class="icon-image">💻</div>
                    <div class="icon-name">My Computer</div>
                </div>

                <div class="desktop-icon" onclick="bukaWindow('word')">
                    <div class="icon-image">📄</div>
                    <div class="icon-name">Microsoft Word</div>
                </div>

                <div class="desktop-icon" onclick="bukaWindow('pictures')">
                    <div class="icon-image">🖼️</div>
                    <div class="icon-name">My Pictures</div>
                </div>

                <div class="desktop-icon" onclick="bukaWindow('videos')">
                    <div class="icon-image">🎬</div>
                    <div class="icon-name">My Videos</div>
                </div>

                <div class="desktop-icon" onclick="bukaWindow('music')">
                    <div class="icon-image">🎵</div>
                    <div class="icon-name">My Music</div>
                </div>

            </div>

            <div id="windows-area"></div>

            <div class="start-menu" id="startMenu">

                <div class="start-header">
                    <div class="start-avatar">💗</div>

                    <div>
                        <div class="start-name">Birthday Girl</div>
                        <div class="start-subtitle">💗 special edition</div>
                    </div>
                </div>

                <div class="start-content">

                    <div class="start-item" onclick="bukaWindow('word'); tutupStart()">
                        📄
                        <span>Birthday Letter</span>
                    </div>

                    <div class="start-item" onclick="bukaWindow('pictures'); tutupStart()">
                        🖼️
                        <span>My Pictures</span>
                    </div>

                    <div class="start-item" onclick="bukaWindow('videos'); tutupStart()">
                        🎬
                        <span>My Videos</span>
                    </div>

                    <div class="start-item" onclick="bukaWindow('music'); tutupStart()">
                        🎵
                        <span>My Music</span>
                    </div>

                </div>

                <div class="start-footer">

                    <button onclick="tutupStart()">
                        💗 Close
                    </button>

                </div>

            </div>

            <div class="taskbar">

                <button class="start-button" onclick="toggleStart()">
                    <span class="windows-logo">🪟</span>
                    <span>start</span>
                </button>

                <div class="taskbar-middle">
                    <div class="taskbar-task">
                        💗 Birthday Gift
                    </div>
                </div>

                <div class="system-tray">
                    <span>🔊</span>
                    <span id="clock">00:00</span>
                </div>

            </div>

        </div>

        <!-- Musik utama website -->
        <audio id="birthdayMusic" loop>
            <source src="static/music/birds-of-a-feather.mp3" type="audio/mpeg">
        </audio>
    `;

    mulaiJam();

    // Mulai lagu setelah Feyy menekan tombol masuk
    const music = document.getElementById("birthdayMusic");

music.volume = 0.5;
music.currentTime = 0;

music.play();
}


function bukaWindow(jenis) {

    const area = document.getElementById("windows-area");

    // Tutup semua window yang sedang terbuka
    document.querySelectorAll(".xp-window").forEach(window => {
        window.remove();
    });

    const windowId = "window-" + jenis;

    const windowLama = document.getElementById(windowId);

    if (windowLama) {

        windowLama.style.display = "block";

        windowLama.style.zIndex = Date.now();

        return;
    }


    let judul = "";
    let icon = "";
    let isi = "";


    if (jenis === "word") {

    judul = "Microsoft Word";
    icon = "📄";

    isi = `
        <div class="word-toolbar">
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Insert</span>
            <span>Format</span>
            <span>Tools</span>
        </div>

        <div class="word-page">

            <div class="word-header">
                <div class="word-logo"></div>

                <div>
                    <h2>Birthday Letter 💗</h2>
                    <p>Untuk seseorang yang spesial</p>
                </div>
            </div>

            <hr>

            <h3>Selamat Ulang Tahun, Feyy! 🎂💗</h3>

            <p>
                Isi surat panjang untuk Feyy nanti kita masukkan di sini.
            </p>

            <p>
                Bagian ini akan menjadi surat utama yang bisa dibaca
                ketika Microsoft Word dibuka.
            </p>

            <p>
                Nanti kita isi dengan ucapan yang kamu sudah siapkan.
            </p>

            <p>
                💗💗💗
            </p>

        </div>
    `;
}


    if (jenis === "pictures") {

    judul = "My Pictures";
    icon = "🖼️";

    isi = `
        <div class="folder-toolbar">
            📁 My Pictures
        </div>

        <div class="file-area">

            <div class="file-placeholder"
                onclick="bukaFoto('static/pictures/foto 1.jpeg', 'Foto 1')">
                <img src="static/pictures/foto 1.jpeg" alt="Foto 1">
                <span>Foto 1</span>
            </div>

            <div class="file-placeholder"
                onclick="bukaFoto('static/pictures/foto 2.jpeg', 'Foto 2')">
                <img src="static/pictures/foto 2.jpeg" alt="Foto 2">
                <span>Foto 2</span>
            </div>

            <div class="file-placeholder"
                onclick="bukaFoto('static/pictures/foto 3.jpeg', 'Foto 3')">
                <img src="static/pictures/foto 3.jpeg" alt="Foto 3">
                <span>Foto 3</span>
            </div>

            <div class="file-placeholder"
                onclick="bukaFoto('static/pictures/foto 4.jpeg', 'Foto 4')">
                <img src="static/pictures/foto 4.jpeg" alt="Foto 4">
                <span>Foto 4</span>
            </div>

            <div class="file-placeholder"
                onclick="bukaFoto('static/pictures/foto 5.jpeg', 'Foto 5')">
                <img src="static/pictures/foto 5.jpeg" alt="Foto 5">
                <span>Foto 5</span>
            </div>

            <div class="file-placeholder"
                onclick="bukaFoto('static/pictures/foto 6.jpeg', 'Foto 6')">
                <img src="static/pictures/foto 6.jpeg" alt="Foto 6">
                <span>Foto 6</span>
            </div>

            <div class="file-placeholder special-picture"
                onclick="bukaFoto('static/pictures/foto.digicam.jpeg', 'Foto Digicam')">

                <img src="static/pictures/foto.digicam.jpeg" alt="Foto Digicam">

                <div class="picture-caption">

                    <div class="caption-title">
                        My Favorite One💗
                    </div>

                    <div class="caption-text">
                        I Love Photography, Luckily My Favorite Person Become My Subject💞
                    </div>

                </div>

            </div>

        </div>
    `;
}


    if (jenis === "videos") {

        judul = "My Videos";
        icon = "🎬";

        isi = `
            <div class="folder-toolbar">
                📁 My Videos
            </div>

            <div class="video-list">

                <div class="video-placeholder">
                    🎬
                    <div>
                        <strong>Video 1</strong>
                        <small>Ucapan dari teman</small>
                    </div>
                </div>

                <div class="video-placeholder">
                    🎬
                    <div>
                        <strong>Video 2</strong>
                        <small>Ucapan dari teman</small>
                    </div>
                </div>

                <div class="video-placeholder">
                    🎬
                    <div>
                        <strong>Video 3</strong>
                        <small>Ucapan dari teman</small>
                    </div>
                </div>

            </div>
        `;
    }


if (jenis === "music") {

    judul = "My Music";
    icon = "🎵";

    isi = `
        <div class="music-page">

            <div class="folder-toolbar">
                📁 My Music
            </div>

            <div class="music-section-title">
                💗 Songs I Picked For You
            </div>


            <!-- BIRDS OF A FEATHER -->

            <div class="featured-song">

                <div class="music-cover">
                    🎵
                </div>

                <div class="featured-info">

                    <h2>Birds of a Feather</h2>

                    <p class="artist">
                        Billie Eilish
                    </p>

                    <p class="music-message">
                        This song reminds me of you. 💗
                    </p>

                    <audio controls>
                        <source
                            src="static/music/birds-of-a-feather.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>

            </div>


            <!-- KAU RUMAHKU -->

            <div class="featured-song">

                <div class="music-cover">
                    🏡
                </div>

                <div class="featured-info">

                    <h2>Kau Rumahku</h2>

                    <p class="artist">
                        Raissa Anggiani
                    </p>

                    <p class="music-message">
                        Somehow, you always feel like home 💗
                    </p>

                    <audio controls>
                        <source
                            src="static/music/Kau Rumahku - Raissa Anggiani - Copy.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>

            </div>


            <div class="music-section-title playlist-title">
                🎧 My Playlist
            </div>


            <div class="playlist">


                <!-- 1. LAST KISS -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        01
                    </div>

                    <div class="playlist-info">

                        <strong>
                            Last Kiss
                        </strong>

                        <span>
                            Taylor Swift
                        </span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/Last Kiss - Taylor Swift - Copy.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


                <!-- 2. MATILDA -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        02
                    </div>

                    <div class="playlist-info">

                        <strong>
                            Matilda
                        </strong>

                        <span>
                            Harry Styles
                        </span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/Matilda - Harry Styles - Copy.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


                <!-- 3. YOU AND I -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        03
                    </div>

                    <div class="playlist-info">

                        <strong>
                            You And I
                        </strong>

                        <span>
                            One Direction
                        </span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/You And I - One Direction - Copy.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


                <!-- 4. A THOUSAND YEARS -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        04
                    </div>

                    <div class="playlist-info">

                        <strong>
                            A Thousand Years
                        </strong>

                        <span>
                            Christina Perri
                        </span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/a thousand years - christina perri - Copy.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


                <!-- 5. ALL OF ME -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        05
                    </div>

                    <div class="playlist-info">

                        <strong>
                            All Of Me
                        </strong>

                        <span>
                            John Legend
                        </span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/All Of Me - John Legend - Copy.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


                <!-- 6. YELLOW -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        06
                    </div>

                    <div class="playlist-info">

                        <strong>
                            Yellow
                        </strong>

                        <span>
                            Coldplay
                        </span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/Yellow - Coldplay - Copy.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


                <!-- 7. SPARKS -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        07
                    </div>

                    <div class="playlist-info">

                        <strong>
                            Sparks
                        </strong>

                        <span>
                            Coldplay
                        </span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/Sparks - Coldplay - Copy.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


                <!-- 8. AN ART GALLERY -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        08
                    </div>

                    <div class="playlist-info">

                        <strong>
                            An Art Gallery Could Never Be As Unique As You
                        </strong>

                        <span>
                            mrld
                        </span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/An Art Gallery Could Never Be As Unique As You - mrld - Copy.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


                <!-- 9. OCEAN EYES -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        09
                    </div>

                    <div class="playlist-info">

                        <strong>
                            Ocean Eyes
                        </strong>

                        <span>
                            Billie Eilish
                        </span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/ocean eyes - Billie Eilish - Copy.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


                <!-- 10. ANYTHING YOU WANT -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        10
                    </div>

                    <div class="playlist-info">

                        <strong>
                            Anything You Want
                        </strong>

                        <span>
                            Reality Club
                        </span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/Anything You Want - Reality Club - Copy.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


                <!-- 11. ENCHANTED -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        11
                    </div>

                    <div class="playlist-info">

                        <strong>
                            Enchanted
                        </strong>

                        <span>
                            Taylor Swift
                        </span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/Enchanted - Taylor Swift - Copy.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


            </div>

        </div>
    `;
}


    if (jenis === "computer") {

        judul = "My Computer";
        icon = "💻";

        isi = `
            <div class="computer-area">

                <div class="drive">
                    💾
                    <span>Birthday Memories</span>
                </div>

                <div class="drive">
                    📁
                    <span>My Pictures</span>
                </div>

                <div class="drive">
                    📁
                    <span>My Videos</span>
                </div>

                <div class="drive">
                    📄
                    <span>Birthday Letter</span>
                </div>

                <div class="drive">
                    🎵
                    <span>My Music</span>
                </div>

            </div>
        `;
    }


    if (jenis === "recycle") {

        judul = "Recycle Bin";
        icon = "🗑️";

        isi = `
            <div class="recycle-area">

                <div class="big-trash">
                    🗑️
                </div>

                <h2>Recycle Bin</h2>

                <p>
                    Tidak ada yang perlu dibuang di sini 💗
                </p>

                <p>
                    Semua kenangan masih disimpan.
                </p>

            </div>
        `;
    }


    const windowElement = document.createElement("div");

    windowElement.className = "xp-window";

    windowElement.id = windowId;

    windowElement.style.zIndex = Date.now();


    windowElement.innerHTML = `

        <div class="window-titlebar">

            <div class="window-title">
                ${icon} ${judul}
            </div>

            <div class="window-buttons">

                <button onclick="minimizeWindow('${windowId}')">
                    −
                </button>

                <button onclick="maximizeWindow('${windowId}')">
                    □
                </button>

                <button onclick="tutupWindow('${windowId}')">
                    ×
                </button>

            </div>

        </div>

        <div class="window-content">

            ${isi}

        </div>
    `;


    area.appendChild(windowElement);

    windowElement.addEventListener("mousedown", () => {

        windowElement.style.zIndex = Date.now();

    });


    buatWindowBisaDigeser(windowElement);
}

function bukaFoto(src, nama) {

    const existing = document.getElementById("photo-viewer");

    if (existing) {
        existing.remove();
    }

    const viewer = document.createElement("div");

    viewer.id = "photo-viewer";

    viewer.innerHTML = `
        <div class="photo-viewer-overlay" onclick="tutupFoto(event)">

            <div class="photo-viewer-box" onclick="event.stopPropagation()">

                <div class="photo-viewer-title">
                    ${nama}

                    <button onclick="tutupFoto()">
                        ×
                    </button>
                </div>

                <div class="photo-viewer-content">
                    <img src="${src}" alt="${nama}">
                </div>

            </div>

        </div>
    `;

    document.body.appendChild(viewer);
}


function tutupFoto() {

    const viewer = document.getElementById("photo-viewer");

    if (viewer) {
        viewer.remove();
    }
}

function tutupWindow(id) {

    const windowElement = document.getElementById(id);

    if (windowElement) {
        windowElement.remove();
    }
}


function minimizeWindow(id) {

    const windowElement = document.getElementById(id);

    if (windowElement) {

        windowElement.style.display = "none";

    }
}


function maximizeWindow(id) {

    const windowElement = document.getElementById(id);

    if (!windowElement) {
        return;
    }

    windowElement.classList.toggle("maximized");
}


function buatWindowBisaDigeser(windowElement) {

    const titlebar =
        windowElement.querySelector(".window-titlebar");

    let sedangGeser = false;

    let offsetX = 0;
    let offsetY = 0;


    titlebar.addEventListener("mousedown", (event) => {

        if (event.target.tagName === "BUTTON") {
            return;
        }

        sedangGeser = true;

        const rect =
            windowElement.getBoundingClientRect();

        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;

        windowElement.style.zIndex = Date.now();

    });


    document.addEventListener("mousemove", (event) => {

        if (!sedangGeser) {
            return;
        }

        windowElement.style.left =
            event.clientX - offsetX + "px";

        windowElement.style.top =
            event.clientY - offsetY + "px";

        windowElement.style.transform = "none";

    });


    document.addEventListener("mouseup", () => {

        sedangGeser = false;

    });
}


function toggleStart() {

    const startMenu =
        document.getElementById("startMenu");

    if (!startMenu) {
        return;
    }

    startMenu.classList.toggle("show");
}


function tutupStart() {

    const startMenu =
        document.getElementById("startMenu");

    if (startMenu) {
        startMenu.classList.remove("show");
    }
}


function mulaiJam() {

    function updateClock() {

        const clock =
            document.getElementById("clock");

        if (!clock) {
            return;
        }

        const sekarang = new Date();

        const jam =
            String(sekarang.getHours()).padStart(2, "0");

        const menit =
            String(sekarang.getMinutes()).padStart(2, "0");

        clock.innerHTML =
            `${jam}:${menit}`;
    }

    updateClock();

    setInterval(updateClock, 1000);
}


function buatHati() {

    const hearts =
        document.getElementById("hearts");

    if (!hearts) {
        return;
    }

    const heart =
        document.createElement("div");

    heart.classList.add("heart-fall");

    const jenisHati = [
        "💗",
        "💕",
        "💖",
        "💓",
        "💘"
    ];

    heart.innerHTML =
        jenisHati[
            Math.floor(
                Math.random() * jenisHati.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 15 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 3 + 4 + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);
}


setInterval(buatHati, 800);

let musikUtamaHarusKembali = false;


document.addEventListener("play", function (event) {

    if (
        event.target.tagName === "AUDIO" &&
        event.target.id !== "birthdayMusic"
    ) {

        const musikUtama =
            document.getElementById("birthdayMusic");

        if (!musikUtama) {
            return;
        }

        // Simpan status musik utama sebelum dihentikan
        musikUtamaHarusKembali = !musikUtama.paused;

        // Hentikan musik utama
        musikUtama.pause();
    }

}, true);


document.addEventListener("pause", function (event) {

    if (
        event.target.tagName === "AUDIO" &&
        event.target.id !== "birthdayMusic"
    ) {

        const musikUtama =
            document.getElementById("birthdayMusic");

        if (!musikUtama) {
            return;
        }

        // Kalau musik utama sebelumnya memang sedang menyala
        if (musikUtamaHarusKembali) {

            musikUtama.play()
                .then(() => {
                    musikUtamaHarusKembali = false;
                })
                .catch(error => {
                    console.log(
                        "Musik utama gagal diputar kembali:",
                        error
                    );
                });
        }
    }

}, true);
