function generatePassword() {
  let password = "";

  let characterSets = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    "!@#$%^&*()",
  ];

  while (password.length < 18) {
    let characterSet =
      characterSets[Math.floor(Math.random() * characterSets.length)];
    password += characterSet.charAt(
      Math.floor(Math.random() * characterSet.length)
    );
  }

  let box = document.getElementById("password");
  box.value = password;

  return password;
}

function selectPassword() {
  let box = document.getElementById("password");
  box.select();
}
