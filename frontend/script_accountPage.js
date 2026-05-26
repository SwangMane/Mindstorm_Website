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
      method: 'POST',
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

    console.log(data);


  } catch (error) {
    console.error("Full account page error:", error);

    // Better than string matching:
    switch (error.message) {
      case "":
        break;
    }
  }
}