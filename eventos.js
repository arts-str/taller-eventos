document.addEventListener('DOMContentLoaded', function() {
    let div = document.getElementById('el-div');
    div.addEventListener('click', function(){
        alert('Hola! Soy el div');
    })
});

function saludar(event) {
    event.stopPropagation();
    alert('Hola!');
}