const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
    if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
    else if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--;
    }

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    const totalLiters = 2; 
    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${totalLiters - (250 * fullCups / 1000)}L`;
    }
}

function setReminder() {
    const time = document.getElementById('reminder-time').value;
    if (time) {
        alert(`Reminder set for ${time}`);
    } else {
        alert('Please select a time.');
    }
}

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
  
    setTimeout(() => {
      loadingScreen.style.opacity = '0'; // Fade out the loading screen
      setTimeout(() => {
        loadingScreen.style.display = 'none'; // Hide the loading screen
        mainContent.style.display = 'block'; // Show the main content
      }, 500); // Allow fade-out animation to complete
    }, 3000); // Display loading screen for 3 seconds
  });

const quotes = [
  "Hydration is key to a healthy life!",
  "Drink water, stay energized.",
  "Every sip counts toward your goal.",
  "Water: Your body's best friend.",
  "Stay hydrated, stay focused."
];

let currentQuoteIndex = 0;

function updateQuote() {
    const quotesElement = document.getElementById('quotes');
    quotesElement.style.opacity = 0; // Fade out
    setTimeout(() => {
      quotesElement.textContent = quotes[currentQuoteIndex];
      quotesElement.style.opacity = 1; // Fade in
      currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }, 500); // Sync fade-out and text update
  }
  

// Rotate quotes every 5 seconds
setInterval(updateQuote, 5000);

// Set the first quote immediately
updateQuote();
