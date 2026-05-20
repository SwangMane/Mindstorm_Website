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

      else if (action === 'login') {
          loginPage();
      }

      else if (action === 'create') {
          createPage();
      }

      else if (action === 'createBtn') {
          createAccount();
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
///  FORGOT PASSWORD FUNC  ///
///                        ///
//////////////////////////////
function forgotPassword() {
  window.location.hash = '#forgot';
}

//////////////////////////////
///                        ///
///       LOGIN FUNC       ///
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

console.log(
  document.querySelector('#input_minecraft_username')
);

console.log(
  document.querySelector('#input_create_email')
);

console.log(
  document.querySelector('#input_create_password')
);

console.log(
  document.querySelector('#input_create_passwordConfirm')
);

//////////////////////////////
///                        ///
///  CREATE ACCOUNT FUNC   ///
///                        ///
//////////////////////////////
async function createAccount() {

  console.log("creating account");

  try {

    // gather form information

    const minecraft_username = document.querySelector('#input_minecraft_username').value.trim();

    const email = document.querySelector('#input_create_email').value.trim();

    const password = document.querySelector('#input_create_password').value.trim();

    const confirm_password = document.querySelector('#input_create_passwordConfirm').value.trim();


    if (!minecraft_username) {
      throw new Error("Minecraft username is empty");
    }

    if (!email) {
      throw new Error("Email is empty");
    }

    if (!password) {
      throw new Error("Password is empty");
    }

    if (password !== confirm_password) {
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

    console.log("Account created:", createData);

  }

  catch (error) {
    console.error(error.message);
  }
}