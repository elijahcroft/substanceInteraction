document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll('.substance-button');
    let infoBox = document.querySelector('.card-body')

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked:');
            if(this.style.opacity === '0.7'){
                this.style.opacity = '1';
                
                infoBox.innerHTML = ''
            }
            else{
                this.style.opacity = '.7';
                infoBox.innerHTML = `<p>button pressed</p>`; // Display effect info
                
            }
            
            
            
            
        });
    });

});
