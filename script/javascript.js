function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 // INDEX: Permet de cliquer sur les différentes pages.
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
