import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

// ! don't use yup, reactform ,formmake. if you don't how they work and how react nature is
import inputsData from "../inputs.js";
import FormInput from "./FormInput";

export default function LoginForm() {
  let [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  let loginFormInputs = inputsData.filter((input) => {
    return input.name == "email" || input.name == "password";
  });
  console.log(loginFormInputs);

  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleChange(e) {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(e.target);
  }
  return (
    <div className="form__container glass">
      <div className="flex-center ">
        <Link to="/" style={{ color: "gray" }}>
          <FaArrowLeftLong />
        </Link>
        <h1 className="form__title">Login</h1>
      </div>
      <form action="">
        {loginFormInputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            handleChange={handleChange}
            value={inputs[input.name]}
          />
        ))}
        <button className="form__button">Submit</button>
      </form>
    </div>
  );
}
