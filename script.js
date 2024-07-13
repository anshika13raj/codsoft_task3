document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            const buttonText = e.target.innerText;

            if (buttonText === 'C') {
                display.innerText = '0';
            } else if (buttonText === 'DEL') {
                if (display.innerText.length > 1) {
                    display.innerText = display.innerText.slice(0, -1);
                } else {
                    display.innerText = '0';
                }
            } else if (buttonText === '=') {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
            } else {
                if (display.innerText === '0') {
                    display.innerText = buttonText;
                } else {
                    display.innerText += buttonText;
                }
            }
        });
    });
});
