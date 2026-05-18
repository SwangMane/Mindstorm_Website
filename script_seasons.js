/////////////////////////////////////////////////
///                                           ///
///       CREATE SEASONS SCRIPT PAGE          ///
///                                           ///
/////////////////////////////////////////////////

// ALL IMPORTS 

import { siteImages } from './script_variables.js';

//-----------------------------------------------------------------//

// used to create a list with the given specifications | createList(name, 'ID', 'ID', location, spacer, spacerColor, index(list index if wanted), background (if wanted), subtitle (if wanted))
export function createSeasons(listName, listId, itemClass, itemId = null, location, spacer, spacerColor, index = null, background = null, subtitle = null ) {

  // create a list to append items to
  let list = `<ul id="${listId}">`;

  // loop through each item
  listName.forEach(item => {

    // if index is valued | filter
    const value = index !== null
    ? `<p class="season_title">${item[index]}`
    : item;

    // set the background to the 0 index of images
    const bg = item.pics?.[0];

    // optional background image
    const backgroundStyle = background && bg
    ? `style="background-image: url('${bg}')"`
    : '';

    // optional subtitle
    const subTitleHTML = subtitle !== null
    ? `<p class="season_subtitle">${item[subtitle]}</p>`
    : '';

    // add each item to the list
    list += `
      <li class="${itemClass}" id="${item.tagName}" ${backgroundStyle}>
        <div class="list_item_wrapper green_gradient_bcg">
          ${value}
          ${subTitleHTML}
        </div>
      </li>
    `;

    // if a spacer is wanted between each item
    if (spacer) {
      list += `<li class="list_spacer ${spacerColor}"></li>`;
    }

  });

  // break the list
  list += `</ul>`;

  // add the finished list to the HTML
  location.innerHTML += list;
}