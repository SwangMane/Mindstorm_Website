/////////////////////////////////////////////////
///                                           ///
///             MAIN SCRIPT PAGE              ///
///                                           ///
/////////////////////////////////////////////////

// ALL IMPORTS 

import { backgroundSlideshow } from './script_background.js';
import { fillNavbar } from './script_nav.js';
import { fillMinecraftServerStats } from './script_mcserver.js';

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