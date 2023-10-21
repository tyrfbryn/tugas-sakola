//import express
import express from "express";

//init express router
const router = express.Router();

router.get('/biodata', (req, res) => {
    var nama = "Tyar febriyano";
    var tempat_lahir = "bandung";
    var tanggal_lahir = "25 feb 2007";
    var jenis_kelamin = "laki-laki";
    var agama = "islam";
    var alamat = "jln.cibaduyut";
    var telepon = "08123456789";
    var email = "tyoslebew@gmail.com";
    var hobi = "game";
    var cita_cita = "pengen kaya";
    res.send(
        'nama :'+ nama + '<br>'+
        'tempat_lahir :'+ tempat_lahir + '<br>'+
        'tanggal_lahir :'+ tanggal_lahir + '<br>'+
        'jenis_kelamin :'+ jenis_kelamin + '<br>'+
        'agama :'+ agama + '<br>'+
        'alamat :'+ alamat + '<br>'+
        'telepon :'+ telepon + '<br>'+
        'email :'+ email + '<br>'+
        'hobi :'+ hobi + '<br>'+
        'cita_cita :'+ cita_cita 
    );

});
router.get('/aritmatika', (req, res) => {
    var bilangan1 = 10;
    var bilangan2 = 5;
    var tambah = bilangan1 + bilangan2;

    var bilangan3 = 15;
    var bilangan4 = 5;
    var kurang = bilangan3 - bilangan4;

    var bilangan5 = 20;
    var bilangan6 = 2;
    var dibagi = bilangan5 / bilangan6;

    var bilangan7 = 25;
    var bilangan8 = 5;
    var dikali = bilangan7 * bilangan8;

    res.send( 
        '<h3>Penjumlahan</h3>'+
        'bilangan ke 1 : ' + bilangan1 + '<br>' +
        'bilangan ke 2 : ' + bilangan2 + '<br>' +
        'hasil : ' + tambah + '<hr>' +

        '<h3>Pengurangan</h3>'+
        'bilangan ke 3 : ' + bilangan3 + '<br>' +
        'bilangan ke 4 : ' + bilangan4 + '<br>' +
        'hasil : ' + kurang + '<hr>' +

        '<h3>Pembagian</h3>'+
        'bilangan ke 5 : ' + bilangan5 + '<br>' +
        'bilangan ke 6 : ' + bilangan6 + '<br>' +
        'hasil : ' + dibagi + '<hr>' +

        '<h3>Perkalian</h3>'+
        'bilangan ke 7: ' + bilangan7 + '<br>' +
        'bilangan ke 8 : ' + bilangan8 + '<br>' +
        'hasil : ' + dikali + '<hr>' 



    );

});

