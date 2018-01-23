
/* Use query selector to select the html object you
 * want to access and change. 
 * 
 */
let label = document.querySelector('label');
let textField = document.querySelector('input[name="words"]');
let  addTextBtn = document.querySelector('input[name="add"]');
let  divToAdd = document.querySelector('div');

/*
 * The addEventListener allows you to respond to the
 * user on the page based on an action the user did
 * 
 * in this case then the user clicks on the button 
 * it will run a function.
 */
addTextBtn.addEventListener('click',addText );

/* To add another Event just call the function again
 * with another event and function
 * addTextBtn.addEventListener('mousemove',addText );
 */


/*
 * this is the format for creating a function in JavaScript.
 * 
 * you can call it like so: addText();
 */
function addText() {
      
    if ( textField.value.length ) {
        
        label.classList.remove('error');
        var result = `<p> ${ textField.value } </p>`;
        divToAdd.innerHTML += result;
        
     } else {
        label.classList.add('error'); 
     }
    
}


