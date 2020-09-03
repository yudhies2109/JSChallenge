function weirdMultiply(sentence){
 let hasil = 1;
 strAngka = sentence.toString();

 if (strAngka.length == 1){
  console.log('Dijit Angka 1', strAngka );
 } else {
  console.log('Dijit Angka 2', strAngka.charAt(2));
 }
}

weirdMultiply(39);
