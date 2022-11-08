/* 
VARIABEL

penggunaan variable :
- awalan tidak boleh menggunakan angka dan simbol
- tidak boleh mengandung simbol
- tidak boleh mengandung spasi 

cara mendeklarasi variable menggunakan let / const
let : variabel bisa diubah
const : variabel tidak bisa diubah

*/

// proses deklarasi
let nama_depan = 'ganda' // tipe variabel
const nama_keluarga = 'surya ' // tipe variabel string

nama_depan = 'budi'
// nama_keluarga = 'sultan' // akan terjadi error karena const tidak bisa diubah

// console.log adalah sintak untuk menampilkan variabel
console.log('nama depan : ' + nama_depan);
console.log('nama keluarga : ' + nama_keluarga);

// tipe - tipe variabel
let variabel_striing = 'test' // tipe string atau text
let variabel_angka = 1 // tipe bilangan absolut
let variabel_desimal = 2.1 // tipe desimal
let variabel_boolean = true // nilai variabel hanya bisa true atau false



console.log('\n \n');
/* 
OPERATOR

Operator adalah simbol yang digunakan untuk melakukan operasi pada suatu nilai dan variabel.

*/


let a = 1
let b = 2
let hasil = 0
// contoh operator aritmatika
hasil = a + b
console.log('penjumlahan ' + a + ' + ' + b + ' = ' + hasil);
hasil = a - b
console.log('penjumlahan ' + a + ' - ' + b + ' = ' + hasil);
hasil = a * b
console.log('pengkalian ' + a + ' x ' + b + ' = ' + hasil);
hasil = a / b
console.log('pembagian ' + a + ' : ' + b + ' = ' + hasil);

// contoh operator perbandingan
// perbandingnan sama dengan 
if (a == b) {
    console.log(a + ' == ' + b + ' : ' + 'benar');
} else {
    console.log(a + ' == ' + b + ' : ' + 'salah');
}
// perbandingnan tidak sama dengan 
if (a || b) {
    console.log(a + ' || ' + b + ' : ' + 'benar');
} else {
    console.log(a + ' || ' + b + ' : ' + 'salah');
}
// perbandingnan lebih besar
if (a > b) {
    console.log(a + ' > ' + b + ' : ' + 'benar');
} else {
    console.log(a + ' > ' + b + ' : ' + 'salah');
}

// perbandingnan kurang dari 
if (a < b) {
    console.log(a + ' < ' + b + ' : ' + 'benar');
} else {
    console.log(a + ' < ' + b + ' : ' + 'salah');
}

/* 
FUNCTION

Fungsi adalah sub-program yang bisa digunakan kembali baik di dalam program itu sendiri, maupun di program yang lain.
cara2 membuat fungsi :
1. menggunakan sintak function : 
function nama_fungsi(){
    // kode sub program
}

2. menggunakan sintak panah ""=>" :
const nama_fungsi = ()=>{

} 
*/

// contoh pertama
function namaFungsi1() {
    console.log("Hello World! Fungsi 1");
}
// contoh kedua
var namaFungsi2 = function () {
    console.log("Hello World! Fungsi 2");
}


namaFungsi1() // panggil fungsi pertama
namaFungsi2() // panggil fungsi kedua


// contoh fungsi :
function gabungNamaHewan(hewan1, hewan2) {
    console.log('fungsi gabung nama hewan : ' + hewan1 + hewan2);
}


function tambahHarga(hargaSatu, hargaDua) {
    let totalHarga = hargaSatu + hargaDua
    console.log('jumlah nilai : ' + totalHarga);
}
gabungNamaHewan('buaya', 'kucing')
let harga1 = 10000
let harga2 = 5000
tambahHarga(harga1, harga2)





// tugas :
// 1. buatlah fungsi penggabungan nama depan dan belakang:
// 2. buatlah fungsi menggunakan operator aritmatika (tambah, kurang, kali, bagi):


