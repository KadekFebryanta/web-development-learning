// Minta teks tugas.
// Jika teks tugas kosong, tampilkan pesan kesalahan.
// Jika teks tugas tersedia, tampilkan bahwa tugas berhasil ditambahkan.
// Tugas baru memiliki status belum selesai.

const teksTugas = 'Belajar Coding';
let statusTugasBaru = false;

if (!teksTugas) {
    console.log('Tugas masih kosong');
} else {
    console.log('Tugas sudah terisi');

    const statusTugas = statusTugasBaru ? 'Selesai' : 'Belum Selesai';
    console.log(`Status Tugas : ${statusTugas}`);
}

// Alur sistemnya : Teks tugas diperiksa didalam if ->  tugas akan dicek apakah kosong atau terisi -> jika terisi akan ditampilkan bersama dengan statusnya jika kosong status tidak akan ditampilkan
// Pengujian 1 : Teks Tugas : Belajar Coding -> Tugas sudah terisi, status : false -> Belum Selesai
// Pengujian 2 : Teks Tugas : '' -> Tugas masih kosong, status : false -> status tidak ditampilkan
// Pengujian 3 : Teks Tugas : Belajar Coding -> Tugas sudah terisi, status : true -> Selesai

// input : teksTugas -> Belajar Coding, statusTugasBaru -> false
// Hasil yang diharapkan Pengujian 1 : Tugas sudah terisi dan Belum Selesai
// Hasil yang diharapkan Pengujian 2 : Tugas masih kosong dan status tidak ditampilkan
// Hasil yang diharapkan Pengujian 3 : Tugas sudah terisi dan Selesai
// Hasil aktual Pengujian 1 : Tugas sudah terisi dan Belum Selesai
// Hasil aktual Pengujian 2 : Tugas masih kosong dan status tidak ditampilkan
// Hasil aktual Pengujian 3 : Tugas sudah terisi dan Selesai
// hasil yang saya harapkan dengan pengujian sama 
// Status berhasil/gagal : Berhasil