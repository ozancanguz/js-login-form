const form = document.querySelector('form');
const input = document.querySelector('input');
const welcomeText = document.querySelector('.welcome-text');
console.log("kajdkad");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    welcomeText.textContent = `Welcome ${input.value}!`;
    welcomeText.classList.add('show');
    input.value = ''; // clear the input field
    setTimeout(() => {
        welcomeText.classList.remove('show');
    }, 3000); // hide the text after 3 seconds
});
