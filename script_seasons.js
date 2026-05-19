/////////////////////////////////////////////////
///                                           ///
///       CREATE SEASONS SCRIPT PAGE          ///
///                                           ///
/////////////////////////////////////////////////

// ALL IMPORTS 

import { siteImages, prevSeasonsList, siteVariables } from './script_variables.js';

//-----------------------------------------------------------------//

// used to create a list with the given specifications | createList(name, 'ID', 'ID', location, spacer, spacerColor, index(list index if wanted), background (if wanted), subtitle (if wanted))
export function createSeasons() {

prevSeasonsList.forEach(season => {
  const li = document.getElementById(season.tagName);

  if (!li) return;

  // use first picture as background
  const bgImage = Array.isArray(season.pics)
  ? season.pics[0]
  : season.pics;

  li.style.backgroundImage = `url(${bgImage})`;

  // create content container
  const content = document.createElement('div');
  content.className = 'season_content';

  // name
  const nameP = document.createElement('p');
  nameP.className = 'season_name';
  nameP.textContent = season.name;

  // date
  const dateP = document.createElement('p');
  dateP.className = 'season_date';
  dateP.textContent = season.date;

  li.addEventListener('click', (e) => {
    e.stopPropagation();

    // open your menu here
    console.log(`Open menu for ${season.name}`);
  });

  // append everything
  content.appendChild(nameP);
  content.appendChild(dateP);

  li.appendChild(content);

  })
}