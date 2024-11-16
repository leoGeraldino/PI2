const form = document.querySelector("form");
const outErrorMessage = document.querySelector("#outErrorMessage");

const user = {
  email: "admin@admin.com",
  password: "admin@123",
};

function clearErrorMessage() {
  outErrorMessage.innerText = "";
}

function clearTimeout() {
  setTimeout(clearErrorMessage, 3000);
}

form.addEventListener("submit", (e) => {
  const email = form.email.value;
  const password = form.password.value;

  if (email !== "" && password !== "") {
    if (email === user.email && password === user.password) {
      window.location.href = "./telainicial.html";
    } else {
      outErrorMessage.innerText = "Email ou senha incorretos!";
      clearTimeout();
    }
  } else {
    outErrorMessage.innerText = "Preencha os campos corretamente!";
    clearTimeout();
  }

  e.preventDefault();
});
