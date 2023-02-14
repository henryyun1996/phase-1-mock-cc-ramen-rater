const API = "http://localhost:3000/ramens";

fetch(API)
    .then(response => response.json())
    .then(ramenImage => ramenImage.forEach(renderImages));

function renderImages(ramen) {
    // console.log(ramen.image);
    const menu = document.querySelector('#ramen-menu');
    const img = document.createElement('img');
    img.src = ramen.image;
    menu.append(img);

    img.addEventListener('click', () => {
        console.log(ramen);
        document.querySelector('.detail-image').src = ramen.image;
        document.querySelector('.detail-image').alt = ramen.name;
        document.querySelector('.name').innerText = ramen.name;
        document.querySelector('.restaurant').innerText = ramen.restaurant;
        document.querySelector('#comment-display').innerText = ramen.comment;
        document.querySelector('#rating-display').innerText = ramen.rating;
    })
}

const newRamen = document.querySelector('#new-ramen');
newRamen.addEventListener('submit', (e) => {
    e.preventDefault();
    let ramenObj = {
        name: e.target['name'].value,
        restaurant: e.target['restaurant'].value,
        image: e.target['image'].value,
        rating: e.target['rating'].value,
        comment: e.target['new-comment'].value
    }
    renderImages(ramenObj);
    confirmRamen(ramenObj);
})

function confirmRamen(ram) {
    fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application.json",
            Accept: "application.json"
        },
        body: JSON.stringify(ram)
    })
    .then(response => response.json());
}