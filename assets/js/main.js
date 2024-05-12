
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        autoPlay: 1000,
        nav: false,
        responsiveClass: true,
        responsive: {
        0: {
            items: 2,
            margin: 10,
            stagePadding: 20,
        },
        600: {
            items: 3,
            margin: 20,
            stagePadding: 50,
        },
        1000: {
            items: 5
        }
        }
    });
});
changeIconCoffie = (icon) => {
    icon.classList.toggle('fa-check');
    icon.classList.toggle('fa-coffee');
}
changeIconHeart = (icon) => {
    icon.classList.toggle('fa-check');
    icon.classList.toggle('fa-heart');
}
changeiconEye = (icon) => {
    icon.classList.toggle('fa-check');
    icon.classList.toggle('fa-eye');
}
changeIconShare = (icon) => {
    icon.classList.toggle('fa-check');
    icon.classList.toggle('fa-share');
}
$('.resp-tab-item').on('click', function() {
    $(this).addClass('resp-tab-active').siblings('li').removeClass('resp-tab-active');
  });

/*const buttonBest = document.getElementById("bestSeller");
buttonBest.addEventListener("click", sortBest);
function sortBest() {
    $('.nonBest').css('display','none');
}
const buttonAll = document.getElementById("allNew");
buttonAll.addEventListener('click', showAll)
function showAll() {
    $('.nonBest').show();
    $('.best').show();
}
const newArivval = document.getElementById('newArrival');
*/
function sorting(clickedButton) {
    if(clickedButton == document.getElementById('allNew')) {
        $('.nonBest').show();
        $('.best').show();
        $('#productsMain').attr("style", "flex-direction : column !important");
        $('#first').show();
        $('#second').show();
        $('#third').show();
        $('#forth').show();
    }
    else if (clickedButton == document.getElementById('bestSeller')) {
        $('.nonBest').attr("style", "display : none !important");
        $('.best').show();
        $('#productsMain').attr("style", "flex-direction : row");
        var first = getElementById("first");
        first.remove();
        var forth = getElementById("third");
        forth.remove();

        $('.best').attr("style", "margin : none !important");
    }
    else if (clickedButton == document.getElementById('newArrival')) {
        $('.nonBest').show();
        $('.best').attr("style", "display : none !important");
        $('#productsMain').attr("style", "flex-direction : row");
        var second = getElementById("second");
        second.remove();
        var third = getElementById("third");
        third.remove();
        $('.nonBest').attr("style", "margin : none !important");
    }
}
let navBar = ['index.html','shop.html','contactUs.html','aboutUs.html'];
const navBarText = ['Home','Shop','Contact','About'];

for(let i=0; i < navBarText.length; i++) {
    
    const bodyHasClass = document.body.classList.contains('home');
    const bodyHasClassOther = document.body.classList.contains('other');
    if(bodyHasClass) {
        if(navBar[i] == 'index.html') {
            let html = `<li class = "pr-5"><a href = "${navBar[i]}">${navBarText[i]}</a></li>`
            document.getElementById('navBarMain').innerHTML += html;
        }
        else if (navBar[i] !== 'index.html' && navBar[i] != 'PortFolio'){
            let html = `<li class = "pr-5"><a href = "assets/pages/${navBar[i]}">${navBarText[i]}</a></li>`
            document.getElementById('navBarMain').innerHTML += html;
        }
    }
    else if(bodyHasClassOther) {
        if(navBar[i] == 'index.html') {
            let html = `<li class = "pr-5"><a href = "../../${navBar[i]}">${navBarText[i]}</a></li>`
            document.getElementById('navBarMain').innerHTML += html;
        }
        else if (navBar[i] !== 'index.html') {
            let html = `<li class = "pr-5" ><a href = "${navBar[i]}">${navBarText[i]}</a></li>`
            document.getElementById('navBarMain').innerHTML += html;
        }
        else if (navBar[i] == 'PortFolio') {
            let html = `<li class = "pr-5"><a href = "${navBar[i]}">${navBarText[i]}</a></li>`
            document.getElementById('navBarMain').innerHTML += html;
        }
    }

}
let html = `<li class = "pr-5" ><a href = 'https://upbeat-boyd-2938c5.netlify.app/'>PortFolio</a></li>`
document.getElementById('navBarMain').innerHTML += html;

