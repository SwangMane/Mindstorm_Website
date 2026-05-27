/////////////////////////////////////////////////
///                                           ///
///             ACCOUNT PAGE SCRIPT           ///
///                                           ///
/////////////////////////////////////////////////

// ALL IMPORTS 

import { logout_user } from './script_logout.js';
import { siteVariables } from './script_variables.js';

//-----------------------------------------------------------------//

window.onload = () => {

  const account_page_logout_btn = document.getElementById(
    siteVariables.account_page.logout_btn
  );

  if (account_page_logout_btn) {

    account_page_logout_btn.addEventListener('click', () => {

      logout_user();

    }, { once: true });

  }

  fillAccountPage()

};


export async function fillAccountPage() {

 try {

  const response = await fetch(
    `${siteVariables.data_server.ip_address}/userinfo`,
    {
      method: 'GET',
      credentials: "include",
    }
  );

    let data;
    try {
      data = await response.json();
    } 
    catch {
      throw new Error("Invalid server response");
    }

    if (!response.ok) {

      console.log("FULL SERVER RESPONSE:", data);

      const err = new Error(
        data?.error || data?.message || "Account page failed"
      );

      err.code = data?.code;
      err.status = response.status;

      throw err;
    }

    fillPage(data);

    console.log(data);


  } catch (error) {
    console.error("Full account page error:", error);

    // Better than string matching:
    switch (error.message) {
      case "":
        break;
    }
  }

  function fillPage(account) {

    // store the account being pulled
    const data = account;

    // profile picture img tag
    const profile_pic = document.getElementById(siteVariables.account_page.profile_picture);
    const picture_link = data.user.user_profilePicture;
    profile_pic.src = picture_link;

    // username stuff
    const account_username = document.getElementById(siteVariables.account_page.minecraft_username);
    const username = data.user.user_name;
    account_username.textContent = username;

    // user join date stuff
    const account_joinDate = document.getElementById(siteVariables.account_page.user_joinDate);
    const joindate = data.user.user_joinDate;
    account_joinDate.textContent = joindate;

    // user server coins stuff
    const account_serverCoins = document.getElementById(siteVariables.account_page.user_serverCoins);
    const serverCoins = data.user.user_serverPoints;
    account_serverCoins.textContent = serverCoins;

  }



}