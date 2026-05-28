/////////////////////////////////////////////////
///                                           ///
///             ABOUT SCRIPT PAGE             ///
///                                           ///
/////////////////////////////////////////////////

// ALL IMPORTS 

import { siteVariables } from './script_variables.js';

//-----------------------------------------------------------------//

function fillStaffData() {

  // grab the element to put the staff stuff in
  const wrapper = document.getElementById(siteVariables.about_page.staff_wrapper);

  siteVariables.minecraft_server.special_players.owners.forEach((owner) => {

    // create the div for each player wrapper
    const div = document.createElement('div');
    div.className = 'staff_wrapper';

    const p = document.createElement('p');
    const name = owner;
    p.textContent = name;

    const img = document.createElement('img');
    img.src = `https://minotar.net/avatar/${name}`;
    img.className = 'mc-face';
    
    div.appendChild(p);
    div.appendChild(img);

    wrapper.appendChild(div);

  })


}

fillStaffData();