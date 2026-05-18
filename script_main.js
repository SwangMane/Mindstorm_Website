/////////////////////////////////////////////////
///                                           ///
///             MAIN SCRIPT PAGE              ///
///                                           ///
/////////////////////////////////////////////////

// ALL IMPORTS 

import { backgroundSlideshow } from './script_background.js';
import { fillNavbar } from './script_nav.js';
import { fillMinecraftServerStats } from './script_mcserver.js';
import { createList } from './script_createList.js';
import { server_announcements, prevSeasonsList } from './script_variables.js';

//-----------------------------------------------------------------//

// checks what page the user is currently on
// each page on the site has an id'd body searched for
function checkCurrentPage() {
    const currentPage = document.body.id;
    return currentPage;
}

// GRAB THE CURRENT PAGE
const page = checkCurrentPage();

backgroundSlideshow(page);
fillNavbar(page);
fillMinecraftServerStats(page);

// if on the index page 
if (page === "index") {
    let spacer = true;
    let location = document.getElementById("announcements");
    // create a list of the server announcements 
    createList(server_announcements.announcements, server_announcements.list_id, server_announcements.li_class, location, spacer, 'yellow')
}


// if on the seasons page 
if (page === "seasons") {
    let location = document.querySelector('main');
    // create a list of all the available seasons on variables
    createList(prevSeasonsList, 'test', 'test', location, null, null, 'name')
}