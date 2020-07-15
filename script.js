// Menangkap pilihan computer

let getPilihanKomputer = () =>{
    let comp = Math.random(); 

    if (comp < 0.34) return 'gajah';
    if( comp >= 0.34 && comp < 0.67) return 'orang';
    else return 'semut';

}


// Menangkap hasil

let hasil = (comp, player)=>{
    if( player == comp) return 'SERI !';
    if( player == 'gajah') return ( comp == 'orang' ) ? 'MENANG !' : 'KALAH !';
    if( player == 'orang') return ( comp == 'semut' ) ? 'MENANG !' : 'KALAH !'; //OPERATOR TERNARY
    if ( player == 'semut') return (comp == 'gajah') ? 'MENANG !' : 'KALAH !';
    return 'memasukan pilihan yang salah';
}

// Membuat efek pilihan komputer acak

let putar = ()=>{
    const getGambar = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();// new adalah constructor di js oop
    // untuk mengambil waktu disaat fungsi dijalankan dengan getTime()

    setInterval(function () {
       if(new Date().getTime() - waktuMulai > 1000 ){//mengambil waktu saat gambar diulang lalu dikurang waktu mulai
        // jika lebih dari 1 detik atau 1000mili second maka keluar dari interval
           clearInterval;
           return;
       }
       getGambar.setAttribute('src', 'img/' +  gambar[i++] + '.png');
       if( i == gambar.length) i = 0;
    }, 100)
}




// Menangkap pilihan user

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {//parameter sebagai representasi satu pilihan dari banyaknya yang diulang
    pil.addEventListener('click', function () {

    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pil.className;//mengubah query selector sesuai dengan class yang dimiliki element
    const getHasil = hasil(pilihanKomputer, pilihanPlayer);

    putar();

    setTimeout(function() {// setTimeout dapat membuat program dijalankan setelah waktu yang ditentukan
        const imgKomputer = document.querySelector('.img-komputer');
        
        imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');
    
        document.querySelector('.info').innerHTML = getHasil;
    }, 1000);

    setTimeout(function(){

        score(getHasil);

    }, 1020);

    

    });
});


// Membuat Score

var p = 1;
var k = 1;

let score = (hasil)=>{
    let scorePlayer = document.querySelector('.player span');
    let scoreKomputer = document.querySelector('.komputer span');

    if(hasil == 'MENANG !') scorePlayer.innerHTML = p++;
    if(hasil == 'KALAH !') scoreKomputer.innerHTML = k++;

}


// Reset

let resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', function(){
    
    p = 0;
    k = 0;

    document.querySelector('.player span').innerHTML = p;
    document.querySelector('.komputer span').innerHTML = k;
});
