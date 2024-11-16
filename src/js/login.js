const login = () => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  const hash =
    CryptoJS.SHA256(password.value).toString() ==
    "853ebef6a7e7feafbe4510f3d20e3fdc84b290e99a7a5a2c21ac49039470246c"
      ? (window.location.href = "./telainicial.html")
      : errado();
};

const errado = () => {
  alert("Email ou senha incorreta\nTente novamente");
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
};
