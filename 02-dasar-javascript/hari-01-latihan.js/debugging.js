// const namaProduk = "Kopi";
// const hargaSatuan = 12000;
// const jumlah = 3;
// const totalHarga = hargaSatuan * jumlah;

// console.log(`Produk: ${namaProduk}`);
// console.log(`Total pembelian: Rp${totalHarga}`);

// Tuliskan:
// - Pesan error -> Uncaught SyntaxError: missing ) after argument list
// - Baris penyebabnya -> console.log(`Total pembelian: Rp${totalHarga}`;
// - Bagian sintaks yang tidak lengkap. -> console.log(`Total pembelian: Rp${totalHarga}`; -> tanda kurung ()
// - Kode setelah diperbaiki. -> console.log(`Total pembelian: Rp${totalHarga}`);
// - Output setelah pengujian ulang.
// Produk: Kopi debugging.js:6:9
// Total pembelian: Rp36000

// const namaRobot = "Uto";
// const jarakPulangPergi = 4;
// const energiPerKM = 10;

// const energiDigunakan = jarakPulangPergi * energiPerKM;

// console.log(`${namaRobot} menggunakan ${energiDigunakan} energi`);

// Tuliskan:
// - Pesan error. -> Uncaught ReferenceError: energiPerKm is not defined
    // <anonymous> http://127.0.0.1:5500/02-dasar-javascript/hari-01-latihan.js/debugging.js:22
// - Nama yang tidak dikenali JavaScript. -> variable energiPerKm seharunya energiPerKM
// - Mengapa nama tersebut tidak ditemukan. -> karena nama variable pada bagian KM menggunakan M besar bukan m kecil
// - Kode setelah diperbaiki. -> const energiDigunakan = jarakPulangPergi * energiPerKM;
// - Output setelah pengujian ulang. -> Uto menggunakan 40 energi