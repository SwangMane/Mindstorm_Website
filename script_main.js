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
import { server_announcements, prevSeasonsList, siteVariables } from './script_variables.js';
import { createSeasons } from './script_seasons.js';

//-----------------------------------------------------------------//

// checks what page the user is currently on
// each page on the site has an id'd body searched for
function checkCurrentPage() {
    const currentPage = document.body.id;
    return currentPage;
}

// GRAB THE CURRENT PAGE
const page = checkCurrentPage();

// Starts the pages background slideshow based on the current page
backgroundSlideshow(page);

// Fills the nav bar according to the current page
fillNavbar(page);

// fills the minecraft server status if needed
fillMinecraftServerStats(page);

// if on the index page fill out the announcements list 
if (page === "index") {
    let spacer = true;
    let location = document.getElementById("announcements");
    // create a list of the server announcements 
    createList(server_announcements.announcements, server_announcements.list_id, server_announcements.li_class, null, location, spacer, 'yellow', null)
}


// if on the seasons page fill out the seasons list 
if (page === "seasons") {
    let spacer = false;
    let location = document.querySelector('#server_seasons');
    // create a list of all the available seasons on variables
    createList(prevSeasonsList, siteVariables.seasons_page.list_id, siteVariables.seasons_page.li_class, true, location, null, null, null)
    //createSeasons(prevSeasonsList, siteVariables.seasons_page.list_id, siteVariables.seasons_page.li_class, true, location, spacer, null, 'name', true, 'date');
}