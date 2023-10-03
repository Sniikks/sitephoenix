    
// Permet d'actualiser l'année du copyright.
document.addEventListener('DOMContentLoaded', function () {
    var currentYear = new Date().getFullYear();
    var copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
        copyrightElement.innerHTML = 'Phoenix &copy; ' + currentYear;
    }
});

// ******************** //

// FONCTION POUR AGRANDIR L'IMAGE QUAND ON CLIQUE DESSUS
function agrandirImage(imageSrc) {
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.onclick = function () {
    overlay.remove();
};
        
var image = document.createElement('img');
    image.className = 'image-agrandie';
    image.src = imageSrc.replace('.png', '_large.png');   
    overlay.appendChild(image);
    document.body.appendChild(overlay);
}
        
// Ajoute un gestionnaire d'événements aux images avec la classe "photoequipe"
var images = document.querySelectorAll('.photoequipe, .photoequipe1');
    images.forEach(function (image) {
    image.addEventListener('click', function () {
    agrandirImage(image.src);
    });
});    

// Ajoute un gestionnaire d'événements aux images avec la classe "bazar"
var images = document.querySelectorAll('.imagebazar1');
    images.forEach(function (image) {
    image.addEventListener('click', function () {
    agrandirImage(image.src);
    });
}); 

// Ajoute un gestionnaire d'événements aux images avec la classe "cadeaux"
var images = document.querySelectorAll('.photocadeaux');
    images.forEach(function (image) {
    image.addEventListener('click', function () {
    agrandirImage(image.src);
    });
});  

// Ajoute un gestionnaire d'événements aux images avec la classe "fishing"
var images = document.querySelectorAll('.imagefishing1');
    images.forEach(function (image) {
    image.addEventListener('click', function () {
    agrandirImage(image.src);
    });
});  

// Ajoute un gestionnaire d'événements aux images avec la classe "housing"
var images = document.querySelectorAll('.imagehousing1');
    images.forEach(function (image) {
    image.addEventListener('click', function () {
    agrandirImage(image.src);
    });
});  

// Ajoute un gestionnaire d'événements aux images avec la classe "routine"
var images = document.querySelectorAll('.imageroutine1');
    images.forEach(function (image) {
    image.addEventListener('click', function () {
    agrandirImage(image.src);
    });
});  

// Ajoute un gestionnaire d'événements aux images avec la classe "stuff"
var images = document.querySelectorAll('.imagestuff1');
    images.forEach(function (image) {
    image.addEventListener('click', function () {
    agrandirImage(image.src);
    });
});  


