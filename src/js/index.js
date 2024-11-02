const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "id": 1,
  "titulo": "2º título",
  "email": "wmarcondesbr@gmail.com",
  "dinicio": "2024-11-02T09:30",
  "dfim": "2024-11-22T23:36",
  "descricao": "Di Fera"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://138.197.90.76:3000/send-event", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));