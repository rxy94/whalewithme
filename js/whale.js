/***************************************************************************/
/*                     JavaScript for Whale with me                        */
/*                     Author: Ruyi Xia Ye                                 */
/*                     Version: 1.0                                        */
/*                     Date: November 2023                                 */
/*                     Comments: Lenguajes de Marcas project               */
/***************************************************************************/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/********************************    Código del modal del footer  *****************************************/
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}