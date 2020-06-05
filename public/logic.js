const display = document.getElementById('display').firstElementChild;
let reset = false;

['.digits', '.operators'].forEach(
    selector => Array(...document.querySelector(selector).children).forEach(
        arg => arg.onclick = function () {
            if ('0123456789+-/*.'.includes(this.innerText)) {
                display.innerText = (
                    display.innerText === '0' || (reset && (!'+/-*'.includes(arg.innerText)))
                ) ? this.innerText : display.innerText + this.innerText
            }; 
            reset = false
        }
    )
);

['clear', 'equals', 'percent', 'del'].forEach(
    selector => document.querySelector(`#${selector}`).addEventListener(
        'click', {
            clear: () => display.innerText = '0',
            del: () => {
                const rem = display.innerText.substr(
                    0, display.innerText.length-1
                )
                display.innerText = (rem) ? rem : '0'
            },
            equals: () => {
                display.innerText = Intl.NumberFormat().format(
                    eval(display.innerText.replace(',', ''))
                ); 
                reset = true
            },
            percent: () => {
                display.innerText = display.innerText / 100; 
                reset = true  
            },
        }[selector]
    )
)
