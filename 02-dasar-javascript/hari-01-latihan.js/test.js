// const namaBarang = 'Susu';
// const hargaSatuan = 1000;
// let jumlahBarang = 5;
// jumlahBarang = 7;
// const uangPembeli = 10000;

// const totalHarga = hargaSatuan * jumlahBarang;
// const uangKembalian = uangPembeli - totalHarga;

// console.log(`Febry membeli ${namaBarang} dengan total Rp. ${totalHarga}`);
// console.log(`Uang pembeli Rp. ${uangPembeli} kembaliannya Rp. ${uangKembalian}`);


// const namaBarang = 'Buku';
// const harga = 15000;
// const jumlah = 2;

// const total = harga * jumlah;
// const pesan = (`Total ${namaBarang}: Rp${total}`);

// console.log(pesan);

// const namaBarang = "Pensil";
// let jumlah;
// const hargaDiskon = null;

// console.log(typeof namaBarang);
// console.log(typeof jumlah);
// console.log(typeof hargaDiskon);

// Hasil Diri Sendiri
// const namaRobot = 'Uto';
// const jarakKM = 1; // jarak satu arah km
// const energiKM = 10; // energi yang digunakan per km
// const bateraiAwal = 100;
// let jumlahBarang = 20;
// const kapasitas = 5;
// let statusRobot = true;
// let kesalahan = null;
// let waktuSelesai;
// const panjangGudang = 10;

// const pulangPergi = jarakKM * 2; // jarak dikali 2 karena menempuh jalan sebanyak 2 kali
// const energiDigunakan = energiKM * pulangPergi; //
// let sisaBaterai = bateraiAwal - energiDigunakan;
// const sisaBarang = jumlahBarang % kapasitas;
// const luasGudang = panjangGudang ** 2;
// let isiUlangBaterai = sisaBaterai + 20;
// const sisaBarang1 = jumlahBarang - kapasitas;

// console.log(`Nama Robot : ${namaRobot}`);
// console.log(`Jarak yang ditempuh : ${pulangPergi} km`);
// console.log(`Energi yang digunakan : ${energiDigunakan} energi`);
// console.log(`Sisa Baterai setelah digunakan : ${sisaBaterai}%`);
// console.log(`Sisa Barang setelah perjalanan penuh : ${sisaBarang} barang`);
// console.log(`Luas Gudang : ${luasGudang} m2`);
// console.log(`Sisa Baterai setelah diisi ulang : ${isiUlangBaterai}%`);
// console.log(`Sisa Barang setelah satu perjalanan : ${sisaBarang1} barang`);

// console.log(typeof namaRobot);
// console.log(typeof statusRobot);
// console.log(typeof kesalahan);
// console.log(typeof waktuSelesai);
// console.log(typeof pulangPergi);
// console.log(typeof energiDigunakan);
// console.log(typeof sisaBaterai);
// console.log(typeof sisaBarang);
// console.log(typeof luasGudang);
// console.log(typeof isiUlangBaterai);

// hasil AI
const namaRobot = "Uto";
const jarakSatuArahKM = 1;
const energiPerKM = 10;
const bateraiAwal = 100;
let jumlahBarang = 20;
const kapasitasPerPerjalanan = 5;
const statusAktif = true;
const kesalahanTerakhir = null;
let waktuSelesai;

const sisiGudangMeter = 10;
const jumlahIsiUlang = 20;

const jarakPulangPergiKM = jarakSatuArahKM * 2;
const energiDigunakan = energiPerKM * jarakPulangPergiKM;
let sisaBaterai = bateraiAwal - energiDigunakan;

const sisaPembagianBarang = jumlahBarang % kapasitasPerPerjalanan;

const luasGudang = sisiGudangMeter ** 2;

console.log(`Nama robot: ${namaRobot}`);
console.log(`Jarak pulang-pergi: ${jarakPulangPergiKM} km`);
console.log(`Energi yang digunakan: ${energiDigunakan}`);
console.log(`Sisa baterai setelah perjalanan: ${sisaBaterai}%`);
console.log(`Sisa pembagian barang: ${sisaPembagianBarang} barang`);
console.log(`Luas gudang: ${luasGudang} m²`);

sisaBaterai += jumlahIsiUlang;
jumlahBarang -= kapasitasPerPerjalanan;

console.log(`Sisa baterai setelah diisi ulang: ${sisaBaterai}%`);
console.log(`Barang setelah satu perjalanan: ${jumlahBarang} barang`);

console.log(`Tipe nama robot: ${typeof namaRobot}`);
console.log(`Tipe jarak: ${typeof jarakSatuArahKM}`);
console.log(`Tipe status: ${typeof statusAktif}`);
console.log(`Tipe kesalahan: ${typeof kesalahanTerakhir}`);
console.log(`Tipe waktu selesai: ${typeof waktuSelesai}`);