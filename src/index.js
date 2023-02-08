// write your code here
const API = "http://localhost:3000/ramens"
const ramenPics = document.querySelector('#ramen-menu');
const ramenData = document.querySelector('#ramen-detail');

function renderImages(ramen) {
    const ramenInfo = document.createElement('img');
    ramenInfo.src = ramen.image;
    ramenPics.append(ramenInfo);
}

// GET fetch response
fetch(API)
    .then(response => response.json())
    .then(ramen => ramen.forEach(renderImages));

ramenPics.addEventListener('click', showInfo);

function showInfo(e) {
    console.log('click'); 
    document.getElementById


}