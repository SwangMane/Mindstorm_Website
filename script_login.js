
// login form | enabled by default
const loginForm = document.getElementById("login_form");

// forgot password form
const forgotForm = document.getElementById("forgot_password_form");

// create account form
const createForm = document.getElementById("create_account_form");


document.getElementById("forgot_password").addEventListener('click', (e) => {
  e.preventDefault();
  forgotPassword();
})

document.getElementById("login_link").addEventListener('click', (e) => {
  e.preventDefault();
  loginPage();
})

// checks what is open based on inputs
function openCheck(selector) {

  const selections = document.querySelectorAll(selector);

  for (const element of selections) {

    const isVisible = window.getComputedStyle(element).display !== 'none';

    if (isVisible) {

      return element.id;

    }
  }
  return null;
}

function forgotPassword() {

  console.log(openCheck('form'))

  loginForm.style.display = 'none';

  forgotForm.style.display = 'flex'

  console.log(openCheck('form'))

}

function loginPage() {

  loginForm.style.display = 'none';

  forgotForm.style.display = 'flex'

}