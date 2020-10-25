// next video 03 DateTime

// // import "./styles.css";

// // document.getElementById("app").innerHTML = `
// // <h1>Hello Vanilla!</h1>
// // <div>
// //   We use the same configuration as Parcel to bundle this sandbox, you can find more
// //   info about Parcel
// //   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// // </div>
// // `;

// // Membuat array
// // Arrray Literal

// var buah2an = ["pisang", "mangga", "jeruk", "semangka"];
// console.log("Isi dari arry buah2an: " + buah2an);

// // Array Constructor
// var pohon2an = new Array("beringin", "bakai", "randu");
// console.log("Isi dari array pohon2an: " + pohon2an);

// // mengakses array ke-n
// console.log(buah2an[2]);
// console.log(buah2an.length);

// // bekerja dengan array

// // menambahkan eleman setelah elemen terakhir
// buah2an.push("nangka");
// console.log(buah2an);
// console.log([...pohon2an, "kamboja"]);

// // mengambil elemen urutan terakhir
// console.log(buah2an.pop());
// console.log(buah2an);
// console.log(pohon2an[pohon2an.length - 1]);

// // menambah elemen sebelum elemen pertama
// buah2an.unshift("apel");
// console.log(buah2an);

// // menambah elemen sebelum elemen pertama tanpa mengubah array awal
// console.log(["kelapa", ...pohon2an]);

// // mengambil elemen
// // elemen array buah2an akan berubah
// console.log(buah2an.shift());
// console.log(buah2an);

// // agar elemen tidak berubah
// console.log(pohon2an[0]);
// console.log(pohon2an);

// // menghapus 2 elemen dari index ke-i
// buah2an.splice(0, 2);
// console.log(buah2an);

// contoh modifikasi array dengan filter
let cities = [
  { nama: "Los Angeles", populasi: 3792621 },
  { nama: "New York", populasi: 8792633 },
  { nama: "Chicago", populasi: 2792698 },
  { nama: "Houston", populasi: 2792651 },
  { nama: "Pholadelphia", populasi: 1792606 }
];

// ingin mengambil kota dengan populasi > 3 juta
function cekPopulasi(e) {
  return e.populasi > 3000000;
}
let bigCities = cities.filter(cekPopulasi);
console.log(bigCities);

// Penggunaan fungsi map

let kotaBesar = bigCities.map(myFunc);
function myFunc(m, x) {
  return (
    "kota besar ke- " +
    (x + 1) +
    " adalah " +
    m.nama +
    "dengan populasi sebanyak: " +
    m.populasi
  );
}

console.log(kotaBesar);
