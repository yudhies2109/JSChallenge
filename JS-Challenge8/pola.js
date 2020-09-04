function pola(str) {
  let pecahan1 = str.split("=");
  let angka3 = pecahan1[1].trim();
  let pecahan2 = pecahan1[0].split("*");
  let angka1 = pecahan2[0].trim();
  let angka2 = pecahan2[1].trim();
  console.log(pecahan1);
  console.log(angka3);
  console.log(pecahan2);
  console.log(angka1);
  console.log(angka2);

}


pola("42#3 * 188 = 80#204");
//console.log(pola("8#61 * 895 = 78410#5"));

