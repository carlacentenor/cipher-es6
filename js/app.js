let btnCipher = document.querySelector('.btn-cipher');
let btnDecipher = document.querySelector('.btn-decipher');
let clear = document.querySelector('.clear');
let decipherClear = document.getElementById('clear');

btnCipher.addEventListener('click', () => {
  let inputCipher = document.querySelector('.cipher');
  let boxCipher = document.querySelector('.box-result-cipher p');
  let textCipher = inputCipher.value;
  if (textCipher || /[a-zA-Z\s]/g.test(textCipher)) {
    var codeCipher = '';
    for (let i = 0; i < textCipher.length; i++) {
      let numberCodeAscii = textCipher.charCodeAt(i);
      if (numberCodeAscii >= 65 && numberCodeAscii <= 90) {
        let valueCapitalLetter = (numberCodeAscii - 65 + 33) % 26 + 65;
        let capitalLetter = String.fromCharCode(valueCapitalLetter);
        codeCipher += capitalLetter;
      } else if (numberCodeAscii >= 97 && numberCodeAscii <= 122) {
        let valueLetterLower = (numberCodeAscii - 97 + 33) % 26 + 97;
        let letterLower = String.fromCharCode(valueLetterLower);
        codeCipher += letterLower;
      } else if (numberCodeAscii === 32) {
        let space = ' ';
        codeCipher += space;
      }
    }
  } else {
    alert('Ingresa un mensaje');
  }
  boxCipher.textContent = codeCipher;
});

btnDecipher.addEventListener('click', () => {
  let inputDecipher = document.querySelector('.decipher');
  let boxDecipher = document.querySelector('.box-result-decipher p');
  let textDecipher = inputDecipher.value;
  if (textDecipher || /[a-zA-Z\s]/g.test(textDecipher)) {
    var codeDecipher = '';

    for (let i = 0; i < textDecipher.length; i++) {
      let numberCodeAscii = textDecipher.charCodeAt(i);
      if (numberCodeAscii >= 65 && numberCodeAscii <= 90) {
        let valueCapitalLetter = (numberCodeAscii + 65 - 33) % 26 + 65;
        let capitalLetter = String.fromCharCode(valueCapitalLetter);
        codeDecipher += capitalLetter;
      } else if (numberCodeAscii >= 97 && numberCodeAscii <= 122) {
        let valueLetterLower = (numberCodeAscii + 97 - 45) % 26 + 97;
        let letterLower = String.fromCharCode(valueLetterLower);
        codeDecipher += letterLower;
      } else if (numberCodeAscii === 32) {
        let space = ' ';
        codeDecipher += space;
      }
    }
  } else {
    alert('Ingresa un mensaje');
  }
  boxDecipher.textContent = codeDecipher;
});

let clearBox = ()=>{
  let inputDecipher = document.querySelector('.decipher');
  let inputCipher = document.querySelector('.cipher');
  let boxDecipher = document.querySelector('.box-result-decipher p');
  let boxCipher = document.querySelector('.box-result-cipher p');

  inputDecipher.value = '';
  inputCipher.value = '';
  boxCipher.textContent = '';
  boxDecipher.textContent = '';
};  

clear.addEventListener('click', clearBox);
decipherClear.addEventListener('click', clearBox);

