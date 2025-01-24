let ASIDE_STATES = {
    TOC: 0,
    PROFILE: 1,
};
let aside_state = 0;

const toc_aside_content = ' \
    <figure class="toc-figure"> \
        <img src="assets/photo0.jpg" alt="ogoh-ogoh"> \
        <div class="overlay"></div> \
        <figcaption>sumber : infinitymountainbiking.com</figcaption> \
    </figure> \
    <h1 class="toc-title">DAFTAR ISI</h1> \
    <ul class="toc-list"> \
        <li><a href="#deskripsi-singkat">Deskripsi singkat</a></li> \
        <li><a href="#sejarah">Sejarah</a></li> \
        <li class="list-item-inset"><a href="#asal-usul">Asal Usul</li></a> \
        <li><a href="#penyelenggaraan">Penyelenggaraan</a></li> \
        <li class="list-item-inset"><a href="#tujuan">Tujuan</li></a> \
        <li class="list-item-inset"><a href="#pembuatan">Pembuatan</li></a> \
        <li><a href="#pesan-moral">Nilai Moral</a></li> \
        <li><a href="#referensi">Referensi</a></li> \
    </ul> \
    <a class="home" href="#"><img src="assets/icons/home.svg" alt="home button"></a> \
    <div class="aside-content-overlay"></div> \
'
const profile_aside_content = ' \
    <figure class="prfl-figure"> \
        <img src="assets/self.png" alt="profil picture saya"> \
        <div class="overlay"></div> \
        <figcaption>email saya! : widhyadana2008@gmail.com</figcaption> \
    </figure> \
    <h1 class="prfl-title">I Wayan Widhyadana<br>Sadhu Gunawan</h1> \
    <p class="prfl-desc"> \
        “ Haiii, Salam kenal! biasa dipanggil <span class="highlight">Yana</span>. Saya salah satu siswa kelas 10 di <span class="highlight">SMK Negeri 1 Denpasar</span>, bangga berjurus <span class="highlight">RPL</span> dan bangga juga menjadi salah satu member didikan <span class="highlight">Dicoding Academy</span>. “ \
    </p> \
    <a class="home" href="#"><img src="assets/icons/home.svg" alt="home button"></a> \
    <div class="aside-content-overlay"></div> \
'

function handleAsideSwitch(state) {
    if (state === aside_state) return;

    const aside = document.querySelector('aside');
    const aside_buttons = aside.firstElementChild
    const aside_content = aside.lastElementChild;
    switch(state) {
        case ASIDE_STATES.TOC:
            aside_content.innerHTML = toc_aside_content;
            aside_state = state;
            switchAsideButton(aside_buttons.children, 0);
            break;
        case ASIDE_STATES.PROFILE:
            aside_content.innerHTML = profile_aside_content;
            switchAsideButton(aside_buttons.children, 1);
            aside_state = state;
            break;
    }
}

function switchAsideButton(aside_button_ref, active_ind) {
    for(let i = 0; i < aside_button_ref.length; i++) {
        if (active_ind === i) {
            aside_button_ref[i].classList.add('button-active');
            continue;
        }
        aside_button_ref[i].classList.remove('button-active');
    }
}