// function togglecheckbox(which) {
//   if (which == 1) {
//     let checkbox = document.getElementById("encrypt_box_check");
//     let inputBox = document.getElementById("encrypt_key_box");

//     if (checkbox.checked) {
//       inputBox.style.display = "inline";
//     } else if (checkbox.checked == false) {
//       inputBox.style.display = "none";
//     }
//   }
//   else if (which == 2) {
//     let checkbox_ = document.getElementById("decrypt_box_check");
//     let inputBox_ = document.getElementById("decrypt_key_box");

//     if (checkbox_.checked) {
//       inputBox_.style.display = "inline";
//     } else if (checkbox_.checked == false) {
//       inputBox_.style.display = "none";
//     }
//   }

// }



function random_key() {
  let password = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()!';
  let length = 15;
  for (let i = 0; i < length; i++) {
    let char = Math.floor(Math.random() * characters.length);
    password += characters.charAt(char);
  }
  return password;
}

// Define your secret key and custom key as hex strings
const randomkey = random_key()



function encrypt() {
  let encrypt_text = document.getElementById('encryptInput');

  if (encrypt_text.value != ''){
    // Encrypt your text
  let encrypted = CryptoJS.AES.encrypt(encrypt_text.value, randomkey);
  document.getElementById('encryptOutput').value = encrypted;

  }else{
    alert('Text input is required!')
  }
  

}


function decrypt() {
  const decrypt_text_ = document.getElementById('decryptInput');

  if (decrypt_text_.value != ''){
    // Decrypt your text
  let decryptedString = CryptoJS.AES.decrypt(decrypt_text_.value, randomkey).toString(CryptoJS.enc.Utf8);
  document.getElementById('decryptOutput').value = decryptedString;
  }else{
    alert('Ciphertext is required!')
  }
}
