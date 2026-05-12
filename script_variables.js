/////////////////////////////////////////////////
///                                           ///
///             ALL VARIABLES PAGE            ///
///                                           ///
/////////////////////////////////////////////////

/*     
  site colors 

  red   (scarlet)  = #AB202A (171, 32, 42)
  grey-blue        = #335155
  Yellow           = #f8cf22 
  off-white        = #faf9eb
  grey             = #545454
  black (not 100%) = #15141A (21, 20, 26)  
  black            = #000000

*/

// all site variables such as IP's and ports
export const siteVariables = {

    // amount of time per refresh on the background
    background_refresh: 10000,

    // all minecraft server details
    minecraft_server: {

        // IP to the minecraft server
        ip_address: '136.33.25.35', // place server ip inside '' here

        // port number of the minecraft server
        port_number: 25565, // place server port (just numbers) here

    },

    // all backend server details
    data_server: {

        // IP to the data server
        ip_address: 0,

    }
}

// all icons used on the site
export const siteIcons = {

    // the offline (red circle) icon
    offline: '&#128308',

    // the online (green circle) icon
    online: '&#128994;',

    // hamburger menu icon || to open nav
    closedText: '&#9776;',

    // just a norma X || to close nav
    openText: 'X',

}

// list of background images and or all images loaded
export const siteImages = {
    // main page (splash) background pictures
    index: [    "images/backgrounds/season6PicFireworks.jpg",   /* Fireworks-Island-Season5 */ 
                "images/backgrounds/season4PicTownhall.jpg",    /* season4-Townhall */ 
                "images/backgrounds/season5PicDarkCastle.jpg",  /* season5-DARKS-Castle */
    ],
    about: [    "images/backgrounds/season6PicFireworks.jpg",   /* Fireworks-Island-Season5 */ 
                "images/backgrounds/season4PicTownhall.jpg",    /* season4-Townhall */ 
                "images/backgrounds/season5PicDarkCastle.jpg",  /* season5-DARKS-Castle */
    ],
    seasons: [  "images/backgrounds/season6PicFireworks.jpg",   /* Fireworks-Island-Season5 */ 
                "images/backgrounds/season4PicTownhall.jpg",    /* season4-Townhall */ 
                "images/backgrounds/season5PicDarkCastle.jpg",  /* season5-DARKS-Castle */
    ],
    games: [    "images/backgrounds/season6PicFireworks.jpg",   /* Fireworks-Island-Season5 */ 
                "images/backgrounds/season4PicTownhall.jpg",    /* season4-Townhall */ 
                "images/backgrounds/season5PicDarkCastle.jpg",  /* season5-DARKS-Castle */
    ],    
    loginRegister: [    "images/backgrounds/season6PicFireworks.jpg",   /* Fireworks-Island-Season5 */ 
                        "images/backgrounds/season4PicTownhall.jpg",    /* season4-Townhall */ 
                        "images/backgrounds/season5PicDarkCastle.jpg",  /* season5-DARKS-Castle */
    ],
    placeHolder: [  "images/placeholder.jpg",   /* Placeholder-image */
    ],
};


// used to generate the nav bar items 
const generateNavItem = (item, isActive = false) => {
    return `
        <li class="${isActive ? 'active container' : ''}">
            <div class="${navBarItems.liTags.classes}">
                <a href="${item.link}" class="${navBarItems.aTags.classes}" title="${item.title}">
                    ${item.title}
                </a>
            </div>
        </li>
    `;
};

// this is the list the <ul> inside each html page will fill off of
// Elements of the same page will not be displayed and will be auto filtered out
export const navBarItems = {

    // LI class names
    liTags: {
        classes: 'nav-link-wrap', // add more classes for each <li> item here
    },
    // a class names
    aTags: {
        classes: 'nav-links', // add more classes for each <a> item here
    },

    // all individual site pages | priority number
    sitePages: {
        
        // the index page | 1
        index: {
            // text displayed in nav item
            title: "Home",
            // the link on the nav item
            link: "index.html",
            // priority in the nav list
            priority: 1,
            // if the element is displayed or not
            displayed: true,
            // generate the contents of the nav link
            contents: (item, isActive = false) => generateNavItem(item, isActive)
        },

        // the about page | 2
        about: {
            // text displayed in nav item
            title: "Our story",
            // the link on the nav item
            link: "about.html",
            // priority in the nav list
            priority: 2,
            // if the element is displayed or not
            displayed: true,
            // generate the contents of the nav link
            contents: (item, isActive = false) => generateNavItem(item, isActive)
        },

        // the seasons page | 3
        seasons: {
            // text displayed in nav item
            title: "All seasons",
            // the link on the nav item
            link: "seasons.html",
            // priority in the nav list
            priority: 3,
            // if the element is displayed or not
            displayed: true,
            // generate the contents of the nav link
            contents: (item, isActive = false) => generateNavItem(item, isActive)
        },

        // the seasons page | 3
        games: {
            // text displayed in nav item
            title: "Minigames",
            // the link on the nav item
            link: "minigames.html",
            // priority in the nav list
            priority: 4,
            // if the element is displayed or not
            displayed: true,
            // generate the contents of the nav link
            contents: (item, isActive = false) => generateNavItem(item, isActive)
        },

        // the seasons page | 3
        forum: {
            // text displayed in nav item
            title: "Forum",
            // the link on the nav item
            link: "forum.html",
            // priority in the nav list
            priority: 5,
            // if the element is displayed or not
            displayed: true,
            // generate the contents of the nav link
            contents: (item, isActive = false) => generateNavItem(item, isActive)
        },

    }
}

