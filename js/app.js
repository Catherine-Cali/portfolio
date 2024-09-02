document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sideNav = document.getElementById('mySidenav');

    openBtn.addEventListener('click', function() {
        sideNav.style.right = '0'; /* Ouvrir le menu latéral */
    });

    closeBtn.addEventListener('click', function() {
        sideNav.style.right = '-250px'; /* Fermer le menu latéral */
    });
});

let slideIndex = [1, 1, 1];
let slideId = ["custom-slider0", "custom-slider1", "custom-slider2"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}


function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    let dots = document.getElementsByClassName("dot" + no);
    if (n > x.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    x[slideIndex[no]-1].style.display = "block";  
    dots[slideIndex[no]-1].className += " active";
}


var container = document.getElementById("animation-container");
var homeSection = document.getElementById("home");
var w = homeSection.clientWidth;
var h = homeSection.clientHeight;

var total = 25; // Nombre maximum de fleurs visibles simultanément

function animateDiv(elm) {
  gsap.to(elm, R(7, 14), { 
    y: h + 50, 
    ease: "power1.out", 
    repeat: -1, 
    delay: 0, 
    onRepeat: () => {
      gsap.set(elm, { y: R(-200, -150), x: R(-1500, w) });
    },
    onComplete: () => {
      // Supprime la fleur du DOM lorsqu'elle sort de l'écran
      elm.remove();
    }
  });

  gsap.to(elm, R(8, 14), { 
    rotationZ: R(0, 180), // Limite la rotation pour réduire l'impact
    rotationX: R(0, 180), 
    rotationY: R(0, 180), 
    ease: "sine.inOut", 
    repeat: -1, 
    yoyo: true 
  });
}

function R(min, max) {
  return min + Math.random() * (max - min);
}

function createAndAnimateFlower() {
  if (container.children.length < total) { // Crée une nouvelle fleur uniquement si le total est en dessous de la limite
    var Div = document.createElement('div');
    gsap.set(Div, { attr: { class: 'dot-animation' }, x: R(-1500, w), y: R(-200, -150) });
    container.appendChild(Div);
    animateDiv(Div);
  }
}

// Initialisation des fleurs avec un décalage initial
for (var i = 0; i < total; i++) {
  (function(index) {
    setTimeout(function() {
      createAndAnimateFlower();
    }, index * 1000); // Décalage de 1 seconde entre chaque fleur
  })(i);
}

// Remplace la fonction d'ajout continu par un contrôle strict du nombre de fleurs
setInterval(createAndAnimateFlower, 3000); // Ajoute une fleur toutes les 3 secondes (si le nombre de fleurs est inférieur à la limite)


document.addEventListener('DOMContentLoaded', function() {
    var strings = [];

    // Vérifie l'URL pour déterminer la langue de la page
    if (window.location.href.includes("index2.html")) {
        // Si l'URL contient "index2.html", afficher la version anglaise
        strings = ["It's Catherine!", "Welcome to my site"];
    } else {
        // Sinon, afficher la version française
        strings = ["C'est Catherine!", "Bienvenue sur mon site"];
    }

    var typed = new Typed('.typed', {
        strings: strings,
        typeSpeed: 75,
        backSpeed: 50,
        backDelay: 900,
        loop: true
    });
});
