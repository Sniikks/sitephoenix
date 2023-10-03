document.addEventListener('DOMContentLoaded', function () {
    const routes = [
      {
        url: 'index.html',
        routes: [
          { target: 'tofLink', url: 'https://www.toweroffantasy-global.com/download.html' },
          { target: 'phoenixLink', url: './phoenix.html' },
          { target: 'guidesLink', url: './guides.html' },
          { target: 'discordLink', url: 'https://discord.gg/Sj586Vnzsb' },
          { target: 'majLink', url: './maj.html' },
        ],
      },
      {
        url: 'guides.html',
        routes: [
          { target: 'routineLink', url: './guides/routine.html' },
          { target: 'mapinteractifLink', url: './guides/mapinteractif.html' },
          { target: 'cadeauxLink', url: './guides/cadeaux.html' },
          { target: 'stuffLink', url: './guides/stuff.html' },
          { target: 'housingLink', url: './guides/housing.html' },
          { target: 'fishingLink', url: './guides/fishing.html' },
          { target: 'bazarLink', url: './guides/bazar.html' },
        ],
      },
    ];
  
    const currentUrl = window.location.pathname.split('/').pop();
    const currentRoute = routes.find((route) => route.url === currentUrl);
  
    if (currentRoute) {
      currentRoute.routes.forEach((route) => {
        document.getElementById(route.target).addEventListener('click', function (event) {
          event.preventDefault();
          window.location.href = route.url;
        });
      });
    }
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

