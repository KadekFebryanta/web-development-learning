// Proyek Perbandingan menggunakan >, <, >=, <=, ===, dan !==.
// Proyek Satu percabangan if/else.
// Proyek Satu percabangan if/else if/else.
// Proyek Kondisi menggunakan &&, ||, dan !.
// Proyek Contoh nilai truthy/falsy.
// Proyek Satu ternary sederhana.

// const namaSiswa = prompt('Nama Siswa');
// const nilaiSiswa = Number (prompt('Masukkan Nilai Siswa'));

// if (nilaiSiswa >= 100) {
//     alert(`${namaSiswa} mendapatkan Predikat A`);
// } else if (nilaiSiswa >= 93) {
//     alert(`${namaSiswa} mendapatkan Predikat B`);
// } else if (nilaiSiswa >= 85) {
//     alert(`${namaSiswa} mendapatkan Predikat C`);
// } else if (nilaiSiswa >= 77) {
//     alert(`${namaSiswa} mendapatkan Predikat D`);
// } else if (nilaiSiswa >= 69) {
//     alert(`${namaSiswa} mendapatkan Predikat E`);
// } else {
//     alert(`${namaSiswa} tidak lulus ujian dan harus mengulang lagi hahaha.`);
// }

// Perbaikan Code bantuan Ai -> Program penilaian kelulusan siswa
// const namaSiswa = prompt('Nama Siswa');
// const nilaiSiswa = prompt('Masukkan Nilai Siswa');

// if (!namaSiswa) {
//     alert('Nama Siswa harus diisi!');
// } else if (nilaiSiswa < 0 || nilaiSiswa > 100) {
//     alert('Nilai yang anda masukkan tidak valid');
// } else if(nilaiSiswa === 100) {
//     alert(`${namaSiswa} mendapatkan nilai sempurna yaitu ${nilaiSiswa} dengan Predikat S`);
// } else if (nilaiSiswa >= 93) {
//     alert(`${namaSiswa} mendapatkan Predikat A`);
// } else if (nilaiSiswa >= 85) {
//     alert(`${namaSiswa} mendapatkan Predikat B`);
// } else if (nilaiSiswa >= 77) {
//     alert(`${namaSiswa} mendapatkan Predikat C`);
// } else if (nilaiSiswa >= 69) {
//     alert(`${namaSiswa} mendapatkan Predikat D`);
// } else {
//     alert(`${namaSiswa} tidak lulus ujian dan harus mengulang lagi hahaha.`);
// }

// Pengujian 1 : Nilai : 85 -> predikat B
// Pengujian 2 : Nilai : 100 -> predikat S
// Pengujian 3 : Nilai : 68 -> tidak lulus ujian
// Pengujian 3 : Nilai : 69 -> Predikat D

// const nilaiBatasKelulusan = nilaiSiswa < 69 ? 'lulus' : 'tidakLulus'


// Program Validasi input kosong
// const nama = prompt('Masukkan Nama Anda');
// if (nama === "" || nama === null) {
//     alert('Nama belum diisi!');
// } else {
//     alert(`Selamat datang ${nama}`);
// }
// Pengujian 1 : nama Febry :  Selamat datang Febry
// Pengujian 2 : nama kosong :  Nama belum diisi


// Program Positif, Negative, 0
// const angka = prompt("Masukkan Angka");
// if (angka > 0) {
//     alert(`Angka ${angka} adalah bilangan Positif.`);
// } else if (angka < 0) {
//     alert(`Angka ${angka} adalah bilangan Negatif.`);
// } else {
//     alert(`Angka ${angka} adalah bilangan 0.`);
// }
// Pengujian 1 : Angka 7 : bilangan Positif
// Pengujian 2 : Angka -7 : bilangan Negatif
// Pengujian 3 : Angka 0 : bilangan 0

// Program GENAP dan GANJIL
// const angka = prompt('Masukkan Angka');
// if (angka % 2 === 0) {
//     alert(`Angka ${angka} adalah bilangan GENAP`);
// } else {
//     alert(`Angka ${angka} adalah bilangan GANJIL`);
// }

// Pengujian 1 : Angka 10 : bilangan GENAP
// Pengujian 2 : Angka 9 : bilangan GANJIL


// Program Diskon berdasarkan total
// const namaBarang = prompt('Masukkan Nama Barang');
// const jumlahBarang = prompt('Masukkan Total Barang Belanja');
// const hargaSatuanBarang = 20000;
// const totalHarga = hargaSatuanBarang * jumlahBarang;
// if (totalHarga >= 200000) {
//     alert(`Total Harga ${namaBarang} adalah Rp. ${totalHarga} dan mendapatkan diskon 15%`);
// } else if (totalHarga >= 100000) {
//     alert(`Total Harga ${namaBarang} adalah Rp. ${totalHarga} dan mendapatkan diskon 10%`);
// } else {
//     alert(`Total Harga ${namaBarang} adalah Rp. ${totalHarga} tidak mendapatkan diskon`);
// }

// Pengujian 1: 10 barang × Rp20.000 = Rp200.000 → diskon 15%
// Pengujian 2: 5 barang × Rp20.000 = Rp100.000 → diskon 10%
// Pengujian 3: 4 barang × Rp20.000 = Rp80.000 → tidak mendapatkan diskon







