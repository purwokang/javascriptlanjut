import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// Object Literal

// var saya = {
//   namaDepan: "Hari",
//   namaBelakang: "Sumitro",
//   umur: "50",
//   warnaKulit: "coklat"
// };

// console.log(saya.namaDepan);

// Object Constructor
class Seseorang {
  constructor(depan, belakang, usia, kulit) {
    this.namaDepan = depan;
    this.namaBelakang = belakang;
    this.umur = usia;
    this.warnaKulit = kulit;
    this.namaLengkap = function () {
      return this.namaDepan + " " + this.namaBelakang;
    };
  }
}

var ayahku = new Seseorang("Joko", "Sumitro", 50, "coklat");
var ibuku = new Seseorang("Salma", "Rahma", 45, "putih");

// console.log(
//   "Ayahku bernama " + ayahku.namaLengkap() + " dan berusia " + ayahku.umur
// );
// console.log(
//   "Ibuku bernama " + ibuku["namaDepan"] + " dan berusia " + ibuku["umur"]
// );

// if ("namaTengah" in ayahku) {
//   console.log("ditemukan nama tengah");
// } else {
//   console.log("tidak ditemukan nama tengah");
// }

// console.log(Object.keys(saya));
// console.log(Object.keys(ayahku));
// console.log(Object.values(ayahku));

// // Mengcopy Object
// var ayahAndi = new Seseorang();
// Object.assign(ayahAndi, ayahku);
// // ayahAndi=ayahku;
// ayahku.namaDepan = "Hari";
// console.log(Object.values(ayahku));
// console.log(Object.values(ayahAndi));

// Menggabungkan dua Object
var namaAyahku = { namaDepan: "Joko", namaBelakang: "Sumitro" };
var infoLainAyahku = { umur: "50", warnaKulit: "coklat" };
var infoLengkapAyahku = new Seseorang();
Object.assign(infoLengkapAyahku, namaAyahku, infoLainAyahku);
console.log(Object.values(infoLengkapAyahku));
