document.addEventListener('DOMContentLoaded', function() {
    let btadd = document.getElementById('btadd');
    let lista = document.getElementById('lista');

    btadd.addEventListener('click', function() {
        lista.appendChild(document.createElement('li')).appendChild(document.createElement('p')).textContent = 'Alerta criado ' + (lista.childElementCount);
    });
    

});