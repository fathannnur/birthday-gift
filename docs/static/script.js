function mulai() {

    document.querySelector(".container").classList.add("mulai-klik");

    setTimeout(() => {

        document.querySelector(".container").innerHTML = `
            <div class="emoji">ðŸ’Œ</div>

            <h1 id="typing"></h1>

            <p>
                Aku ada hadiah kecil buat feyyðŸ’ž
            </p>

            <button onclick="bukaHadiah()">
                Buka Hadiah ðŸŽ
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
                    <div class="icon-image">ðŸ—‘ï¸</div>
                    <div class="icon-name">Recycle Bin</div>
                </div>

                <div class="desktop-icon" onclick="bukaWindow('computer')">
                    <div class="icon-image">ðŸ’»</div>
                    <div class="icon-name">Our Computer</div>
                </div>

                <div class="desktop-icon" onclick="bukaWindow('word')">
                    <div class="icon-image">ðŸ“„</div>
                    <div class="icon-name">Microsoft Word</div>
                </div>

                <div class="desktop-icon" onclick="bukaWindow('pictures')">
                    <div class="icon-image">ðŸ–¼ï¸</div>
                    <div class="icon-name">Our Pictures</div>
                </div>

                <div class="desktop-icon" onclick="bukaWindow('videos')">
                    <div class="icon-image">ðŸŽ¬</div>
                    <div class="icon-name">Our Videos</div>
                </div>

                <div class="desktop-icon" onclick="bukaWindow('music')">
                    <div class="icon-image">ðŸŽµ</div>
                    <div class="icon-name">Our Music</div>
                </div>

            </div>

            <div id="windows-area"></div>

            <div class="start-menu" id="startMenu">

                <div class="start-header">
                    <div class="start-avatar">ðŸ’—</div>

                    <div>
                        <div class="start-name">Birthday Girl</div>
                        <div class="start-subtitle">ðŸ’— special edition</div>
                    </div>
                </div>

                <div class="start-content">

                    <div class="start-item" onclick="bukaWindow('word'); tutupStart()">
                        ðŸ“„
                        <span>Birthday Letter</span>
                    </div>

                    <div class="start-item" onclick="bukaWindow('pictures'); tutupStart()">
                        ðŸ–¼ï¸
                        <span>Our Pictures</span>
                    </div>

                    <div class="start-item" onclick="bukaWindow('videos'); tutupStart()">
                        ðŸŽ¬
                        <span>Our Videos</span>
                    </div>

                    <div class="start-item" onclick="bukaWindow('music'); tutupStart()">
                        ðŸŽµ
                        <span>Our Music</span>
                    </div>

                </div>

                <div class="start-footer">

                    <button onclick="tutupStart()">
                        ðŸ’— Close
                    </button>

                </div>

            </div>

            <div class="taskbar">

                <button class="start-button" onclick="toggleStart()">
                    <span class="windows-logo">ðŸªŸ</span>
                    <span>start</span>
                </button>

                <div class="taskbar-middle">
                    <div class="taskbar-task">
                        ðŸ’— Birthday Gift
                    </div>
                </div>

                <div class="system-tray">
                    <span>ðŸ”Š</span>
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

    music.play().catch(error => {
        console.log("Audio belum bisa diputar:", error);
    });
}


function bukaWindow(jenis) {

    const area = document.getElementById("windows-area");

    const windowId = "window-" + jenis;

    // Kalau window sudah ada, jangan buat ulang.
    // Cukup tampilkan kembali.
    const windowLama = document.getElementById(windowId);

    if (windowLama) {

        windowLama.style.display = "block";
        windowLama.style.zIndex = Date.now();

        return;
    }

    let judul = "";


    if (jenis === "word") {

    judul = "Microsoft Word";
    icon = "ðŸ“„";

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
                    <h2>Birthday Letter ðŸ’—</h2>
                    <p>Untuk seseorang yang spesial</p>
                </div>
            </div>

            <hr>

            <h3>Selamat Ulang Tahun, Feyy! ðŸŽ‚ðŸ’—</h3>

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
                ðŸ’—ðŸ’—ðŸ’—
            </p>

        </div>
    `;
}


    if (jenis === "pictures") {

    judul = "Our Pictures";
    icon = "ðŸ–¼ï¸";

    isi = `
        <div class="folder-toolbar">
            ðŸ“ Our Pictures
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
                        My Favorite OneðŸ’—
                    </div>

                    <div class="caption-text">
                        I Love Photography, Luckily My Favorite Person Become My SubjectðŸ’ž
                    </div>

                </div>

            </div>

        </div>
    `;
}


    if (jenis === "videos") {

        judul = "Our Videos";
        icon = "ðŸŽ¬";

        isi = `
            <div class="folder-toolbar">
                ðŸ“ Our Videos
            </div>

            <div class="video-list">

                <div class="video-placeholder">
                    ðŸŽ¬
                    <div>
                        <strong>Video 1</strong>
                        <small>Ucapan dari teman</small>
                    </div>
                </div>

                <div class="video-placeholder">
                    ðŸŽ¬
                    <div>
                        <strong>Video 2</strong>
                        <small>Ucapan dari teman</small>
                    </div>
                </div>

                <div class="video-placeholder">
                    ðŸŽ¬
                    <div>
                        <strong>Video 3</strong>
                        <small>Ucapan dari teman</small>
                    </div>
                </div>

            </div>
        `;
    }


    if (jenis === "music") {

    judul = "Our Music";
    icon = "ðŸŽµ";

    isi = `
        <div class="music-page">

            <div class="folder-toolbar">
                ðŸ“ Our Music
            </div>

            <div class="music-section-title">
                ðŸ’— Every Single Song Is About You
            </div>


            <!-- BIRDS OF A FEATHER -->

            <div class="featured-song">

                <div class="music-cover">
                    ðŸŽµ
                </div>

                <div class="featured-info">

                    <h2>Birds of a Feather</h2>

                    <p class="artist">
                        Billie Eilish
                    </p>

                    <p class="music-message">
                        This song reminds me of you. ðŸ’—
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
                    ðŸ¡
                </div>

                <div class="featured-info">

                    <h2>Kau Rumahku</h2>

                    <p class="artist">
                        Raissa Anggiani
                    </p>

                    <p class="music-message">
                        Somehow, you always feel like home ðŸ’—
                    </p>

                    <audio controls>
                        <source
                            src="static/music/Raissa Anggiani Rai Kau Rumahku.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>

            </div>


            <div class="music-section-title playlist-title">
                ðŸŽ§ My Playlist
            </div>


            <div class="playlist">


                <!-- 1. LAST KISS -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        01
                    </div>

                    <div class="playlist-info">

                        <strong>Last Kiss</strong>

                        <span>Taylor Swift</span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/Last Kiss.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


                <!-- 2. MATILDA -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        02
                    </div>

                    <div class="playlist-info">

                        <strong>Matilda</strong>

                        <span>Harry Styles</span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/Matilda.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


                <!-- 3. YOU AND I -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        03
                    </div>

                    <div class="playlist-info">

                        <strong>You And I</strong>

                        <span>One Direction</span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/You I.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


                <!-- 4. A THOUSAND YEARS -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        04
                    </div>

                    <div class="playlist-info">

                        <strong>A Thousand Years</strong>

                        <span>Christina Perri</span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/Christina Perri A Thousand Years.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


                <!-- 5. ALL OF ME -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        05
                    </div>

                    <div class="playlist-info">

                        <strong>All Of Me</strong>

                        <span>John Legend</span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/John Legend All of Me Lyrics.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


                <!-- 6. YELLOW -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        06
                    </div>

                    <div class="playlist-info">

                        <strong>Yellow</strong>

                        <span>Coldplay</span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/Coldplay Yellow Official Video.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


                <!-- 7. SPARKS -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        07
                    </div>

                    <div class="playlist-info">

                        <strong>Sparks</strong>

                        <span>Coldplay</span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/coldplay sparks lyrics.mp3"
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

                        <span>mrld</span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/mrld An Art Gallery Could Never Be As Unique As You Official Audio.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


                <!-- 9. OCEAN EYES -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        09
                    </div>

                    <div class="playlist-info">

                        <strong>Ocean Eyes</strong>

                        <span>Billie Eilish</span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/ocean eyes.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


                <!-- 10. ANYTHING YOU WANT -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        10
                    </div>

                    <div class="playlist-info">

                        <strong>Anything You Want</strong>

                        <span>Reality Club</span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/Reality Club Anything You Want Official Lyric Video.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


                <!-- 11. ENCHANTED -->

                <div class="playlist-song">

                    <div class="playlist-number">
                        11
                    </div>

                    <div class="playlist-info">

                        <strong>Enchanted</strong>

                        <span>Taylor Swift</span>

                    </div>

                    <audio controls>
                        <source
                            src="static/music/Taylor Swift Enchanted.mp3"
                            type="audio/mpeg">
                    </audio>

                </div>


            </div>

        </div>
    `;
    }

    if (jenis === "computer") {

        judul = "Our Computer";
        icon = "ðŸ’»";

        isi = `
            <div class="computer-area">

                <div class="drive">
                    ðŸ’¾
                    <span>Birthday Memories</span>
                </div>

                <div class="drive">
                    ðŸ“
                    <span>Our Pictures</span>
                </div>

                <div class="drive">
                    ðŸ“
                    <span>Our Videos</span>
                </div>

                <div class="drive">
                    ðŸ“„
                    <span>Birthday Letter</span>
                </div>

                <div class="drive">
                    ðŸŽµ
                    <span>Our Music</span>
                </div>

            </div>
        `;
    }


    if (jenis === "recycle") {

        judul = "Recycle Bin";
        icon = "ðŸ—‘ï¸";

        isi = `
            <div class="recycle-area">

                <div class="big-trash">
                    ðŸ—‘ï¸
                </div>

                <h2>Recycle Bin</h2>

                <p>
                    Tidak ada yang perlu dibuang di sini ðŸ’—
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
                    âˆ’
                </button>

                <button onclick="maximizeWindow('${windowId}')">
                    â–¡
                </button>

                <button onclick="tutupWindow('${windowId}')">
                    Ã—
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
                        Ã—
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

    const windowElement =
        document.getElementById(id);

    if (!windowElement) {
        return;
    }


    // =========================================
    // CEK APAKAH INI OUR MUSIC
    // =========================================

    const iniOurMusic =
        windowElement.querySelector(".music-page");


    if (iniOurMusic) {

        const laguOurMusic =
            windowElement.querySelectorAll(".music-page audio");


        // Simpan status SEBELUM lagu dihentikan
        const laguSedangDiputar =
            Array.from(laguOurMusic)
                .some(lagu => !lagu.paused);


        // Matikan semua lagu Our Music
        laguOurMusic.forEach(lagu => {
            lagu.pause();
        });


        // Hapus window
        windowElement.remove();


        // =========================================
        // HANYA NYALAKAN MUSIK UTAMA
        // JIKA LAGU OUR MUSIC MEMANG SEDANG MAIN
        // SAAT TOMBOL X DITEKAN
        // =========================================

        if (laguSedangDiputar) {

            const musikUtama =
                document.getElementById("birthdayMusic");


            if (musikUtama) {

                musikUtama.play()
                    .catch(() => {});

            }

        }


        ourMusicSedangTerbuka = false;
        ourMusicPernahDiputar = false;
        ourMusicSedangDiputar = false;
        musikUtamaSedangDipauseOlehOurMusic = false;

        return;
    }


    // =========================================
    // WINDOW BIASA
    // =========================================

    windowElement.remove();
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
        "ðŸ’—",
        "ðŸ’•",
        "ðŸ’–",
        "ðŸ’“",
        "ðŸ’˜"
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

let musikUtamaSedangDipauseOlehOurMusic = false;


document.addEventListener("play", function (event) {

    if (event.target.tagName !== "AUDIO") {
        return;
    }

    const musikUtama =
        document.getElementById("birthdayMusic");


    // =========================================
    // MUSIK UTAMA WEBSITE
    // =========================================

    if (event.target.id === "birthdayMusic") {

        document
            .querySelectorAll(".music-page audio")
            .forEach(lagu => {

                if (!lagu.paused) {
                    lagu.pause();
                }

            });

        musikUtamaSedangDipauseOlehOurMusic = false;

        return;
    }


    // =========================================
    // LAGU DI OUR MUSIC
    // =========================================

    if (event.target.closest(".music-page")) {

        ourMusicSedangTerbuka = true;
        ourMusicPernahDiputar = true;
        ourMusicSedangDiputar = true;


        // Pause musik utama
        if (musikUtama && !musikUtama.paused) {

            musikUtamaSedangDipauseOlehOurMusic = true;

            musikUtama.pause();

        }


        // Hanya satu lagu Our Music yang boleh bermain
        document
            .querySelectorAll(".music-page audio")
            .forEach(lagu => {

                if (lagu !== event.target) {
                    lagu.pause();
                }

            });

    }

}, true);

document.addEventListener("pause", function (event) {

    if (event.target.tagName !== "AUDIO") {
        return;
    }


    // Pause musik utama
    if (event.target.id === "birthdayMusic") {
        return;
    }


    // Pause lagu Our Music
    if (event.target.closest(".music-page")) {

        const masihAdaLagu =
            Array.from(
                document.querySelectorAll(".music-page audio")
            ).some(lagu => !lagu.paused);


        ourMusicSedangDiputar = masihAdaLagu;

    }

}, true);

let ourMusicSedangTerbuka = false;
let ourMusicPernahDiputar = false;
let ourMusicSedangDiputar = false;

