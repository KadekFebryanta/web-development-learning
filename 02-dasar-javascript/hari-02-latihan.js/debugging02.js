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