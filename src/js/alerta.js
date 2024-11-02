const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

document.addEventListener("DOMContentLoaded", function () {
    var btadd = document.getElementById("btadd");
    
    btadd.addEventListener("click", function () {
        var titulo = document.getElementById("titulo").value;
        var email = document.getElementById("email").value;
        var dinicio = document.getElementById("data-inicio").value;
        var dfim = document.getElementById("data-fim").value;
        var lista = document.getElementById("lista");
        var descricao = document.getElementById("descricao").value;
    
        lista
        .appendChild(document.createElement("li"))
        .appendChild(document.createElement("p")).textContent =
        "Alerta criado " + lista.childElementCount;

        const raw = JSON.stringify({
          "id": lista.childElementCount,
          "titulo": titulo,
          "email": email,
          "dinicio": dinicio,
          "dfim": dfim,
          "descricao": descricao,
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

        console.log(raw);
  });

});
