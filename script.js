// Data untuk semua game
const games = [
    { title: 'Kuis Kebun Binatang', icon: '🦁', color: 'text-orange-500', url: 'https://1drv.ms/p/c/ebbab2598af05c47/IQSYoZslYiQpQomMArJ8x_ZFAX04LurhXjqg2lBs4HYOXNY?em=2&wdAr=1.7777777777777777&wdEaaCheck=1' },
    { title: 'Jelajahi Dunia', icon: '🌍', color: 'text-blue-500', url: 'https://1drv.ms/p/c/ebbab2598af05c47/IQSegjm698wUS5RQJI38KlGEAfT6m3sr9oniojTEw9e3UBQ?em=2&wdAr=1.7777777777777777&wdEaaCheck=1' },
    { title: 'Pencarian Pengetahuan', icon: '📚', color: 'text-indigo-500', url: 'https://1drv.ms/p/c/ebbab2598af05c47/IQTheGQvzY2vRq7RUTn0sD8pASgcvY9xYLIcSEruzygRCvk?em=2&wdAr=1.7777777777777777&wdEaaCheck=1' },
    { title: 'Bersama Sahabat Hewan', icon: '🐶', color: 'text-yellow-600', url: 'https://1drv.ms/p/c/ebbab2598af05c47/IQQj1tI83S4_RJnoK6TuQ_YxAWARqbhO6Ie4jV_p_HnOqso?em=2&wdAr=1.7777777777777777&wdEaaCheck=1' },
    { title: 'Mencocokan Makanan', icon: '🍔', color: 'text-amber-600', url: 'https://1drv.ms/p/c/ebbab2598af05c47/IQRoqw2AC-CpSJwMQ4t-5sroAYdIQtP2-HTqK8BsTYq4iRI?em=2&wdAr=1.7777777777777777&wdEaaCheck=1' },
    { title: 'Kuis Geo', icon: '🗺️', color: 'text-green-700', url: 'https://1drv.ms/p/c/ebbab2598af05c47/IQREpMpsnReaS4EHmMxQ1iCfAZxnW9u4lxjnwMIZxMDHlwM?em=2&wdAr=1.7777777777777777&wdEaaCheck=1' },
    { title: 'Mencocokan Landmark', icon: '🏛️', color: 'text-stone-500', url: 'https://1drv.ms/p/c/ebbab2598af05c47/IQTD7DPd5_9gQr2yRvKVu1XuAaT5uZkeC-GdKDItm9H2oi8?em=2&wdAr=1.7777777777777777&wdEaaCheck=1' },
    { title: 'Petualangan Hewan', icon: '🐾', color: 'text-lime-600', url: 'https://1drv.ms/p/c/ebbab2598af05c47/IQTa0RSFxfRWR6pxGaUEHDhWASAPUbiFpW_V0sCnHUoUL0Y?em=2&wdAr=1.7777777777777777&wdEaaCheck=1' },
    { title: 'Kuis Fakta Makanan', icon: '🍎', color: 'text-red-500', url: 'https://1drv.ms/p/c/ebbab2598af05c47/IQQGUL_uThV0TJVegghk1_u0Ae0Wma-42ua_87ZwF5IP4HA?em=2&wdAr=1.7777777777777777&wdEaaCheck=1' },
    { title: 'Kuis Penjelajah Alam', icon: '🌿', color: 'text-green-600', url: 'https://1drv.ms/p/c/ebbab2598af05c47/IQRRLQRpEH-kTrOanBi1xonpAWrnmoaoferVoBzOM0pKA4A?em=2&wdAr=1.7777777777777777&wdEaaCheck=1' }
];

// Ambil elemen-elemen yang dibutuhkan dari DOM
const splashScreen = document.getElementById('splash-screen');
const iconSliderView = document.getElementById('icon-slider-view');
const sliderTrack = document.getElementById('slider-track');
const gameView = document.getElementById('game-view');
const gameFrame = document.getElementById('game-frame');
const backToMenuButton = document.getElementById('back-to-menu-button');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let currentIndex = 0;

