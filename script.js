document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll(".substance-button");

    cards.forEach(card => {
        card.addEventListener('click', function(event) {
            console.log('Element clicked!', event.target);
        });
    });
});
