const numberOfStars = 20;

function createStar(starType) {
    const star = document.createElement('div');
    star.classList.add(starType);

    // Set random top and left positions
    star.style.top = `${Math.random() * window.innerHeight}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;

    // Set a random size for the star
    const rSize = Math.random() * 3.5;
    star.style.width = `${rSize}px`;
    star.style.height = `${rSize}px`;

    document.body.appendChild(star);
}

//Creates 'numberOfStars' at once using the creatStar function to position each star randomly.
function createStars(starType, count = numberOfStars) {
    for (let i = 0; i < count; i++) {
        createStar(starType);
    }
}

// Star creation
createStars('star', 7);
setTimeout(() => createStars('star2'));
setTimeout(() => createStars('star3'), 1000);
setTimeout(() => createStars('star4'), 2000);
setTimeout(() => createStars('star5'), 3000);
setTimeout(() => createStars('star6'), 4000);
setTimeout(() => createStars('star7'), 5000);
setTimeout(() => createStars('star8'), 6000);