// Fungsi untuk membuat slide berdasarkan data
function createSlides() {
    sliderTrack.innerHTML = ''; // Kosongkan dulu tracknya
    games.forEach(game => {
        const slide = document.createElement('div');
        slide.className = "w-full flex-shrink-0 p-4";
        // Jika game.title === 'Kuis Kebun Binatang', 'Jelajahi Dunia', 'Pencarian Pengetahuan', 'Bersama Sahabat Hewan', 'Mencocokan Makanan', 'Kuis Geo', 'Mencocokan Landmark', 'Petualangan Hewan', 'Kuis Fakta Makanan', atau 'Kuis Penjelajah Alam', gunakan background-image lokal dan hilangkan judul
        let customStyle = '';
        let titleHtml = '';
        if (game.title === 'Kuis Kebun Binatang') {
            customStyle = 'background-image:url(\'Kuis Kebun Binatang.png\');background-size:cover;background-position:center;';
            titleHtml = '';
        } else if (game.title === 'Jelajahi Dunia') {
            customStyle = 'background-image:url(\'Jelajahi Dunia.png\');background-size:cover;background-position:center;';
            titleHtml = '';
        } else if (game.title === 'Pencarian Pengetahuan') {
            customStyle = 'background-image:url(\'Pencarian Pengetahuan.png\');background-size:cover;background-position:center;';
            titleHtml = '';
        } else if (game.title === 'Bersama Sahabat Hewan') {
            customStyle = 'background-image:url(\'Bersama Sahabat Hewan.png\');background-size:cover;background-position:center;';
            titleHtml = '';
        } else if (game.title === 'Mencocokan Makanan') {
            customStyle = 'background-image:url(\'Mencocokan Makanan.png\');background-size:cover;background-position:center;';
            titleHtml = '';
        } else if (game.title === 'Kuis Geo') {
            customStyle = 'background-image:url(\'Kuis Geo.png\');background-size:cover;background-position:center;';
            titleHtml = '';
        } else if (game.title === 'Mencocokan Landmark') {
            customStyle = 'background-image:url(\'Mencocokan Landmark.png\');background-size:cover;background-position:center;';
            titleHtml = '';
        } else if (game.title === 'Petualangan Hewan') {
            customStyle = 'background-image:url(\'Petualangan Hewan.png\');background-size:cover;background-position:center;';
            titleHtml = '';
        } else if (game.title === 'Kuis Fakta Makanan') {
            customStyle = 'background-image:url(\'Kuis Fakta Makanan.png\');background-size:cover;background-position:center;';
            titleHtml = '';
        } else if (game.title === 'Kuis Penjelajah Alam') {
            customStyle = 'background-image:url(\'Kuis Penjelajah Alam.png\');background-size:cover;background-position:center;';
            titleHtml = '';
        } else {
            titleHtml = '<h2 class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-slate-800 text-center w-full mb-2">' + game.title + '</h2>';
        }
        slide.innerHTML = 
            '<div class="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center justify-center h-full aspect-square" style="' + customStyle + ';transform:scale(0.83);margin:auto;">' +
                titleHtml +
                '<button data-game-url="' + game.url + '" class="play-game-button bg-sky-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-sky-600 transition-all text-lg w-full mt-auto">' +
                    'Mainkan' +
                '</button>' +
            '</div>';
        sliderTrack.appendChild(slide);
    });
}

// Fungsi untuk menggeser slider
function updateSliderPosition() {
    sliderTrack.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
}

// Event listener saat halaman selesai dimuat
window.addEventListener('load', () => {
    createSlides();
    addPlayButtonListeners();
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
        setTimeout(() => {
            splashScreen.style.display = 'none';
            iconSliderView.classList.remove('hidden');
            iconSliderView.classList.add('flex');
            iconSliderView.classList.remove('opacity-0');
            iconSliderView.classList.add('opacity-100');
        }, 800);
    }, 2000);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % games.length;
    updateSliderPosition();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + games.length) % games.length;
    updateSliderPosition();
});

// Fungsi untuk menampilkan halaman game
function showGame(gameUrl) {
    gameFrame.src = gameUrl;
    iconSliderView.classList.add('hidden'); 
    gameView.classList.remove('hidden'); 
}

// Fungsi untuk kembali ke menu utama
function backToMenu() {
    gameView.classList.add('hidden');
    iconSliderView.classList.remove('hidden');
    gameFrame.src = 'about:blank';
}

// Fungsi untuk menambahkan listener ke semua tombol "Mainkan"
function addPlayButtonListeners() {
    const gamePlayButtons = document.querySelectorAll('.play-game-button');
    gamePlayButtons.forEach(button => {
        button.addEventListener('click', () => {
            const url = button.dataset.gameUrl;
            showGame(url);
        });
    });
}

// Tambahkan event listener untuk tombol kembali
backToMenuButton.addEventListener('click', backToMenu); 