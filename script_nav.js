/////////////////////////////////////////////////
///                                           ///
///               THE NAV PAGE                ///
///                                           ///
/////////////////////////////////////////////////

// ALL IMPORTS 

import { siteIcons, siteVariables, navBarItems } from './script_variables.js';

//-----------------------------------------------------------------//

// function to fill the navbar 
// detects what page its currently on to add the 'current page' hightlight
export function fillNavbar(page) {

  // log users current viewing page
  console.log('user currently viewing ' + page);

  // grab the nav element on the current page
  const nav = document.querySelector('#navbar_list');
  
  // if the nav bar is found
  if (nav) {
    console.log("nav bar found");

    // setting a template 
    let html = "";

    // look for the menu toggler
    const menuToggler = document.querySelector('#menuToggle');

    // if the menu toggler button is found - aka screen is smaller than 1280px
    if (menuToggler) {
      menuToggler.innerHTML = `<a>${navBarItems.navBtnTags.closedText}</a>`;

      menuToggler.addEventListener("click", () => {
          nav.classList.toggle("active");
      });
    }

    // grabs the navBarItems object and filters it
    // object is found in variables.js
    Object.entries(navBarItems.sitePages)
    .filter(([key, item]) =>
      typeof item.contents === "function" &&
      item.displayed &&
      item.displayed === true
    )
    // sorts by the priority number
    // priority number of each nav item in the object
    .sort(([, a], [, b]) => a.priority - b.priority)
    .forEach(([key, item]) => {

      // set the contents of html
      html += item.contents(item, key === page);

    });

    // sets the nav bar contents = to filtered contents
    nav.innerHTML = html;

  }
  // if no navbar is found
  else {
    console.log("nav not found");
  }
  
  // fill the server status indicator 
  MinecraftAPI.getServerStatus(siteVariables.minecraft_server.ip_address, {
  port: siteVariables.minecraft_server.port_number
  }, function (err, status) {

    // If the server can't be reached | offline (red circle)
    if (err || !status.online) {
      document.querySelector('#server_status_icon').innerHTML = siteIcons.offline; // red circle for offline
    }
    // if the server can be reached | offline (red circle) OR online (green circle)
    else {
      document.querySelector('#server_status_icon').innerHTML = status.online ? siteIcons.online : siteIcons.offline;
    }
  })
}