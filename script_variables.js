/////////////////////////////////////////////////
///                                           ///
///             ALL VARIABLES PAGE            ///
///                                           ///
/////////////////////////////////////////////////

// ALL IMPORTS 

import { generateNavItem } from './script_createNav.js';

//-----------------------------------------------------------------//

/*     
  site colors 

  red   (scarlet)  = #AB202A (171, 32, 42)
  grey-blue        = #335549
  Yellow           = #f5d43e 
  off-white        = #faf9eb
  grey             = #545454
  black (not 100%) = #15141A (21, 20, 26)  
  black            = #000000

*/

///////////////////////////////////////////
///                                     ///
///         ALL SITE VARIABLES          ///
///                                     ///
///////////////////////////////////////////
export const siteVariables = {

    // amount of time per refresh on the background
    background_refresh: 10000,

    // all minecraft server details
    minecraft_server: {

        // current player list | gets filled out with minecraft API
        current_players: [],

        // IP to the minecraft server
        ip_address: '136.33.25.35', // place server ip inside '' here

        // port number of the minecraft server
        port_number: 25565, // place server port (just numbers) here

        // version of the minecraft server
        version_number: "1.21.1",

        // current server icon
        server_icon: "images/cobblemonIcon.png",

        // server offline message
        msg_offine: `Server is <span class="red">offline</span>`,

        // server offline message in player section
        msg_offline_players: `Server is currently offline`,

        // server online but no players
        msg_current_players_0: 'Server is empty',

        // server online message
        msg_online: `Server is <span class="green">online</span>`,

        // the last time the server was updated
        msg_lastUpdate: 'Server Status Updated: ' + new Date(),

        // the player count message
        msg_playerCount: 'Player count: ',


    },

    // all backend server details
    data_server: {

        // IP to the data server
        ip_address: 0,

    },

    // server seasons items
    seasons_page: {

        // id of seasons list
        list_id: 'server_seasons_list',

        // class of each item in the list
        li_class: 'season_wrap yellow',

    }
}

///////////////////////////////////////////
///                                     ///
///       ALL SERVER ANNOUNCEMENTS      ///
///                                     ///
///////////////////////////////////////////
export const server_announcements = {

    // the list of announcements in order
    announcements: [
        'Mindstorm website version 3 is now live. Create an account and join our community!',
        'Mindstorm Cobblemon season 3 start date: <span class="underline_text">5/23/2026</span>',
    ],

    // id 
    list_id: 'announcement_list',

    // class of each item in the list
    li_class: 'announcement offWhite_text',
};

///////////////////////////////////////////
///                                     ///
///           ALL SITE ICONS            ///
///                                     ///
///////////////////////////////////////////
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

///////////////////////////////////////////
///                                     ///
///     ALL SITE BACKGROUND IMAGES      ///
///                                     ///
///////////////////////////////////////////
export const siteImages = {
    // main page (splash) background pictures
    index: [    "images/backgrounds/season6PicFireworks.jpg",   /* Fireworks-Island-Season5 */ 
                "images/backgrounds/season4PicTownhall.jpg",    /* season4-Townhall */ 
                "images/backgrounds/season5PicDarkCastle.jpg",  /* season5-DARKS-Castle */
    ],
    about: [    "images/backgrounds/cobblemon_season_1_14.png",   /* cobblemon season 1 tournament sign */ 
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
    forum: [    "images/backgrounds/season4PicTownhall.jpg",    /* season4-Townhall */ 
                "images/backgrounds/season6PicFireworks.jpg",   /* Fireworks-Island-Season5 */ 
                "images/backgrounds/season5PicDarkCastle.jpg",  /* season5-DARKS-Castle */
    ],    
    login: [    "images/backgrounds/cobblemon_season_1_10.png",   /* cobblemon season 1 random picture */ 
                "images/backgrounds/cobblemon_season_1_21.png",    /* cobblemon season 1 bunch of tnt */ 
                "images/backgrounds/season6PicFireworks.jpg",   /* Fireworks-Island-Season5 */
    ],
    placeHolder: [  "images/placeholder.jpg",   /* Placeholder-image */
    ],
};


///////////////////////////////////////////
///                                     ///
///       ALL ITEMS USED IN NAVBAR      ///
///                                     ///
///////////////////////////////////////////
export const navBarItems = {

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
            link: "games.html",
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


        // NOT IN NAV

        // the login / create account page
        login: {
            // text displayed in nav item
            title: "Login",
            // the link on the nav item
            link: "login.html",
            // priority in the nav list
            priority: 6,
            // if the element is displayed or not
            displayed: true,
            // classes to add the the <li> element
            liClass: "login_link",
            // generate the contents of the nav link
            contents: (item, isActive = false) => generateNavItem(item, isActive)    
        }

    }
}


