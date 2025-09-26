const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container"); // fixed selector
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Move the No button randomly on hover
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetHeight);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";      // hide question
  heartLoader.style.display = "block";           // show heart loader

  setTimeout(() => {
    heartLoader.style.display = "none";          // hide loader
    resultContainer.style.display = "block";     // show video + text
    gifResult.play();
  }, 3000);
});
