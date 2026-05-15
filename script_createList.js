/////////////////////////////////////////////////
///                                           ///
///         CREATE LIST SCRIPT PAGE           ///
///                                           ///
/////////////////////////////////////////////////

// ALL IMPORTS 

//-----------------------------------------------------------------//

// used to create a list with the given specifications | createList(name, 'ID', 'ID', location)
export function createList(listName, listId, itemClass, location, spacer, spacerColor) {

  // create an un-ordered list with the given ID
  let list = `<ul id="${listId}">`;


  // lopp through each item in the provided list
  listName.forEach(item => {

    if (spacer === true) {

    let listSpacer = `<li class="list_spacer ${spacerColor}"</li>`  

    // add each item to the list with a spacer
    list += `<li class="${itemClass}">${item}</li>`;
    list += listSpacer;

    }
    else {

      // add each item to the list
      list += `<li class="${itemClass}">${item}</li>`;
      
    }

  });

  // close the list off
  list += `</ul>`;

  // append the list to the innerHTML of the given location
  location.innerHTML += list;
}