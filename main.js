let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('buttons'));

buttons.map( button =>  {
    button.addEventListener ( 'click', (c) => {
    switch(c.target.innerHTML) {
        case 'C':
            display.innerText = '';
            break;
        case 'Del':
            if(display.innerText) {
            display.innerText = display.innerText.slice(0, -1);}
            break;
        case '=':
            try{
                display.innerText = eval(display.innerText)
            } catch {
                display.innerText = "Error!"
            }
            break;
        
        default:
        display.innerText += c.target.innerText
        
    } 
})
})