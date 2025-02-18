const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".name"),
copyBtn = document.querySelector(".copy"),
synth = speechSynthesis;

function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
    });
};

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

quoteBtn.addEventListener("click", randomQuote);

// Color gradient change of background

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const quoteContainer = document.querySelector('.quote-container');
    const button = document.querySelector('button');

    function getRandomGradient() {
      const angle = Math.floor(Math.random() * 360);
      const color1 = getRandomColor();
      const color2 = getRandomColor();
      return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    }

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function updateColors() {
      const randomGradient = getRandomGradient();
      body.style.background = randomGradient;
      // If you want to keep the quote container background constant, comment the line below
      quoteContainer.style.background = randomGradient;
      button.style.background = randomGradient;
    }

    button.addEventListener('click', updateColors);
  });
