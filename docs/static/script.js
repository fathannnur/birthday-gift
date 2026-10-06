function mulai() {

    document.querySelector(".container").classList.add("mulai-klik");

    setTimeout(() => {

        document.querySelector(".container").innerHTML = `
            <div class="emoji">🎂</div>

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
        <div class="icon-name">Our Computer</div>
    </div>

    <div class="desktop-icon" onclick="bukaWindow('word')">
        <div class="icon-image">📄</div>
        <div class="icon-name">Microsoft Word</div>
    </div>

    <div class="desktop-icon" onclick="bukaWindow('pictures')">
        <div class="icon-image">🖼️</div>
        <div class="icon-name">Our Pictures</div>
    </div>

    <div class="desktop-icon" onclick="bukaWindow('videos')">
        <div class="icon-image">🎬</div>
        <div class="icon-name">Our Videos</div>
    </div>

    <div class="desktop-icon" onclick="bukaWindow('music')">
        <div class="icon-image">🎵</div>
        <div class="icon-name">Our Music</div>
    </div>

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
                        <span>Our Pictures</span>
                    </div>

                    <div class="start-item" onclick="bukaWindow('videos'); tutupStart()">
                        🎬
                        <span>Our Videos</span>
                    </div>

                    <div class="start-item" onclick="bukaWindow('music'); tutupStart()">
                        🎵
                        <span>Our Music</span>
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
<source src="static/music/birds-of-a-feather.mp3" type="audio/mpeg">        </audio>
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


    // Sembunyikan semua window lain
document.querySelectorAll(".xp-window").forEach(window => {

    if (window.id !== windowId) {

        // Kalau window yang disembunyikan punya video
        const video = window.querySelector("video");

        if (video && !video.paused) {

            video.pause();

            // Lanjutkan musik yang sebelumnya dipause
            if (video === videoSedangDiputar) {
                lanjutkanMusikSetelahVideo();
            }

        }

        window.style.display = "none";
    }

});


    // Kalau window sudah pernah dibuat,
    // tampilkan kembali window tersebut
    const windowLama = document.getElementById(windowId);

    if (windowLama) {

        windowLama.style.display = "block";
        windowLama.style.zIndex = Date.now();

        return;
    }


    let judul = "";


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
                    <p>YTH. Faida Rizqi Raihana</p>
                </div>
            </div>

            <hr>

            <h3>Hii selamat ulang taun yaa incess 💛🎂💗</h3>

            <p>
                semoga yang disemogakan tersemogakan hihi.<br>
                sedih banget ehh cuman bisa ngucapin doang, udah gitu dari jauh lagi,
                jadinya aku cuman bisa bantu doa aja yak..
            </p>

            <p>
                doanya gabisa ku ketik di sini kayanya terlalu panjang,
                cukup aku aja yang tau doanya gimana, jadi fey cukup aminin aja yaa.
            </p>

            <p>
                tapi sedikit aku deskripsikan, singkatnya gini
            </p>

            <p>
                semoga selalu bahagia hidupnya, sehat selalu, tetap ramah,
                dikenal banyak orang sebagai perempuan yang baik hati, murah senyum.
            </p>

            <p>
                semoga panjang umurnya dan hidupnya diisi dengan hal hal bermanfaat
                buat diri sendiri atau orang lain.
            </p>

            <p>
                semoga di ringankan bebannya, cobaannya dapat terlalui dengan mudah
                dan mendapatkan pelajaran terbaik dari beban yang diberikan.
            </p>

            <p>
                semoga selalu dilancarkan rezekinya.
                semoga selalu dikelilingi oleh orang orang baik dan menjadi bagian
                dari orang orang baik itu.
                semoga makin banyak dapat kabar baik dalam hidupnya.
            </p>

            <p>
                semoga cepat lulus kuliahnya, terus jadi bu dokter psi,
                your future psi 🙏🏻
            </p>

            <p>
                dan yang terpenting semoga bisa membuat orang yang fey cintai
                dan orang yang mencintai fey jadi bangga atas semua hasil usaha,
                kerja keras, dan jerit payah yang sudah fey lakukan apapun itu.
            </p>

            <p>
                mungkin kayanya aku rasa ini momen yang tepat buat bilang..<br>
                i remember the moment that when i first time noticed you in august 2024,
                i don't know why but i like you since that and i've been waiting for you until now,
                yaa walaupun cuman 2 taun doang sih nungguinnya gak yang lama lama bgt wkwk.
            </p>

            <p>
                aku seneng banget waktu pertama kali bisa satu meja sama fey terus
                sempat beberapa kali berinteraksi, ya walaupun abis itu kita gapernah
                ngobrol lagi sampe hampir 1 tahun, terus akhirnya kita berinteraksi lagi bulan juni tadi.
            </p>

            <p>
                aku inget fey bilang kalo waktu kita awal awal ngobrol,
                aku selalu ngehindarin kontak mata, it's on purpose btw hahahah:D
            </p>

            <p>
                im scared of your ocean eyes😄
            </p>

            <p>
                btw kamu tau ga, aku suka banget loh sama suara kamu fey,
                gtw lucu aja gitu makanya aku suka denger fey ngomong,
                apalagi pas dibarengin dengan hal random yang fey lakuin
            </p>

            <p>
                the most beautiful thing ever yang aku dapetin sama fey, itu waktu aku motret kamu pake digicam ku,
                i mean i love photography and luckily my favorite person become my subject
            </p>

            <p>
                "the person I love has become the subject of the hobby I love."
            </p>

            <p>
                from the deepest heart<br>
                read it with your heart too haha&lt;3
            </p>

            <p>
                thankss for every pretty good memories, lessons, maupun hal kecil lainnya,
                aku gabisa sebut semua momen indah yang ku dapet selama sama fey,
                tapi setiap tiba tiba keinget aku selalu senyum kok hehe cause it means a lot for me,
                makasii udh nerima aku, ngajak aku ngobrol, sampe kita sedeket ini,
                seneng banget ehh rasanya bisa ngobrol dan berbagi waktu sama kamu feyy,
                anyway don't be a strangers yap😃
            </p>

            <p>
                take care and see you in januari 2027😉
            </p>

            <p>
            btw boleh ga sih bilang<br>
            I love you for a thousand years and more💛
            </p>

            <p>
                - fathan
            </p>
        
        </div>
    `;
}

    if (jenis === "pictures") {

    judul = "Our Pictures";
    icon = "🖼️";

    isi = `
        <div class="folder-toolbar">
            📁 Our Pictures
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

    judul = "Our Videos";
    icon = "🎬";

    isi = `
        <div class="folder-toolbar">
            📁 Our Videos
        </div>

        <div class="video-grid">

            <div class="video-card" onclick="bukaVideo('Aca.mp4', 'Aca')">

                <video
                    muted
                    preload="none"
                    src="static/videos/Aca.mp4">
                </video>

                <div class="video-file-name">
                    Aca
                </div>

            </div>

            <div class="video-card" onclick="bukaVideo('Cantika dan Mala.mp4', 'Cantika dan Mala')">

    <video
        muted
        preload="none"
        src="static/videos/Cantika dan Mala.mp4">
    </video>

    <div class="video-file-name">
        Cantika dan Mala
    </div>

</div>

        </div>
    `;
}


if (jenis === "music") {

    judul = "Our Music";
    icon = "🎵";

    isi = `
        <div class="music-page">

            <div class="folder-toolbar">
                📁 Our Music
            </div>

            <div class="music-section-title">
                💗 Every Single Song Is About You
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
                            src="static/music/Raissa Anggiani Rai Kau Rumahku.mp3"
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
        icon = "🎬";

        isi = `
            <div class="computer-area">

                <div class="drive">
                    💾
                    <span>Birthday Memories</span>
                </div>

                <div class="drive">
                    🖼️
                    <span>Our Pictures</span>
                </div>

                <div class="drive">
                    🎬
                    <span>Our Videos</span>
                </div>

                <div class="drive">
                    📄
                    <span>Birthday Letter</span>
                </div>

                <div class="drive">
                    🎵
                    <span>Our Music</span>
                </div>

            </div>
        `;
    }


    if (jenis === "recycle") {

        judul = "Recycle Bin";
        icon = "🖼️";

        isi = `
            <div class="recycle-area">

                <div class="big-trash">
                    🗑️
                </div>

                <h2>Recycle Bin</h2>

                <p>
                    Gaada yang perlu dibuang di sini 💗
                </p>

                <p>
                    Semua kenangan indah menjadi memori baik dan abadi
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
                    -
                </button>

                <button onclick="maximizeWindow('${windowId}')">
                    ?
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
    // CEK APAKAH INI WINDOW VIDEO
    // =========================================

    const video =
        windowElement.querySelector("video");


    if (video) {

        // Hentikan video
        video.pause();


        // Kalau video ini yang sedang aktif,
        // lanjutkan musik yang sebelumnya dipause
        if (video === videoSedangDiputar) {

            lanjutkanMusikSetelahVideo();

        }

    }


    // =========================================
    // WINDOW BIASA
    // =========================================

    windowElement.remove();
}

function minimizeWindow(id) {

    const windowElement = document.getElementById(id);

    if (!windowElement) {
        return;
    }

    const video = windowElement.querySelector("video");

    if (video && !video.paused) {

        video.pause();

        if (video === videoSedangDiputar) {
            lanjutkanMusikSetelahVideo();
        }

    }

    windowElement.style.display = "none";
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

let audioSebelumVideo = null;
let videoSedangDiputar = null;

function lanjutkanMusikSetelahVideo() {

    if (audioSebelumVideo) {

        audioSebelumVideo.play().catch(error => {
            console.log("Musik gagal dilanjutkan:", error);
        });

    }

    audioSebelumVideo = null;
    videoSedangDiputar = null;
}

document.addEventListener("play", function (event) {

    if (event.target.tagName !== "VIDEO") {
        return;
    }

    const videoBaru = event.target;

    // Kalau ada video lain yang sedang bermain,
    // pause video tersebut
    document.querySelectorAll("video").forEach(video => {

        if (video !== videoBaru && !video.paused) {
            video.pause();
        }

    });

    // Kalau ini video baru
    if (videoSedangDiputar !== videoBaru) {

        videoSedangDiputar = videoBaru;
        audioSebelumVideo = null;

        // Simpan audio yang sedang bermain
        document.querySelectorAll("audio").forEach(audio => {

            if (!audio.paused) {
                audioSebelumVideo = audio;
                audio.pause();
            }

        });

    }

}, true);


document.addEventListener("ended", function (event) {

    if (event.target.tagName !== "VIDEO") {
        return;
    }

    // Kalau ini video yang sedang aktif
    if (videoSedangDiputar === event.target) {

        if (audioSebelumVideo) {

            audioSebelumVideo.play().catch(error => {
                console.log(
                    "Musik gagal dilanjutkan:",
                    error
                );
            });

        }

        audioSebelumVideo = null;
        videoSedangDiputar = null;

    }

}, true);

let ourMusicSedangTerbuka = false;
let ourMusicPernahDiputar = false;
let ourMusicSedangDiputar = false;

function bukaVideo(namaFile, namaVideo) {

    // Tutup video window lain yang sedang terbuka
    document.querySelectorAll(".xp-window").forEach(window => {

        const video = window.querySelector(".video-player-window video");

        if (video) {

            video.pause();

            if (video === videoSedangDiputar) {
                lanjutkanMusikSetelahVideo();
            }

            window.remove();
        }

    });

    const windowId = "video-" + namaVideo;

    windowElement.className = "xp-window";
    windowElement.id = windowId;
    windowElement.style.zIndex = Date.now();

    windowElement.innerHTML = `
        <div class="window-titlebar">

            <div class="window-title">
                🎬 ${namaVideo}.mp4
            </div>

            <div class="window-buttons">

                <button onclick="minimizeWindow('${windowId}')">
                    -
                </button>

                <button onclick="maximizeWindow('${windowId}')">
                    □
                </button>

                <button onclick="tutupWindow('${windowId}')">
                    ×
                </button>

            </div>

        </div>

        <div class="window-content video-player-window">

            <video controls autoplay>
                <source
                    src="static/videos/${namaFile}"
                    type="video/mp4">
            </video>

        </div>
    `;

    document.body.appendChild(windowElement);

    buatWindowBisaDigeser(windowElement);
}