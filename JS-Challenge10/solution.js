function stringManipulaion(word){
 let str1 ="";
 let str2 ="";
 let str3 ="";

 if (word.charAt(0) == 'a' || word.charAt(0) == 'A'){
  return word;  
 } else if (word.charAt(0) == 'i' || word.charAt(0) == 'I'){
  return word; 
 } else if (word.charAt(0) == 'u' || word.charAt(0) == 'U'){
  return word;
 } else if (word.charAt(0) == 'e' || word.charAt(0) == 'E'){
  return word; 
 } else if (word.charAt(0) == 'o' || word.charAt(0) == 'O'){
  return word; 
 } else {
  str1 = word.slice(0, 1);
  str2 = word.slice(1);
  str3 = 'nyo';
  return str2 + str1 + str3;
 }
}

function sentenceManipulation(sentence){
 let hasil = [];
 let kalimatSM = sentence.split(" ");

 for (let i =0; i < kalimatSM.length; i++){
  hasil.push(stringManipulaion(kalimatSM[i]))
 }
 return hasil.join(" ");
}


console.log(sentenceManipulation('ibu pergi ke pasar bersama aku'));
