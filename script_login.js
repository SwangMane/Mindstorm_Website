

const formIds = {
  // login form | enabled by default
  loginForm: document.getElementById("login_form"),

  // forgot password form
  forgotForm: document.getElementById("forgot_password_form"),

  // create account form
  createForm: document.getElementById("create_account_form"),
}


document.querySelectorAll('.forgot_password').forEach((element) => {

  element.addEventListener('click', (e) => {

    e.preventDefault();

    forgotPassword();

  });

});

document.querySelectorAll('.login_link_account').forEach((element) => {

  element.addEventListener('click', (e) => {

    e.preventDefault();

    loginPage();

  });

});

document.querySelectorAll('.create_account').forEach((element) => {

  element.addEventListener('click', (e) => {

    e.preventDefault();

    createPage();

  });

});


// checks what is open based on inputs
function openCheck(selector) {

  const selections = document.querySelectorAll(selector);

  for (const element of selections) {

    const isVisible = window.getComputedStyle(element).display !== 'none';

    if (isVisible) {

      return element;

    }
  }
  return null;
}


function forgotPassword() {

  const currForm = openCheck('form');

  if (currForm) currForm.style.display = 'none';

  formIds.forgotForm.style.display = 'flex'
}

function loginPage() {

  const currForm = openCheck('form');

  if (currForm) currForm.style.display = 'none';

  formIds.loginForm.style.display = 'flex'
}

function createPage() {

  const currForm = openCheck('form');

  if (currForm) currForm.style.display = 'none';

  formIds.createForm.style.display = 'flex'
}