router.get('/bangun_datar', (req, res) => {
        var panjang = 5;
        var lebar = 5;
        var kali = panjang * lebar;

        var panjang1 = 20;
        var lebar1 = 10;
        var kali1 = panjang1 * lebar1;

        var sisi1 = 20;
        var sisi2 = 20;
        var sisi3 = 20;
        var tambah = sisi1 + sisi2 + sisi3;

        var v = 3.14;
        var jari_jari = 6;
        var kali3 = v * jari_jari;

        res.send(
            '<h3>Persegi</h3>' +
            'luas = panjang x lebar <br>'+
            'panjang : ' + panjang +  '<br>'+
            'lebar : ' +lebar + '<br>'+
            'hasil : ' + kali + '<br>'+

            '<h3>Persegi Panjang</h3>' +
            'luas = panjang x lebar <br>'+
            'panjang : ' + panjang1 +  '<br>'+
            'lebar : ' +lebar1 + '<br>'+
            'hasil : ' + kali1 + '<br>'+

            '<h3>Segitiga</h3>' +
            ' sisi + sisi + sisi <br>'+
            'sisi1 : ' + sisi1 +  '<br>'+
            'sisi2 : ' + sisi2 + '<br>'+
            'sisi3 : ' + sisi3 + '<br>' +
            'hasil : ' + tambah + '<br>'+

            '<h3>Lingkaran</h3>' +
            'v x jari_jari <br>'+
            'v : ' + v + '<br>'+
            'jari_jari :' + jari_jari + '<br>'+
            'hasil : ' + kali3 + '<hr>'



    );

});
router.get('/biodataa/:nama/:tempat/:tanggal/:jenis/:agama/:alamat/:telepon/:email/:hobi/:cita', (req, res) => {
    var nama = req.params.nama;
    var tempat_lahir = req.params.tempat;
    var tanggal_lahir = req.params.tanggal;
    var jenis_kelamin = req.params.jenis;
    var agama = req.params.agama;
    var alamat = req.params.alamat;
    var telepon = req.params.telepon;
    var email = req.params.email;
    var hobi = req.params.hobi;
    var cita_cita = req.params.cita
    res.send(
        'nama :'+ nama + '<br>'+
        'tempat_lahir :'+ tempat_lahir + '<br>'+
        'tanggal_lahir :'+ tanggal_lahir + '<br>'+
        'jenis_kelamin :'+ jenis_kelamin + '<br>'+
        'agama :'+ agama + '<br>'+
        'alamat :'+ alamat + '<br>'+
        'telepon :'+ telepon + '<br>'+
        'email :'+ email + '<br>'+
        'hobi :'+ hobi + '<br>'+
        'cita_cita :'+ cita_cita 
    );

});
router.get('/tes/:nama/:kelas/:pts/:pas', (req, res) => {
    var nama = req.params.nama;
    var kelas = req.params.kelas;
    var pts = parseInt(req.params.pts);
    var pas = parseInt(req.params.pas);
  
    var rapot = (pts + pas) / 2;
  
    const score = rapot;

  
    var response = 'Nama: ' + nama + '<br>' +
                  'Kelas: ' + kelas + '<br>' +
                  'Nilai PTS: ' + pts + '<br>' +
                  'Nilai PAS: ' + pas + '<br>' +
                  'Nilai Raport: ' + rapot + '<br>' +
                  'Keterangan: ';
  
    if (score >= 90 && score <= 100) {
      response += 'Grade A';
    } else if (score >= 80 && score <= 89) {
      response += 'Grade B';
    } else if (score >= 70 && score <= 79) {
      response += 'Grade C';
    } else if (score >= 60 && score <= 69) {
      response += 'Grade D';
    } else if (score >= 50 && score <= 59) {
      response += 'Grade E';
    } else if (score >= 0 && score <= 49) {
      response += 'Sing Rajin Di Ajar!!!';
    } else {
      response += 'Nilai tidak valid';
    }
  
    res.send(response);
  });

  router.get('/bersarang/:nama/:jurusan/:Kelas', (req, res) => {
 
    var nama = req.params.nama;
    var jurusan = req.params.jurusan;
    var kelas = req.params.kelas;

       if (jurusan == 'RPL') {
        if (kelas == '10 RPL') {
            var ket  = "Anda Kelas 10 RPL";
        } else if (kelas == '11 RPL'){
            var ket = "Anda Kelas 11 RPL";
        } else if (kelas == '12 RPL'){
            var ket = "Anda Kelas 12 RPL";
        } else {
            var ket = "Anda Almuni Cuyyy !";
        }
    } else        

    if (jurusan == 'TBSM') {
        if (kelas == '10 TBSM') {
            var ket  = "Anda Kelas 10 TBSM";
        } else if (kelas == '11 TBSM'){
            var ket = "Anda Kelas 11 TBSM";
        } else if (kelas == '12 TBSM'){
            var ket = "Anda Kelas 12 TBSM";
        } else {
            var ket = "Anda Almuni Cuyyy !";
        }
    } else          

    if (jurusan == 'TKRO') {
        if (kelas == '10 TKRO') {
            var ket  = "Anda Kelas 10 TKRO";
        } else if (kelas == '11 TKRO'){
            var ket = "Anda Kelas 11 TKRO";
        } else if (kelas == '12 TKRO'){
            var ket = "Anda Kelas 12 TKRO";
        } else {
            var ket = "Anda Almuni Cuyyy !";
        }
    } else          

    if (jurusan == 'RPL'){
        var ket = "Anda jurusan RPL"; 
    } else if (jurusan == "TKRO"){
        var ket = "Anda Jurusan TKRO";
    } else if (jurusan == "TBSM"){
        var ket = "Anda Jurusan TBSM";
    } else {
        var ket = "jurusan tidak tersedia"
    } 
    res.send(
        'Nama : ' + nama + '<br>'+
        'Jurusan : ' + jurusan + '<br>'+
        'kelas : ' + ket    
    );
  });
   
   router.get('/starbuck/:nama/:tanggal/:jeniss/:pesanan/:jumlah', (req, res) => {
    var nama = req.params.nama;
    var tanggal = req.params.tanggal;
    var jeniss = req.params.jeniss;
    var pesanan = req.params.pesanan;
    var jumlah = req.params.jumlah;

    if (jeniss == 'makanan') {
        if (pesanan == 'nasi goreng') {
            var harga  = 20000;
        } else if (pesanan == 'mie goreng'){
            var harga = 30000;
        } else if (pesanan == 'ayam goreng'){
            var harga = 40000;
        } else {
            var harga = 'harga tidak tersedia';
        }
    } else if (jeniss == 'minuman') {
        if (pesanan == 'air mineral') {
            var harga  = 10000;
        } else if (pesanan == 'jus'){
            var harga = 20000;
        } else if (pesanan == 'kopi'){
            var harga = 30000;
        } else {
            var harga = 'harga tidak tersedia';
        }
    } 
    var total = jumlah*harga
    if (total >= 100000){
        var diskon = total * 0.5
    } else {
        var diskon = 0
    }
    var totalbayar = total - diskon

    res.send(
        '<h3>Starbuck Lokal</h3>'+
        'Nama Pembeli : ' + nama + '<br>'+
        'Tanggal : ' + tanggal + '<br>'+
        'Jenis : ' + jeniss + '<br>' +
        'pesanan : ' + pesanan + '<br>' +
        'jumlah : ' + jumlah + '<br>'+
        'harga : ' + harga + '<br>'+
        '----------------------------------- <br>'+
        'total : ' + total + '<br>'+
        'diskon 50% : ' + diskon + '<br>'+
        'total pembayaran :' + totalbayar + '<br>'+
        '----------------------------------- <br>'+
        '>>>>>>>>>>TERIMAKASIH<<<<<<<<<<<'
    );
   });

   router.get('/sample', (req, res) => {

    res.send(
        '<h3>Selamat Datang</h3>'
    );
   });
//export default router
export default router;