let dodger = document.getElementById("dodger");

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

function moveDodgerLeft() {
    let left = parseInt(dodger.style.left.replace("px", ""));

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
};

function moveDodgerRight() {
    let left = parseInt(dodger.style.left.replace("px", ""));

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
};