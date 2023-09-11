document.addEventListener("DOMContentLoaded", function () {

    function createShootingStar() {
        const star = document.createElement("div");
        star.classList.add("shooting-star");

        const animations = [
            'shootRight',
            'shootLeft',
            'shootUp',
            'shootDown',
            'shootDiagonalRightUp',
            'shootDiagonalLeftUp',
            'shootDiagonalRightDown',
            'shootDiagonalLeftDown'
        ];

        // Randomly pick an animation
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

        star.style.animation = `${randomAnimation} 3s ease-out forwards, fadeOut 1.5s ease-out 0.5s forwards`;

        // Set random initial position for the shooting star
        star.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
        star.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;

        document.body.appendChild(star);

        // Remove the shooting star from the DOM after its animation completes to prevent overcrowding
        setTimeout(() => {
            star.remove();
        }, 3000);
    }

    // Initialize a shooting star immediately when the page loads
    createShootingStar();

    // Create a shooting star at a random interval between 6 to 8 seconds
    setInterval(createShootingStar, Math.random() * 2000 + 6000);
});
