///////////////////////////////////////////////////////
// Menu de opções...
//////////////////////////////////////////////////////

 var shape_menu_element = document.getElementById('shape_menu_element'),
     menu = document.getElementById('menu');

 function shape_menu(estado) {
     return shape_menu_element.style.display = estado;
 }

 menu.onclick = function() {
   
    if( shape_menu_element.style.display == 'none') {
         shape_menu('block');
    }
     else {
     	shape_menu('none');
     }
 	

 }