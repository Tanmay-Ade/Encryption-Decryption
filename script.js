let arrow = document.querySelector("#arrow");

let enc = document.querySelector("#encryptBtn");
let encrypt = document.querySelector("#encrypt");
let encryptText = document.querySelector("#encryptText");
let encBtn = document.querySelector("#encBtn");
let encryptedText = document.querySelector("#encryptedText");
let encOutput = document.querySelector("#enc-output");
let encPassword = document.querySelector("#enc-password");

let dec = document.querySelector("#decryptBtn");
let decrypt = document.querySelector("#decrypt");
let decryptText = document.querySelector("#decryptText");
let decBtn = document.querySelector("#decBtn");
let decryptedText = document.querySelector("#decryptedText");
let decOutput = document.querySelector("#dec-output");
let decPassword = document.querySelector("#dec-password");

let storedPassword = "";

encBtn.addEventListener("click", (e) => {
  if (encryptText.value.trim() === "" || encPassword.value.trim() === "") {
    return null;
  }

  storedPassword = encPassword.value.trim();
  encOutput.style.display = "block";
  encryptedText.innerHTML = "";

  for (let i = 0; i < encryptText.value.length; i++) {
    encryptedText.innerHTML += String.fromCharCode(
      encryptText.value[i].codePointAt() - 2
    );
  }
  e.preventDefault();
});

decBtn.addEventListener("click", (e) => {
  if (decryptText.value.trim() === "" || decPassword.value.trim() === "") {
    return null;
  }

  if (storedPassword === decPassword.value.trim()) {
    decOutput.style.display = "block";
    decryptedText.innerHTML = "";

    for (let i = 0; i < decryptText.value.length; i++) {
      decryptedText.innerHTML += String.fromCharCode(
        decryptText.value[i].codePointAt() + 2
      );
    }
  } else {
    decOutput.style.display = "block";
    decryptedText.innerHTML = `Incorrect Password!`;
    decryptedText.style.color = "red";
  }
  e.preventDefault();
});

dec.addEventListener("click", () => {
  enc.classList.remove("active");
  dec.classList.add("active");
  arrow.style.transform = "rotate(180deg)";
  encrypt.style.display = "none";
  decrypt.style.display = "block";

  encryptText.value = "";
  encPassword.value = "";
  encOutput.style.display = "none";
});

enc.addEventListener("click", () => {
  enc.classList.add("active");
  dec.classList.remove("active");
  arrow.style.transform = "rotate(0deg)";
  encrypt.style.display = "block";
  decrypt.style.display = "none";

  decryptText.value = "";
  decPassword.value = "";
  decOutput.style.display = "none";
});
