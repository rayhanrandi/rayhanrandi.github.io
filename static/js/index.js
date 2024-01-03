// Main page logic
const sections = ['about', 'experience', 'technical-skills', 'projects', 'misc'];
var currentSectionIndex = 0;

function init() {
    currentSectionIndex = 0;
    sections.forEach(section => {
        console.log(document.querySelector(`#${section}-button`))
        console.log(document.querySelector(`.${section}`))
        document.querySelector(`#${section}-button`).classList.remove('active');
    });
    document.querySelector('#about-button').classList.add('active');
    document.querySelector('.about').classList.add('active-section');
}

// Function to show the current active section
function showCurrentSection() {
    console.log(currentSectionIndex + sections[currentSectionIndex]);
    var section = sections[currentSectionIndex];
    sections.forEach(section => {
        document.querySelector(`#${section}-button`).classList.remove('active');
        document.querySelector(`.${section}`).classList.remove('active-section');
    });
    document.querySelector(`#${section}-button`).classList.add('active');
    document.querySelector(`.${section}`).classList.add('active-section')
}

// Function to handle navigation
function nextCarousel() {
    if (currentSectionIndex == sections.length - 1) {
        currentSectionIndex = 0;
    } else {
        currentSectionIndex++;
    }
    showCurrentSection();
}
function prevCarousel() {
    if (currentSectionIndex == 0) {
currentSectionIndex = sections.length - 1;
    } else {
        currentSectionIndex--;
    }
    showCurrentSection();
}
function navigateCarousel(section) {
    if (section == currentSectionIndex) { return; }
    currentSectionIndex = section;
    showCurrentSection();
}

// Initial setup
init();

// Event listeners for navigation buttons
document.querySelector('#carousel-shuffle-right').addEventListener('click', () => nextCarousel());
document.querySelector('#carousel-shuffle-left').addEventListener('click', () => prevCarousel());
document.querySelector('#about-button').addEventListener('click', () => navigateCarousel(0));
document.querySelector('#experience-button').addEventListener('click', () => navigateCarousel(1));
document.querySelector('#technical-skills-button').addEventListener('click', () => navigateCarousel(2));
document.querySelector('#projects-button').addEventListener('click', () => navigateCarousel(3));
document.querySelector('#misc-button').addEventListener('click', () => navigateCarousel(4));

