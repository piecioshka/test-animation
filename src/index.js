function startAnimation_setInterval($element, distance, duration) {
    console.log('Call startAnimation_setInterval');
    $element.style.left = `0px`;

    const startAnimationTime = performance.now();
    let currentLeft = parseInt(
        window.getComputedStyle($element).getPropertyValue('left')
    );
    const stepLimit = currentLeft + distance;

    const clock = setInterval(() => {
        const endAnimationTime = performance.now();
        const progress = (endAnimationTime - startAnimationTime) / duration;
        currentLeft = progress * distance;

        if (currentLeft < stepLimit) {
            $element.style.left = `${currentLeft}px`;
        } else {
            $element.style.left = `${distance}px`;
            clearInterval(clock);
        }
    }, 0);
}

function startAnimation_requestAnimationFrame($element, distance, duration) {
    console.log('Call startAnimation_requestAnimationFrame');
    $element.style.left = `0px`;

    const startAnimationTime = performance.now();
    let currentLeft = parseInt(
        window.getComputedStyle($element).getPropertyValue('left')
    );
    const stepLimit = currentLeft + distance;

    function loop() {
        const endAnimationTime = performance.now();
        const progress = (endAnimationTime - startAnimationTime) / duration;
        currentLeft = progress * distance;

        if (currentLeft < stepLimit) {
            $element.style.left = `${currentLeft}px`;
            requestAnimationFrame(loop);
        } else {
            $element.style.left = `${distance}px`;
        }
    }

    requestAnimationFrame(loop);
}

function startAnimation_keyframes($element) {
    console.log('Call startAnimation_keyframes');
    $element.style.left = `0px`;
    $element.classList.add('animate-keyframes');
}

function startAnimation_transforms($element) {
    console.log('Call startAnimation_transforms');
    $element.style.left = `0px`;
    $element.classList.add('animate-transforms');
}

function bootstrap() {
    const $square = document.querySelector('#square');

    document.querySelector('#button-interval').addEventListener('click', () => {
        startAnimation_setInterval($square, 100, 3000);
    });

    document.querySelector('#button-request-animation-frame').addEventListener('click', () => {
        startAnimation_requestAnimationFrame($square, 100, 3000);
    });

    document.querySelector('#button-keyframes').addEventListener('click', () => {
        startAnimation_keyframes($square);
    });

    document.querySelector('#button-transforms').addEventListener('click', () => {
        startAnimation_transforms($square);
    });
}

window.addEventListener('DOMContentLoaded', bootstrap);
