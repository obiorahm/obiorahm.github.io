let menu_activator_obj = document.getElementById('small-menu-activator');
menu_activator_obj = addEventListener('click',displayMenu);

function displayMenu(){
  let menu = document.getElementById('small-menu');
  console.log(window.getComputedStyle(menu, null).display);
  let style = window.getComputedStyle(menu, null).display;
  if (style == "none"){
    console.log("hidden");
    menu.className =  "menu menu-lg menu-sm display_menu";
  }else{
    console.log("visible");
    menu.className =  "menu menu-lg menu-sm hide_menu";
  }
}
