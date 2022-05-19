const setError = (id, error) => {
  const el = document.getElementById(id);
  error ? el.classList.add('error') : el.classList.remove('error');
};

const registration = (e) => {
  e.preventDefault();

  const form = new FormData(e.target);
  const baseId = (name) => `js-registration-form-${name}`;

  const firstName = form.get('firstName');
  setError(baseId('firstName'), !firstName);

  const lastName = form.get('lastName');
  setError(baseId('lastName'), !lastName);

  const email = form.get('email');
  setError(baseId('email'), !email);

  const username = form.get('username');
  setError(baseId('username'), !username);

  const password = form.get('password');
  setError(baseId('password'), !password);
};

// * Export
export { registration };
