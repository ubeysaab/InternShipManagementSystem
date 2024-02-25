import { useRef, useState } from "react";
import FormInput from "./FormInput";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

// TODO  Create inputs array and pass things using object distructuring
import inputsData from "../inputs.js";

function RegisterForm() {
  let [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(inputs);

  // -Functions

  function handleChange(e) {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(e.target);
  }
  console.log(inputs.confirmPassword === inputs.password);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <div className="form__container  glass">
        <div className="flex-center">
          <Link to="/" style={{ color: "gray" }}>
            <FaArrowLeftLong />
          </Link>
          <h1 className="form__title">Register</h1>
        </div>
        <form onSubmit={handleSubmit}>
          {inputsData.map((input) => {
            return (
              <FormInput
                key={input.id}
                {...input}
                handleChange={handleChange}
                value={inputs[input.name]}
                pattern={
                  input.name == "confirmPassword"
                    ? inputs.password
                    : input.pattern
                }
              />
            );
          })}

          <button className="form__button">Submit</button>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
