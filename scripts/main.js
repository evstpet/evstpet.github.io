var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Добро пожаловать, ' + storedName;
}

function changeHeadingClass() {
    let myHeading = document.querySelector('h1');

    if (myHeading.className === 'green') {
        myHeading.className = 'red';
    } else {
        myHeading.className = 'green    ';
    }
}

var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === './images/kenig.JPG') {
        myImage.setAttribute('src', './images/kenig2.JPG');
    } else {
        myImage.setAttribute('src', './images/kenig.JPG');
    }
}

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('Пожалуйста введите свое имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Добро пожаловать, ' + myName;
}