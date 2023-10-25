const key = "i<3redakt-06644fe7-6503-484b-9ae0-02db2dda7466";

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('buttonEncrypt').addEventListener('click', encrypt);
});

function encrypt() {
  const inputText = document.getElementById('inputText').value;
  const encryptedText = CryptoJS.AES.encrypt(inputText, key).toString();
  document.getElementById('outputText').textContent = 'redakt.org-' +  encryptedText + '&&&';
  document.getElementById("copied").style.display = "none";
  document.getElementById("info-text").style.display = "none";
};

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('buttonDecrypt').addEventListener('click', decrypt);
});

function decrypt() {
  const inputText = document.getElementById('inputText').value.replace('redakt.org-','').replace('redakt-','').replace('&&&','');
  const decryptedText = CryptoJS.AES.decrypt(inputText, key).toString(CryptoJS.enc.Utf8);
  document.getElementById('outputText').textContent = decryptedText;
  document.getElementById("copied").style.display = "none";
  document.getElementById("info-text").style.display = "block";
};

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('outputText').addEventListener('click', copyText);
});

function copyText() {
  const textToCopy = document.getElementById("outputText").innerText;
  navigator.clipboard.writeText(textToCopy);
  document.getElementById("copied").style.display = "block";
};