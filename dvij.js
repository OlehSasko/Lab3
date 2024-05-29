const container = document.getElementById("container");
const image = document.getElementById("image");

let x = 0;
let y = 0;
let xDirection = 1;
let yDirection = 1;
const speed = 2;
let isMouseOverImage = false;

container.addEventListener("mousemove", function(event) {
    const rect = container.getBoundingClientRect();
    const containerX = rect.left;
    const containerY = rect.top;

    const imageRect = image.getBoundingClientRect();
    const imageX = imageRect.left;
    const imageY = imageRect.top;

    if (
        event.clientX >= imageX &&
        event.clientX <= imageX + image.width &&
        event.clientY >= imageY &&
        event.clientY <= imageY + image.height
    ) {
        isMouseOverImage = true;
    } else {
        isMouseOverImage = false;
    }
});

function animateImage() {
    if (!isMouseOverImage) {
        x += xDirection * speed;
        y += yDirection * speed;

        if (x + image.width > container.clientWidth) {
            x = container.clientWidth - image.width;
            xDirection *= -1;
        } else if (x < 0) {
            x = 0;
            xDirection *= -1;
        }

        if (y + image.height > container.clientHeight) {
            y = container.clientHeight - image.height;
            yDirection *= -1;
        } else if (y < 0) {
            y = 0;
            yDirection *= -1;
        }

        image.style.left = x + "px";
        image.style.top = y + "px";
    }

    requestAnimationFrame(animateImage);
}

animateImage();
