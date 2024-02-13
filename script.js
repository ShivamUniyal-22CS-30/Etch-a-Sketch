document.addEventListener('DOMContentLoaded',()=>{

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
        // HOVERING COLOR
        const gridItems = document.querySelectorAll('.gridItem');
        
        gridItems.forEach(function(gridItem){
            gridItem.addEventListener('mouseover',() => {
                gridItem.style.backgroundColor = "pink";
            });
        });

        // RANDOMrgb BACKGROUND TO GRIDITEM
        const randomRGB = document.querySelector('.randomRGB');

        randomRGB.addEventListener('click',() => {
            gridItems.forEach((gridItem) => {
                gridItem.addEventListener('mouseover',() => {
                    // Math.random() for random RGB
                    let rgb1 = Math.round(Math.random() * 255 + 1);
                    let rgb2 = Math.round(Math.random() * 255 + 1);
                    let rgb3 = Math.round(Math.random() * 255 + 1);

                    gridItem.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})` ;
                });
            });
        });

        // ERASER 
        let eraserBtn = document.querySelector('.eraserBtn');

        eraserBtn.addEventListener('click', () => {
            gridItems.forEach((gridItem) => {
                gridItem.addEventListener('mouseover',() => {
                    gridItem.style.backgroundColor = "white";
                });
            });
        });

        //CLEARING the CANVAS
        let clearBtn = document.querySelector('.clearBtn');

        clearBtn.addEventListener('click', () => {
            gridItems.forEach((gridItem) => {
                gridItem.style.backgroundColor = 'white';
            })
        });
    
}


// COSTUMIZING GRID
const button = document.querySelector('button');
button.addEventListener('click',()=>{
    let noOfSquares = prompt("Enter no. of squares per side = ");

    //self removing the gridRows
    const removeRows = document.querySelectorAll('.gridRow');
    removeRows.forEach((removeRow)=>{
        removeRow.remove();
    })
    
    //calling makeGrids() when the btn is clicked
    makeGrids(noOfSquares);

});


});