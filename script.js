document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll('.substance-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked:');
            this.style.opacity = '0.7';
            this.disabled = true;
        });
    });
});
