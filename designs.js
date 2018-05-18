// Select color input
var color = document.getElementById("colorPicker").value;

// Select size input
var gWidth = document.getElementById("inputWidth").value;
var gHeight = document.getElementById("inputHeight").value;

// When size is submitted by the user, call makeGrid()
document.getElementById("sizePicker").addEventListener("submit", makeGrid);
document.getElementById("pixelCanvas").addEventListener("click", draw);
//document.getElementsByTagName("td").addEventListener("click", draw);

function makeGrid() {

  event.preventDefault();

  var gWidth = document.getElementById("inputWidth").value;
  var gHeight = document.getElementById("inputHeight").value;

  var table = document.getElementById("pixelCanvas");
  	
  	 for (var i = 0; i < gHeight; i++) {
     var tr = document.createElement("tr"); 
     for (var j = 0; j < gWidth; j++) {
         var td = document.createElement("td");
     tr.appendChild(td);
     }
    table.appendChild(tr);
    }
   

  
}

function draw() {

  const PicColors = document.getElementById("colorPicker").value;

  //const InitColor = document.getElementsByClassName("test");

//InitColor.color = colors;

document.getElementsByTagName("td").style.background = black ;


  alert(PicColors);

}

//function chBackcolor(color) {
//
 // const colors = document.getElementById("colorPicker").value;
  
//  document.getElementsByTagName(td).color = colors;
//}
