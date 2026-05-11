/////////////////////////////////////////////////
///                                           ///
///             MAIN SCRIPT PAGE              ///
///                                           ///
/////////////////////////////////////////////////

import { backgroundSlideshow } from './script_background.js';

// checks what page the user is currently on
// each page on the site has an id'd body searched for
function checkCurrentPage() {
    const currentPage = document.body.id;
    return currentPage;
}

backgroundSlideshow(checkCurrentPage());