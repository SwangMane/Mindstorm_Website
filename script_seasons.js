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

    openSeason(season.name);

  });

  // append everything
  content.appendChild(nameP);
  content.appendChild(dateP);

  li.appendChild(content);

  })
}


function openSeason(name) {

  const clickedSeason = name;

  // set the outside wrapper as a constant
  const wrapperOut = document.getElementById(siteVariables.seasons_page.season_wrapper_out);

  // set the inside wrapper as a constant
  const wrapperIn = document.getElementById(siteVariables.seasons_page.season_wrapper_in);

  const addClass = 'fade_in_1s';

  // OPEN MODAL
  wrapperOut.style.display = 'flex';
  wrapperOut.classList.add(addClass);

  // CLOSE FUNCTION
  function closeSeason() {
    wrapperOut.classList.remove(addClass);
    wrapperOut.style.display = 'none';

    document.removeEventListener('click', outsideClickListener);
  }

  // CLOSE BUTTON
  const closeBtn = document.getElementById(
    siteVariables.seasons_page.close_seasons_btn
  );

  closeBtn.addEventListener('click', closeSeason, { once: true });

  // OUTSIDE CLICK
  function outsideClickListener(event) {

    // ignore clicks inside wrapper
    if (wrapperOut.contains(event.target)) return;

    closeSeason();
  }

  // prevents instant close
  setTimeout(() => {
    document.addEventListener('click', outsideClickListener);
  }, 0);

  // check each season for id match
  prevSeasonsList.forEach(season => {

    // if id matches clicked season
    if (clickedSeason === season.name) {

      // clear the wrapper 
      wrapperIn.innerHTML = '';

      // the title is the seasons name
      const title = document.createElement('p');
            title.className = '';
            title.textContent = 'Season: ' + season.name;

      // seasons date
      const date = document.createElement('p');
            date.className = '';
            date.textContent = 'Date: ' + season.date; 

      // seasons version
      const version = document.createElement('p');
            version.className = '';
            version.textContent = 'Minecraft version: ' + season.version;

      // seasons description
      const description = document.createElement('p');
            description.className = '';
            description.textContent = 'Season description: ' + season.desc;

      // seasons memberlist
      const memberList = document.createElement('ul');
            memberList.className = '';

      // loop through each member and add them to the list of members
      season.members.forEach((member) => {

        const memberElement = document.createElement('li');
        memberElement.className = '';
        memberElement.textContent = member;

        memberList.appendChild(memberElement);

      })


      // display all the information given
      wrapperIn.replaceChildren(title, date, version, description, memberList);

    }

  });
}