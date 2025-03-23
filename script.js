document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll('.substance-button');
    let infoBox = document.querySelector('.card-body');
    let selectedDrugs = new Set(); // Track selected drugs
    let displayedEffects = new Map(); // Track displayed effects and their elements

    buttons.forEach(button => {
        button.addEventListener('click', async function(event) {
            let drugName = event.target.value;

            // Toggle drug selection
            if (selectedDrugs.has(drugName)) {
                selectedDrugs.delete(drugName); // Deselect drug
                button.style.opacity = '1'; // Reset button opacity
            } else {
                selectedDrugs.add(drugName); // Select drug
                button.style.opacity = '0.7'; // Dim button
            }

            // Fetch and display effects for all selected drugs
            infoBox.innerHTML = ''; // Clear the info box
            displayedEffects.clear(); // Reset displayed effects

            for (let selectedDrug of selectedDrugs) {
                try {
                    let response = await fetch(`http://127.0.0.1:5000/get_effects?drug=${selectedDrug}`);
                    let data = await response.json();

                    if (response.ok) {
                        // Display the effects for the selected drug
                        let drugHeader = document.createElement('h3');
                        drugHeader.textContent = selectedDrug.charAt(0).toUpperCase() + selectedDrug.slice(1);
                        infoBox.appendChild(drugHeader);

                        let effectsList = document.createElement('ul');
                        data.effects.forEach(effect => {
                            if (displayedEffects.has(effect)) {
                                // Highlight existing effect in red
                                displayedEffects.get(effect).style.color = 'red';
                            } else {
                                // Add new effect
                                let listItem = document.createElement('li');
                                listItem.textContent = effect;
                                effectsList.appendChild(listItem);
                                displayedEffects.set(effect, listItem); // Track the effect element
                            }
                        });
                        infoBox.appendChild(effectsList);
                    } else {
                        let errorMessage = document.createElement('p');
                        errorMessage.textContent = `Error fetching effects for ${selectedDrug}: ${data.error}`;
                        infoBox.appendChild(errorMessage);
                    }
                } catch (error) {
                    let errorMessage = document.createElement('p');
                    errorMessage.textContent = `Error fetching effects for ${selectedDrug}.`;
                    infoBox.appendChild(errorMessage);
                }
            }

            // If no drugs are selected, display a placeholder message
            if (selectedDrugs.size === 0) {
                infoBox.textContent = 'No drugs selected.';
            }
        });
    });
});
