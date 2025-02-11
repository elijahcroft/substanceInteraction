document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll('.substance-button');
    let infoBox = document.querySelector('.card-body');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {  // Include event in the function parameter
            console.log('Button clicked:');
            let drugName = event.target.value;

            // Toggle opacity and add/remove the drug name
            if (this.style.opacity === '0.7') {
                this.style.opacity = '1';
                let existingParagraph = Array.from(infoBox.children).find(p => p.textContent === drugName);

                if (existingParagraph) {
                    infoBox.removeChild(existingParagraph);  
                }
            } else {
                this.style.opacity = '0.7';

                let newParagraph = document.createElement('p');  
                newParagraph.textContent = drugName;  
                infoBox.appendChild(newParagraph);  
            }
        });
    });
});
