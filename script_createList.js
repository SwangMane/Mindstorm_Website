/////////////////////////////////////////////////
///                                           ///
///         CREATE LIST SCRIPT PAGE           ///
///                                           ///
/////////////////////////////////////////////////

// ALL IMPORTS 

//-----------------------------------------------------------------//

// used to create a list with the given specifications | createList(name, 'ID', 'ID', location, spacer, spacerColor, index(list index if wanted))
export function createList(listName, listId, itemClass, location, spacer, spacerColor, index = null) {

  // create a list to append items to
  let list = `<ul id="${listId}">`;

  // loop through each item
  listName.forEach(item => {

    // if index is valued | filter
    const value = index !== null
    ? item[index]
    : item;

    // add each item to the list
    list += `<li class="${itemClass}">${value}</li>`;

    // if a spacer is wanted between each item
    if (spacer) {

      // add the spacer between each item
      list += `<li class="list_spacer ${spacerColor}"></li>`;

    }

  });

  // break the list 
  list += `</ul>`;

  // add the finished list to the HTML
  location.innerHTML += list;
}