// script.js
$(document).ready(function() {
    // Coordinates for "JO, 11181, Al-Sha'b St, Amman, Jordan"
    var lat = 31.967758;
    var lon = 35.855049;

    // Initialize the map
    var map = L.map('map').setView([lat, lon], 13);

    // Set up the OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker at the specified location
    var marker = L.marker([lat, lon]).addTo(map);

    // Add a popup to the marker
    marker.bindPopup("<b>Clever Mind Company</b><br>Al-Sha'b St, Amman, Jordan").openPopup();

    // Optional: Adjust map height on window resize
    $(window).on('resize', function() {
        $('#map').height($('footer').height());
        map.invalidateSize();
    }).resize();
});

const header = document.querySelector('header');
const video = document.querySelector('.video');
const nav= document.querySelector('.nav');
$(window).scroll(function(event) {
    event.preventDefault();
    var scroll = $(window).scrollTop();
    if (scroll > 150) {
        $('header').addClass('scrolled');
        $('nav a').addClass('blackitem');
        $('.logo h2').addClass('lettercolor removebk');
        header.classList.remove('move');
        video.classList.remove('move');
        nav.classList.remove('showNav');
    } else {
        $('header').removeClass('scrolled');
        $('nav a').removeClass('blackitem');
        $('.logo h2').removeClass('lettercolor removebk');
    }
});

const themecolor1 = document.getElementById('radio-1');
const themecolor2 = document.getElementById('radio-2');
const body = document.querySelector('.body');
const addwhite1=document.querySelectorAll('.content h2');
const addwhite2=document.querySelectorAll('.content h3');
const listcolor=document.querySelectorAll('.content ul li');
const price=document.querySelectorAll('.price');
const video1=document.querySelector('.video');
const sun=document.querySelector('.moonSun .sun');
const moon=document.querySelector('.moonSun .moon');
/*******************************cards******************* */
themecolor1.addEventListener('click', function() {
    body.classList.remove('colorchange');
   addwhite1.forEach(function(item) {
    item.style.color = 'rgb(75, 74, 74,0.5)';
    });
    addwhite2.forEach(function(item) {
        item.style.color='rgb(75, 74, 74,0.8)';
        });
        listcolor.forEach(function(element){
            element.style.color='black';
        });
        price.forEach(function(element){
            element.style.color='black';
            });
            video1.style.opacity='0.9';
            sun.classList.add('showsun');
            moon.classList.remove('showmoon');
            sun.style.display='inline';
});

themecolor2.addEventListener('click', function() {
    body.classList.add('colorchange');
    addwhite1.forEach(function(item) {
        item.style.color='rgb(75, 74, 74,0.2)';
        });
        addwhite2.forEach(function(item) {
            item.style.color='rgb(75, 74, 74,0.8)';
            });
            listcolor.forEach(function(element){
                element.style.color='white';
            });
            price.forEach(function(element){
                element.style.color='white';
                });
                video1.style.opacity='0.5';
                sun.classList.remove('showsun');
                moon.classList.add('showmoon');
                sun.classList.add('hiddenSun');
                sun.style.display='none';
});
VanillaTilt.init(document.querySelectorAll('.card'),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
    
});
/********************************************************************************bar  **************************************/
const moveHeader=document.querySelector('.showcase');
const moveOverlay=document.querySelector('.video');
const bar=document.querySelector('.bar');
const navList=document.querySelector('.nav');
var scrollup = $(window).scrollTop();
bar.addEventListener('click', function() {
    var scrollUp = $(window).scrollTop();
    if (scrollUp <= 100) {
        moveHeader.classList.toggle('move');
        moveOverlay.classList.toggle('move');
        navList.classList.toggle('showNav');
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});
window.addEventListener('resize', function() {
    if (window.innerWidth > 1200) {
        header.classList.remove('move');
        video1.classList.remove('move');
        nav.classList.remove('showNav');
    }
});
