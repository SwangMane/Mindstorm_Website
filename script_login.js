/////////////////////////////////////////////////
///                                           ///
///        LOGIN / CREATE ACCOUNT PAGE        ///
///                                           ///
/////////////////////////////////////////////////

// ALL IMPORTS 

import { siteVariables } from './script_variables.js';

//-----------------------------------------------------------------//



//////////////////////////////
///                        ///
///  HASHES EACH OF        ///
//   THE FORMS FOR ACCESS  ///
///                        ///
//////////////////////////////
function showFormFromHash() {

    const hash = window.location.hash || '#login';

    const forms = {
        '#login': formIds.loginForm,
        '#forgot': formIds.forgotForm,
        '#create': formIds.createForm
    };

    document.querySelectorAll('form')
        .forEach(f => f.style.display = 'none');

    (forms[hash] || formIds.loginForm)
        .style.display = 'flex';
}

//////////////////////////////
///                        ///
///  ADDS A GLOBAL EVENT   ///
/// LISTENER FOR PASSWORD  ///
///       TOGGLERS         ///
///                        ///
//////////////////////////////
document.addEventListener('click', (e) => {

    if (!e.target.classList.contains('togglePassword')) return;

    const form = e.target.closest('form');

    const inputs = form.querySelectorAll('.passwordInput');

    inputs.forEach(input => {

        input.type =
            input.type === 'password'
                ? 'text'
                : 'password';
    });

    const firstInput = inputs[0];

    e.target.textContent =
        firstInput.type === 'password' ? '👁' : '🙈';
});

function clearForms() {
    document.querySelectorAll('form').forEach(form => {

        form.querySelectorAll('input, textarea').forEach(el => {
            el.value = "";
        });

        form.querySelectorAll('select').forEach(el => {
            el.selectedIndex = 0;
        });
    });
}


//////////////////////////////
///                        ///
///    WINDOW LISTENERS    ///
///                        ///
//////////////////////////////
window.addEventListener('DOMContentLoaded', () => {


  document.querySelectorAll('#login_form input')
    .forEach(i =>
      i.addEventListener('input', () =>
        validateForm('#login_form', formIds.loginBtn)
      )
    );

  document.querySelectorAll('#create_account_form input')
    .forEach(i =>
      i.addEventListener('input', () =>
        validateForm('#create_account_form', formIds.createBtn)
      )
    );

  document.querySelectorAll('#forgot_password_form input')
    .forEach(i =>
      i.addEventListener('input', () =>
        validateForm('#forgot_password_form', formIds.forgotBtn)
      )
    );


  //////////////////////////////
  ///                        ///
  ///  LISTENERS FOR EACH OF ///
  ///    THE FORM LINKS      ///
  ///                        ///
  //////////////////////////////
  document.addEventListener('click', (e) => {

      const actionEl = e.target.closest('[data-action]');

      if (!actionEl) return;

      e.preventDefault();

      const action = actionEl.dataset.action;

      if (action === 'forgot') {
        forgotPassword();
      }

      else if (action === 'login_page') {
        loginPage();
      }

      else if (action === 'create') {
        createPage();
      }

      else if (action === 'createBtn') {
        createAccount();
      }

      else if (action === 'login') {
        loginAccount();
      }
  });

})

window.addEventListener('load', () => {
    showFormFromHash();
});

window.addEventListener('hashchange', () => {
  showFormFromHash()
  clearForms();
})

//////////////////////////////
///                        ///
///  ALL FORMS AND THEIR   ///
///     COMPONENTS         ///
///                        ///
//////////////////////////////
const formIds = {

  hash: null,

  // login form | enabled by default
  loginForm: document.getElementById("login_form"),
  // login Button
  loginBtn: document.querySelector('#login_btn'),

  // forgot password form
  forgotForm: document.getElementById("forgot_password_form"),
  // forgot password btn
  forgotBtn: document.querySelector('#reset_password_btn'),

  // create account form
  createForm: document.getElementById("create_account_form"),
  // create account button
  createBtn: document.querySelector('#create_account_btn'),
}


function validateForm(formSelector, button) {

  const inputs = document.querySelectorAll(
    `${formSelector} input[required]`
  );

  const allFilled = [...inputs].every(i => i.value.trim() !== '');

  button.disabled = !allFilled;
}


//////////////////////////////
///                        ///
///  FORGOT PASSWORD PAGE  ///
///                        ///
//////////////////////////////
function forgotPassword() {
  window.location.hash = '#forgot';
}

//////////////////////////////
///                        ///
///       LOGIN PAGE       ///
///                        ///
//////////////////////////////
function loginPage() {
  window.location.hash = '#login';
}


//////////////////////////////
///                        ///
///  CREATE ACCOUNT PAGE   ///
///                        ///
//////////////////////////////
function createPage() {
  window.location.hash = '#create';
}


