// fonction 1
var foot = document.querySelector('footer');
 
function consoleClick(){ 
  console.log(`clique`)
}
foot.addEventListener('click',consoleClick)


// fonction 1-bis
var foot = document.querySelector('footer');
 let i = 1 
function consoleClick(){ 
  console.log(`clique numéro ${i++}`)
}
foot.addEventListener('click',consoleClick)


//fonction 2 
var burger = document.querySelector('#navbarHeader');
var burgerMenu = document.querySelector('button.navbar-toggler');

function toggleHide(){
  burger.classList.toggle('collapse'); 
}
burgerMenu.addEventListener('click', toggleHide)



// fonction 3
var card = document.querySelectorAll('.card .btn-outline-secondary')[0];
var cardEdit1 = document.querySelectorAll('.card-text')[0];

function changeColor(){
  cardEdit1.classList.add('text-danger')
}
card.addEventListener('click',changeColor)



// fonction 4
var card = document.querySelectorAll('.card .btn-outline-secondary')[1];
var cardEdit = document.querySelectorAll('.card-text')[1];

function toggleColor(){
 cardEdit.classList.toggle('text-success')
}
card.addEventListener('click',toggleColor)



//fonction 5
var navbar = document.querySelector('header');
var linkCdn = document.querySelector('link');

function nuclear(){
  if (linkCdn.hasAttribute("href")) {
    linkCdn.removeAttribute('href');
  } 
  else  {
    linkCdn.setAttribute('href','https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
  }
}
navbar.addEventListener('dblclick',nuclear)



//fonction 6

var btnsView = document.querySelectorAll('.btn-success');
var cardTexts = document.querySelectorAll('.card-text');
var cardImgs = document.querySelectorAll('.card-img-top');

for(let i = 0; i < btnsView.length; i++) {

  let btn = btnsView[i];
  
  function minimize() {
    if (cardTexts[i].style.display != 'none') {
      cardTexts[i].style.display = 'none';
      cardImgs[i].style.width = '20%';
    } 
    else {
      cardTexts[i].style.display = '';
      cardImgs[i].style.width = '';
    }
  };
  btn.addEventListener('mouseover',minimize)
}

//fonction 7 & fonction 8


var parentContainer = document.querySelectorAll('.row')[1];
var firstButton = document.querySelectorAll('.my-2')[0];
var secondButton = document.querySelectorAll('.my-2')[1];

function rotateback() {
  firstButton.removeAttribute('href')
  parentContainer.insertBefore(parentContainer.firstChild, parentContainer.lastChild)
}
function rotatefront() {
  parentContainer.insertBefore(parentContainer.lastChild, parentContainer.firstChild)
}

firstButton.addEventListener('click',rotateback)
secondButton.addEventListener('click',rotatefront)

//fonction 9

var navbarBrand = document.querySelector('.navbar-brand');
var body = document.querySelector('body');

navbarBrand.addEventListener('keydown',(press) => {
  if (press.key == "a")
    //console.log("a")
    body.setAttribute("class","col-4")
    
  else if (press.key == "y") {
    //console.log("y")
    //body.classList.remove("col-4")
    body.setAttribute("class","col-4 offset-4")
  }
  else if (press.key == "p")
    //console.log("p")
    body.setAttribute("class","col-4 offset-8")
  else if (press.key == "b")
    //console.log("b")
    body.removeAttribute("class")
});