/* Create the divs using JavaScript. 
Don’t try to create them by hand by copying and pasting them in your HTML file!
*/

// Creates square of divs
const container = document.getElementById("container");

function makeDivs(numDivs){
    for (let d = 0; d <numDivs; d++){
        let cells = document.createElement('div');
        container.appendChild(cells)
    }
}

// makes the divs
makeDivs(32)