///////////////////////////////////////////
///                                     ///
///    ALL PREVIOUS SEASONS DETAILS     ///
///                                     ///
///////////////////////////////////////////
export const prevSeasonsList = [
    {
        name: 'Vanilla Season 1',
        tagName: 'vanS1',
        date: '2013',
        version: 'vanilla 1.6',
        desc: 'New beggining',
        members: 'Dark, Debesk, Block, The_Cakeinator, BilateralPaper4, Mas',
        pics: genSeasonPics(1, 24, 'avif'), // season 1 | 24 pics in gallery
    },  
    {
        name: 'Vanilla Season 2',
        tagName: 'vanS2',
        date: '?',
        version: '?',
        desc: 'fill this in',
        members: 'Dark, Debesk, Block, Smilee, TheFull98, Dawson12XD, Hagermans_Rule, Sadfaic, Propally, SharpKiller, TheDooieBall, Allanarruda, Bubluebu, Shane, HotLava',
        pics: siteImages.placeHolder, //genSeasonPics(?, ?), 
    },
    {
        name: 'Vanilla Season 3',
        tagName: 'vanS3',
        date: '2014',
        version: '?',
        desc: 'Savanah Spawn, yaDead arena',
        members: 'Dark, Debesk, Block, Smilee, Pudding, Hagermans_Rule, Yadead1, Yadead2, TheFull98, ImmortalNerd, Allanarruda, MrTall, Dominionus, GuitarHero, Kiwi, iJevinator, CE_Winchester, Grahm, HotLava',
        pics: genSeasonPics(3, 11, 'avif'), // season 3 | 11 pics in gallery
    },
    {
        name: 'Vanilla Season 4',
        tagName: 'vanS4',
        date: '2015',
        version: '?',
        desc: 'Town hall, Nether Hub, Bases',
        members: 'Dark, Debesk, Block, Smilee, Pudding, HillbillDeluex, alexSirben, TheFull98, Alexanderrisom, menda94, Grahm, PsychoSammy, CyberPunk, Deadspace, Zufgus, Victorbjr, ColdParasite, Hagermans_Rule, Cam_2002, Hyperinsomniac, Foxtrott, GuitarHero',
        pics: genSeasonPics(4, 49, 'avif'), // season 4 | 49 pics in gallery
    },
    {
        name: 'Vanilla Season 5',
        tagName: 'vanS5',
        date: '?',
        version: '?',
        desc: 'Funky path',
        members: 'Dark, Block, Smilee, HillbillyDeluex, Pudding, ColdParasite, TheFull98, Kiwi, Debesk, Deadspace, Hyperinsomniac, John, Foxtrott, PottsGames',
        pics: genSeasonPics(5, 32, 'avif'), // season 5 | 32 pics in gallery
    },
    {
        name: 'Vanilla Season 6',
        tagName: 'vanS6',
        date: '?',
        version: '?',
        desc: 'Baby sitter season',
        members: 'Dark, Block, Smilee, Pudding, HillbillyDeluex, Gamrpanda, RiiskyPlaysMC, JTParent, FoundMissing, SquidDweller, YungJoke, Syncro, QuestFinder',
        pics: genSeasonPics(6, 7, 'avif'), // season 6 | 7 pics in gallery
    },
    {
        name: 'Cobblemon Season 1',
        tagName: 'cobS1',
        date: '(Jan 2025 - May 2025)',
        version: '?',
        desc: '?',
        members: '?',
        pics: genSeasonPics('cobblemon_1', 29, 'png'), // cobblemon season 1 | 29 pics in gallery//siteImages.placeHolder, //genSeasonPics(?, ?), 
    },
    {
        name: 'Cobblemon Season 2',
        tagName: 'cobS2',
        date: '(Nov 2025 - Dec 2025)',
        version: '?',
        desc: '?',
        members: '?',
        pics: genSeasonPics('cobblemon_2', 6, 'png'), //pics: siteImages.placeHolder, //genSeasonPics(?, ?), 
    },
]

// function to generate the season pic image arrays
// each array will be added to the appropriate image 
// season array = season image
function genSeasonPics(seasonNumber, imgCount, imgType) { // use the season number, then amount of images in file
    //console.log(`generating season ${seasonNumber} image arrays`)
    // returns arrays for each page
    return Array.from({ length: imgCount }, (_, i) =>
        `images/season_${seasonNumber}/season${seasonNumber}_${i + 1}.${imgType}`
    );
}

