const validate = (inputs) => {
  const errors = {};
  const { name, email, password, confirmPassword } = inputs;

  // Check Name
  if (!name) {
    errors.name = 'Name is required';
  }

  // Check Email
  if (!email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = 'This email is not valid';
  }

  // Check Password
  if (!password) {
    errors.password = 'Password is required';
  } else if (password.length < 6) {
    errors.password = 'Password length should be 6 chars or more';
  }

  // Check Confirm Password
  if (!confirmPassword) {
    errors.confirmPassword = 'Confirm Password is required';
  } else if (confirmPassword !== password) {
    errors.confirmPassword = 'Password do not match';
  }

  // Errors Count
  errors.count = Object.keys(errors).length;

  return errors;
};

export default validate;
