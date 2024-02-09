// puting 16*16 divs inside container div
const containerDiv = document.querySelector('#container');  

function makeGrids(size){
    for(let rowIndex = 0; rowIndex < size; rowIndex++){
        let row = document.createElement('div');
        row.classList.add('gridRow');
        row.style.border = "2px solid red";

        for(let colIndex = 0; colIndex<size; colIndex++){
            let colCell = document.createElement('div');
            colCell.classList.add('grid-item');
            colCell.style.border = "1px solid green";
            colCell.innerText = `${rowIndex * size + (colIndex+1)}`

            row.appendChild(colCell);
        }
        containerDiv.appendChild(row);
        
    }
}

makeGrids(16);