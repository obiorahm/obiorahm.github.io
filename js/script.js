let menu_activator_obj = document.getElementById('small-menu-activator');
menu_activator_obj.addEventListener('click',switchEvent);
menu_activator_obj.addEventListener('touchend',switchEvent);


function switchEvent(e){
  switch(e.type){
    case "click":
    displayMenu(e);
    break;
    case "touchend":
    displayMenu(e);
    break;
  }
}

function displayMenu(e){
  let menu = document.getElementById('small-menu');
  console.log(e);
  console.log(window.getComputedStyle(menu, null).display);
  let style = window.getComputedStyle(menu, null).display;
  if (style == "none"){
    menu.className =  "menu menu-lg menu-sm display_menu";
  }else{
    menu.className =  "menu menu-lg menu-sm hide_menu";
  }
}
