 function changeColor(button) {
            const buttonText = button.textContent.toLowerCase();
            switch (buttonText) {
                case 'click to change this to green':
                    button.style.backgroundColor = 'green';
                    break;
                case 'click to change this to blue':
                    button.style.backgroundColor = 'blue';
                    break;
                case 'click to change this to red':
                    button.style.backgroundColor = 'red';
                    break;
                default:
                    button.style.backgroundColor = 'black';
            }
        }
 const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                if (button.textContent.toLowerCase() === 'clear') {
                    // If Clear button is clicked, reset all button colors to black
                    buttons.forEach(btn => {
                        btn.style.backgroundColor = 'black';
                    });
                } else {
                    // Change color based on text content
                    changeColor(button);
                }
            });
        });