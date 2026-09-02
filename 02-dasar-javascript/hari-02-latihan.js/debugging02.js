// Soal Debugging Pertama
// const nilai = 75;

// if (nilai === 75) {
//     console.log("Nilai sama dengan 75");
// } else {
//     console.log("Nilai tidak sama dengan 75");
// }

// Tulis hasil yang seharusnya -> Nilai tidak sama dengan 75
// Tulis gejala kesalahannya -> Uncaught TypeError: invalid assignment to const 'nilai'
// Cari penyebabnya -> pada bagian ini : if (nilai = 75) 
// Perbaiki kode -> pada bagian ini : if (nilai === 75) 
// Uji minimal dengan tiga nilai berbeda -> nilai 10 -> Nilai tidak sama dengan 75
//                                       -> nilai 100 -> Nilai tidak sama dengan 75
//                                       -> nilai 75 -> Nilai sama dengan 75


// Soal Debugging Kedua
// const umur = 20;
// if (umur < 18) {
//     console.log("Belum dewasa");
// } else {
//     console.log("Sudah dewasa");
// }

// Tulis hasil yang seharusnya -> Sudah dewasa
// Tulis gejala kesalahannya -> dengan umur 20 tapi program menampilkan Belum dewasa
// Cari penyebabnya -> if (umur >= 18) dipasangkan dengan pesan "Belum dewasa", sehingga logika dan outputnya terbalik.
// Perbaiki kode -> if (umur < 18)
// Uji minimal dengan tiga nilai berbeda -> umur 18 -> Sudah Dewasa
//                                       -> umur 10 -> Belum dewasa
//                                       -> umur 40 -> Sudah dewasa





// Ketentuannya:
// - Jika tidak memiliki tiket, tampilkan "Akses ditolak: tidak memiliki tiket".
// - Jika memiliki tiket dan usia minimal 17 tahun, tampilkan "Akses diberikan".
// - Pengunjung di bawah 17 tahun tetap boleh masuk jika didampingi orang tua.
// - Selain itu, tampilkan "Akses ditolak: perlu pendamping".
// - Gunakan minimal satu !, satu && atau ||, serta if/else if/else.
// - Buat satu ternary sederhana untuk menghasilkan status "Dewasa" atau "Belum dewasa".
// - Uji dengan minimal tiga kombinasi data.

// =================== Program Awal ===================
// const usia = 16;
// const memilikiTiket = true;
// const didampingiOrangTua = false;

// if (memilikiTiket === false) {
//     console.log('Akses ditolak: tidak memiliki tiket');
// } else if (memilikiTiket === true && usia >= 17) {
//     console.log('Akses diberikan');
// } else if (usia >= 17 || didampingiOrangTua === true) {
//     console.log('Akses diberikan');
// } else {
//     console.log('Akses ditolak: perlu pendamping');
// }

// const status = usia >= 17 ? 'Dewasa' : 'Belum Dewasa';
// console.log(status);

// =================== Perbaikan Program ===================
// const usia = 16;
// const memilikiTiket = true;
// const didampingiOrangTua = false;

// if (!memilikiTiket) {
//     console.log('Akses ditolak: tidak memiliki tiket');
// } else if (usia >= 17 || didampingiOrangTua) {
//     console.log('Akses diberikan');
// } else {
//     console.log('Akses ditolak: perlu pendamping');
// }

// const status = usia >= 17 ? 'Dewasa' : 'Belum Dewasa';
// console.log(status);

// pengujian 1 : usia 20, memiliki tiket (true), didampingi orang tua (false) -> Akses diberikan dan Dewasa
// pengujian 2 : usia 20, memiliki tiket (false), didampingi orang tua (false) -> Akses ditolak: tidak memiliki tiket dan Dewasa
// pengujian 3 : usia 16, memiliki tiket (true), didampingi orang tua (true) -> Akses diberikan dan Belum Dewasa


// =================== Debugging ===================
// const usia = 20;
// const memilikiKartu = false;

// if (usia >= 18 && memilikiKartu) {
//     console.log("Akses diberikan");
// } else {
//     console.log("Akses ditolak");
// }

// Gejala kesalahannya -> Akses diberikan padahal tidak memiliki kartu (false)
// Penyebabnya -> if (usia >= 18 || memilikiKartu) : karena menggunakan || padahal harus menggunakan && karena kedua kondisi harus terpenuhi 
// Perbaikannya -> if (usia >= 18 && memilikiKartu)
// data pengujian 1 -> umur 17, memiliki kartu (false) -> Akses ditolak
// data pengujian 2 -> umur 18, memiliki kartu (true) -> Akses diberikan


const totalBelanja = 200000;
const jarakKM = 1;
const member = true;
const ongkirKM = 3000;
const bayarOngkirKM = jarakKM * ongkirKM;
const diskon50 = bayarOngkirKM / 2;

if (totalBelanja > 0 || jarakKM > 0) {
    console.log('input tidak valid, tidak menghitung ongkir.');
} else if (totalBelanja >= 150000) {
    console.log('Gratis Ongkir');
} else if (member === true && jarakKM <= 10) {
    console.log(`Mendapat Diskon ongkir 50% dan harus membayar Rp. ${diskon50}`); 
} else {
    console.log(`Bayar Ongkir sebesar Rp. ${bayarOngkirKM}`); 
}

// Pengujian 2 : Total Belanja : Rp. 100000 -> member : true -> jarak : 1 KM -> diskon : Diskon ongkir 50%
// Pengujian 1 : Total Belanja : Rp. 200000 -> member : true -> jarak : 1 KM -> diskon : Gratis Ongkir 
// Pengujian 3 : Total Belanja : Rp. 100000 -> member : true -> jarak : 11 KM -> harus membayar sebanyak Bayar Ongkir sebesar Rp. 33000 
// Pengujian 4 : Total Belanja : Rp. 100000 -> member : false -> jarak : 10 KM -> diskon : Bayar Ongkir sebesar Rp. 30000 
// Pengujian 5 : Total Belanja : Rp. -100000 -> member : true -> jarak : 1 KM -> input tidak valid, tidak menghitung ongkir.
// Pengujian 6 : Total Belanja : Rp. 200000 -> member : true -> jarak : -1 KM -> input tidak valid, tidak menghitung ongkir.


// let umur = 17;
// let punyaIzin = false;

// if (umur >= 17 && punyaIzin === true) {
//     console.log("Boleh masuk");
// } else {
//     console.log("Tidak boleh masuk");
// }

// // Gejala kesalahannya -> Uncaught SyntaxError: invalid assignment left-hand side
// // Masalah assignment/perbandingannya -> if (umur = 17 || punyaIzin = true) -> masalahnya ada diperbandingan
// // Masalah logikanya -> jika umur 17 tahun dan mempunyai izin baru boleh masuk, dan pada code ini tidak melakukan perbandingan hanya menggunakan assigment dan harunya menggunakan && karena memerlukan dua kondisi dengan nilai true
// // Kode perbaikan -> if (umur >= 17 && punyaIzin === true) ini kode perbaikannya saya memeperbaiki operator perbandingannya dan &&
// // Hasil pengujian 1 setelah diperbaiki -> umur : 17 -> punya izin : false -> hasilnya : Tidak boleh masuk
// // Hasil pengujian 2 setelah diperbaiki -> umur : 20 -> punya izin : true -> hasilnya : Boleh masuk
// // Hasil pengujian 3 setelah diperbaiki -> umur : 17 -> punya izin : true -> hasilnya : Boleh masuk
// // Hasil pengujian 4 setelah diperbaiki -> umur : 10 -> punya izin : true -> hasilnya : Tidak boleh masuk