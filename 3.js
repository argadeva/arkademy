//Cek Kata
function cekKata(kalimat) {
    if(typeof kalimat === 'string'){
      var sortir = kalimat.replace(/\d\s+/g, '');
      var kata = kalimat.replace(/\s+/g, ' ');
      return sortir.split(' ').length + ' / ' + kata.split(' ').length;
    } else {  
      return "Parameter harus string!";
    }
  }
  
// Hasil
console.log(cekKata("ini adalah sebuah kata"));
console.log(cekKata("2 pasang sandal hilang"));
console.log(cekKata(33));