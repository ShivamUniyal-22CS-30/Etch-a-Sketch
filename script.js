// puting 16*16 divs inside container div
const containerDiv = document.querySelector('#container');  

function makeGrids(size){
    for(let rowIndex = 0; rowIndex < size; rowIndex++){
        let row = document.createElement('div');
        row.classList.add('gridRow');
        // row.style.border = "2px solid red";

        for(let colIndex = 0; colIndex<size; colIndex++){
            let colCell = document.createElement('div');
            colCell.classList.add('gridItem');
            // colCell.style.border = "1px solid gray";
            // colCell.innerText = "16";

            row.appendChild(colCell);
        }
        containerDiv.appendChild(row);
        
    }
}

makeGrids(16);


// HOVERING COLOR
 const gridItems = document.querySelectorAll('.gridItem');

gridItems.forEach(function(gridItem){
    gridItem.addEventListener('mouseover',()=>{
        gridItem.style.backgroundColor = 'pink';
    })
})