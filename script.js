document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to the Event Platform!');

    // Handle back button navigation
    const backButtons = document.querySelectorAll('.back-button');
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    });
});
