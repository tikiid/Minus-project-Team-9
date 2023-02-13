document.getElementsByClassName('img-recette');
let img_recette = document.querySelector('.img-recette');
console.log('img-recette');
let button_close = document.querySelector('.fermer-recette');
img_recette.addEventListener('click', function() {
    document.getElementById('popup1').style.display = 'block';
    
});

button_close.addEventListener('click', function() {
    document.getElementById('popup1').style.display = 'none';
});