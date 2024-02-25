let inputs = [
  {
    id: 1,
    placeholder: "username",
    name: "username",
    type: "text",
    errorMessage: "please enter a valid username",
    pattern:"^[a-zA-z]{6,40}$"
  },
  {
    id: 2,
    placeholder: "E-mail",
    name: "email",
    type: "email",
    errorMessage: "please enter a valid email",
  },
  {
    id: 3,
    placeholder: "password",
    name: "password",
    type: "text",
    errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character! ",
    pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^_&*])[a-zA-Z0-9!@#$%^_&*]{8,20}$"
    // pattern:"(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_]){8,20}"
  },
  {
    id: 4,
    placeholder: "confirmPassword",
    name: "confirmPassword",
    errorMessage: "passwords doesn't match",

    type: "text",
  },
];

export default inputs;
