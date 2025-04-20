let noClickCount = 0;

function showCarousel() {
  if (noClickCount < 10) {
    alert(`Ayy di pa pwede! Kailangan mo muna pindutin si "No" ng 10x. Ilan na lang: ${10 - noClickCount}`);
    return;
  }

  
  const sure = confirm("Sure ka na? Gusto mo na talaga magbati?");
  if (!sure) {
    alert("Balik ka muna sa pagpindot ng 'No' ulit ha!");
    noClickCount = 0;
    return;
  }

  const reallySure = confirm("Sure ka talaga? Di ka na galit at bati na tayo?");
  if (!reallySure) {
    alert("Balik ka ulit sa No ha, hanggang sa ready ka na. 😢");
    noClickCount = 0;
    return;
  }


  document.querySelector(".question-container").style.display = "none";
  document.querySelector(".carousel-container").style.display = "block";
  document.getElementById("bg-music").play();
  document.getElementById("button-gallery").style.display = "flex";
}


function showFlip(imageSrc, message) {
  const reveal = document.getElementById("reveal");
  const flipCard = document.getElementById("flipCard");
  const front = document.getElementById("cardFront");
  const back = document.getElementById("cardBack");

  front.style.backgroundImage = `url('${imageSrc}')`; // Set image as front of the card
  back.innerText = ""; // Start with no text on the back

  reveal.style.display = "block";
  flipCard.classList.remove("flip"); // Make sure the card starts unflipped

  // Wait for 3 seconds to show the image first
  setTimeout(() => {
    // Now, show the text after 3 seconds
    back.innerText = message;

    // Wait another second to flip the card
    setTimeout(() => {
      flipCard.classList.add("flip");
    }, 1000); // Adjust the delay here if needed (1 second before flipping)
  }, 3000); // 3 seconds delay before the message appears
}
function moveNo() {
  noClickCount++;
  const noBtn = document.getElementById("no-btn");
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 100));
  noBtn.style.position = "absolute";
  noBtn.style.top = `${y}px`;
  noBtn.style.left = `${x}px`;
}
window.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bg-music");

  const playMusic = () => {
    bgMusic.play().catch(() => {
      console.log("Autoplay blocked. Music will play on user interaction.");
    });
  };

  playMusic();

  document.body.addEventListener("click", () => {
    playMusic();
  });
});