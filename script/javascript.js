    // INDEX: Permet de cliquer sur les différentes pages.
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('tofLink').addEventListener('click', function(event) {
        // Empêchez le comportement par défaut du lien (éviter le rechargement de la page)
        event.preventDefault();
        // Redirige vers Discord
        window.location.href = 'https://www.toweroffantasy-global.com/download.html';
    });
    document.getElementById('phoenixLink').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = './phoenix.html';
    });
    document.getElementById('guidesLink').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = './guides.html';
    });
    document.getElementById('discordLink').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'https://discord.gg/Sj586Vnzsb';
    });
    document.getElementById('majLink').addEventListener('click', function(event) {
        event.preventDefault();
         window.location.href = './maj.html';
    });
});

// GUIDES:
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('routineLink').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = './guides/routine.html';
    });
    document.getElementById('mapinteractifLink').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = './guides/mapinteractif.html';
    });
    document.getElementById('cadeauxLink').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = './guides/cadeaux.html';
    });
    document.getElementById('stuffLink').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = './guides/stuff.html';
    });
    document.getElementById('housingLink').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = './guides/housing.html';
    });
    document.getElementById('fishingLink').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = './guides/fishing.html';
    });
    document.getElementById('bazarLink').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = './guides/bazar.html';
    });
});
    
// Permet d'actualiser l'année du copyright.
document.addEventListener('DOMContentLoaded', function () {
    var currentYear = new Date().getFullYear();
    var copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
        copyrightElement.innerHTML = 'Phoenix &copy; ' + currentYear;
    }
});

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

// ******************** //

