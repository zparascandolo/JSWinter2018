let submitBtn = document.querySelector('input[name="add"]');
let textField = document.querySelector('input[name="number"]');
submitBtn.addEventListener('click', subNum);
let min = 1;
let max = 100;
let sum = 0;
let avg = 0;
let cntr = 0;
function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function subNum() {

    let parsed = parseInt(textField.value)

    let grid = [];
    let str = '';
    str += '<table border="1">';
    for (let row = 0; row < parsed; row++) {
        grid[row] = [];
        str += '<tr>';
        for (let col = 0; col < parsed; col++) {
            grid[row][col] = randomNumber(min, max);
            cntr++;
            sum = grid[row][col] + sum;



            if (grid[row][col] % 3 === 0)
            {
                str += '<td class = "red">' + grid[row][col] + '</td>';
            } else if (grid[row][col] % 2 === 0)
            {
                str += '<td class = "blue" >' + grid[row][col] + '</td>';
            } else
            {
                str += '<td>' + grid[row][col] + '</td>';
            }

        }
        str += '</tr>';


    }
    avg = (sum / cntr);
    str += `</table></br><p>The Average number is:${avg}</p>`;


    document.querySelector('div').innerHTML = str;
    console.log(grid);



}
