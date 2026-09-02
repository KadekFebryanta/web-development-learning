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

// Perbaikan Code bantuan Ai
const namaSiswa = prompt('Nama Siswa');
const nilaiSiswa = Number (prompt('Masukkan Nilai Siswa'));

if (!namaSiswa) {
    alert('Nama Siswa harus diisi!');
} else if (nilaiSiswa < 0 || nilaiSiswa > 100) {
    alert('Nilai yang anda masukkan tidak valid')
} else if(nilaiSiswa === 100) {
    alert(`${namaSiswa} mendapatkan nilai sempurna yaitu ${nilaiSiswa} dengan Predika S`);
} else if (nilaiSiswa >= 93) {
    alert(`${namaSiswa} mendapatkan Predikat A`);
} else if (nilaiSiswa >= 85) {
    alert(`${namaSiswa} mendapatkan Predikat B`);
} else if (nilaiSiswa >= 77) {
    alert(`${namaSiswa} mendapatkan Predikat C`);
} else if (nilaiSiswa >= 69) {
    alert(`${namaSiswa} mendapatkan Predikat D`);
} else {
    alert(`${namaSiswa} tidak lulus ujian dan harus mengulang lagi hahaha.`);
}


