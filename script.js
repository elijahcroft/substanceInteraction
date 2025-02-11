document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll('.substance-button');
    let infoBox = document.querySelector('.card-body');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {  
            let drugName = event.target.value;

            // Toggle opacity and add/remove the drug name
            buttons.forEach(btn => {
                if (btn.value === drugName) {
                    // Grey out the button
                    btn.style.opacity = (btn.style.opacity === '0.7') ? '1' : '0.7';
                }
            });

            // Add or remove the drug name in the info box
            let existingParagraph = Array.from(infoBox.children).find(p => p.textContent === drugName);
            if (existingParagraph) {
                infoBox.removeChild(existingParagraph); 
            } else {
                let newParagraph = document.createElement('p');
                newParagraph.textContent = drugName;  
                infoBox.appendChild(newParagraph);  
            }
        });
    });
});
