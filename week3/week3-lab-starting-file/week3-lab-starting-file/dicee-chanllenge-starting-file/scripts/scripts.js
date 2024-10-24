
document.querySelector(".play-btn").addEventListener("click", play);

function play() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1; //math.random will generate random from 0 to .99999999999, math.floor will round down to whole number

    const image1 = document.querySelector(".img1");
    image1.src = `images/dice${randomNumber1}.png`;

    const randomNumber2 = Math.floor(Math.random() * 6) + 1; //math.random will generate random from 0 to .99999999999, math.floor will round down to whole number

    const image2 = document.querySelector(".img2");
    image2.src = `images/dice${randomNumber2}.png`;

    const heading = document.querySelector("h1");

    if (randomNumber1 > randomNumber2) {
        heading.textContent = "Play 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
        heading.textContent = "Play 2 wins!";
    }else heading.textContent = "Draw";
}
