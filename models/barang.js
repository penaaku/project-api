const mongoose = require("./connector");

const BarangShema = mongoose.Schema({
  namaBarang: String,
  hargaBarang: Number,
  jumlahBarang: Number
});

const Barang = mongoose.model("Barang", BarangShema);

module.exports = Barang;