//////////////////////////////
///                        ///
///   LOGIN ACCOUNT FUNC   ///
///                        ///
//////////////////////////////
async function loginAccount() {
  console.log("logging into account");

  try {
    const emailInput = document.querySelector('#account_email');
    const passwordInput = document.querySelector('#account_password');

    const email = emailInput.value.trim();
    const password = passwordInput.value; // don't trim passwords

    if (!email) {
      await popup_notif('email_empty');
      throw new Error("Email is empty");
    }

    if (!password) {
      await popup_notif('password_empty');
      throw new Error("Password is empty");
    }

    if (password.length < 10) {
      await popup_notif('password_length');
      throw new Error("Password must be 10 or more characters");
    }

    const response = await fetch(
      `${siteVariables.data_server.ip_address}/login`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      }
    );

    let data;
    try {
      data = await response.json();
    } catch {
      throw new Error("Invalid server response");
    }

    if (!response.ok) {
      const err = new Error(data?.message || "Login failed");
      err.code = data?.code;
      err.status = response.status;
      throw err;
    }

    console.log("Account access successful");

    // Example UX action:
    // window.location.href = "/dashboard";

  } catch (error) {
    console.error("Login error:", error.message);

    // Better than string matching:
    switch (error.message) {
      case "Password is incorrect":
        popup_notif("wrong_password");
        break;
      case "Email is empty":
        popup_notif("email_empty");
        break;
      default:
        popup_notif("login_failed");
        break;
    }
  }
}

//////////////////////////////
///                        ///
///  CREATE ACCOUNT FUNC   ///
///                        ///
//////////////////////////////
async function createAccount() {

  console.log("creating account");

  let minecraft_username;

  const email_box = document.querySelector('#input_create_email');
  const password_box = document.querySelector('#input_create_password');
  const confirm_password_box = document.querySelector('#input_create_passwordConfirm');
  const minecraft_username_box = document.querySelector('#input_minecraft_username');

  try {

    // gather form information

    minecraft_username = document.querySelector('#input_minecraft_username').value.trim();

    const email = document.querySelector('#input_create_email').value.trim();

    const password = document.querySelector('#input_create_password').value;

    const confirm_password = document.querySelector('#input_create_passwordConfirm').value;


    if (!minecraft_username) {
      throw new Error("Minecraft username is empty");
    }
    else if (!email) {
      throw new Error("Email is empty");
    }
    else if (!password) {
      throw new Error("Password is empty");
    }
    else if (password.length < 10) {
      const alertMsg = await popup_notif('password_length');
      throw new Error("Password must be 10 or more characters")
    }
    else if (password !== confirm_password) {
      throw new Error("Passwords do not match");
    }

    const url = siteVariables.data_server.ip_address + siteVariables.data_server.Minecraft_username + encodeURIComponent(minecraft_username);

    const response = await fetch(url);
    const data = await response.json();

    // Now handle errors properly
    if (!response.ok) {
      throw new Error(data.error || 'Unknown server error');
    }

    console.log("Minecraft player verified: ", data);

       const createResponse = await fetch(
      `${siteVariables.data_server.ip_address}/createAccount`,
      {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          minecraft_username,
          email,
          password
        })
      }
    );

    const createData = await createResponse.json();

    if (!createResponse.ok) {
      throw new Error(createData.error || 'Failed to create account');
    }

    console.log("Account created:", createData, data);

    const openPopup = await popup_notif('account_created', createData, data);

    loginPage();

  }

  catch (error) {

    console.log("FULL ERROR: ", error);

    if (error.message.includes("Player not found")) {

      console.log("Player not found");

      minecraft_username_box.setCustomValidity(
        "Player not found"
      );

      minecraft_username_box.reportValidity();
    }
    else {

      console.error(error.message);

    }
  }
}

//////////////////////////////
///                        ///
/// ACCOUNT / LOGIN POPUP  ///
///                        ///
//////////////////////////////

async function popup_notif(type, creationData, playerData) {
  return new Promise((resolve) => {
    let popup = type;
    let createData;
    let data;
    let closeBtn;
    let playerName;

    if (creationData) {
      createData = creationData;
    }
    if (playerData) {
      data = playerData;

      // store the players name
      playerName = data.name;
    }

    // grab the popup wrapper 
    const popupWrapper = document.getElementById(siteVariables.login_page.popup_wrapper);
    const popupContents = document.getElementById(siteVariables.login_page.popup_contents);

    // if the users account is successfully created
    if (popup === 'account_created') {

      const message = `<p>Account for Minecraft user ${playerName} has been created successfully!</p>
                      <br>
                      <p>Please return to the login page to access your account`;

      showObj(popupWrapper, popupContents, message);

    }

    if (popup === 'password_length') {

      const password_box = document.querySelector('#input_create_password');

      password_box.setCustomValidity(
        "Password must be atleast 10 characters"
      );

      password_box.reportValidity();

    }

    // to show the popup wrapper
    function showObj(popup, textArea, text) {
      let curr = popup;
      let contents = textArea;
      let message = text;

      curr.style.display = 'flex';

      if (contents) {
        contents.innerHTML = '';

        contents.innerHTML += message;
      }
      else {
        curr.innerHTML += message;
      }

      closeBtn = document.getElementById(siteVariables.login_page.popup_close_btn);

      closeBtn.addEventListener('click', () => {

        hideObj(curr);

      }, { once: true })
    }

    // to hide the popup wrapper
    function hideObj(name) {
      let curr = name;

      curr.style.display = 'none';

      resolve();
    
    }
  })
}