const bodyHasClass = document.body.classList.contains('home');
const catWeekImg = ['assets/img/darkcoffie (1).jpg','assets/img/cappuninocoffie.jpg','assets/img/darkcoffie (2).jpg','assets/img/darkcoffie (3).jpg','assets/img/darkcoffie (4).jpg','assets/img/darkcoffie (5).jpg'];
const catWeekName = ['Dark','Capucino','Mocca','Latte','Beans','Irish'];
if(bodyHasClass) {
    catWeekImg.forEach((element , nameElement)=>  {
        let html = `<div class="card">
                    <a href="#">
                    <div class="carousel-item-image">
                        <img src="${element}" class="item-image">
                    </div>
                    <div class="carousel-item-text text-center">
                        <h3 class="item-title">${catWeekName[nameElement]}</h3>
                    </div>
                    </a>
                </div>`
    
        document.querySelector("#topWeekCards").innerHTML += html;
    })
}
var rangeOne = document.querySelector('input[name="rangeOne"]'),
    rangeTwo = document.querySelector('input[name="rangeTwo"]'),
    outputOne = document.querySelector('.outputOne'),
    outputTwo = document.querySelector('.outputTwo'),
    inclRange = document.querySelector('.incl-range'),
    updateView = function () {
      if (this.getAttribute('name') === 'rangeOne') {
        outputOne.innerHTML = this.value;
        outputOne.style.left = this.value / this.getAttribute('max') * 100 + '%';
      } else {
        outputTwo.style.left = this.value / this.getAttribute('max') * 100 + '%';
        outputTwo.innerHTML = this.value
      }
      if (parseInt(rangeOne.value) > parseInt(rangeTwo.value)) {
        inclRange.style.width = (rangeOne.value - rangeTwo.value) / this.getAttribute('max') * 100 + '%';
        inclRange.style.left = rangeTwo.value / this.getAttribute('max') * 100 + '%';
      } else {
        inclRange.style.width = (rangeTwo.value - rangeOne.value) / this.getAttribute('max') * 100 + '%';
        inclRange.style.left = rangeOne.value / this.getAttribute('max') * 100 + '%';
      }
    };

  document.addEventListener('DOMContentLoaded', function () {
    updateView.call(rangeOne);
    updateView.call(rangeTwo);
    $('input[type="range"]').on('mouseup', function() {
      this.blur();
    }).on('mousedown input', function () {
      updateView.call(this);
    });
  });

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('#menuDisapere');
const navBarMain = document.querySelector('#navBarMain');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navBarMain.classList.toggle('active');
})
/*function unfade(element) {
    var elementNode = element.children[0];
    var elemtNodei = elementNode.children[1];
    var op = 0.1;  // initial opacity
    elemtNodei.style.display = 'flex';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        elemtNodei.style.opacity = op;
        elemtNodei.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
function fadeOut(element) {
    var elementNode = element.children[0];
    var elemtNodei = elementNode.children[1];
    var opacity = 1;
    function decrease () {
        opacity -= 0.05;
        if (opacity <= 0){
            // complete
            elemtNodei.style.opacity = 0;
            return true;
        }
        elemtNodei.style.opacity = opacity;
        requestAnimationFrame(decrease);
    }
    decrease();
}*/
if (!window.requestAnimationFrame) {
    window. requestAnimationFrame = function (fn) {
        var timer = 6.66; // 60 fps
        setTimeout(fn,timer);
    }
}
const serviceName = ['Free suport', 'Delivery','Express delivery','Gift Cards'];
const serviceText = ['Open for working hours.', 'Delivery to adresss avaiable', 'Sing Up Now!', 'Gift cards comming soon!'];
if(bodyHasClass) {
    for(let i = 0; i < serviceName.length; i++) {
        let html = `<div class="container-fluid d-flex justify-content-center align-items-center text-center flex-column">
                        <span class="icon-image" id = "service${i+1}"></span>
                        <h5>${serviceName[i]}</h5>
                        <p>${serviceText[i]}</p>
                    </div>`;
    
        document.getElementById("ourOFFERRS").innerHTML += html;
    }
}
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }