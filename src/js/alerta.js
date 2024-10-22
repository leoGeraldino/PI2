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

        let documento = {
          "id": lista.childElementCount,
          "titulo": titulo,
          "email": email,
          "dinicio": dinicio,
          "dfim": dfim,
          "descricao": descricao,
        };
        
        console.log(documento);
  });

});
