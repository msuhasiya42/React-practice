import React, { useState } from "react";

const FormWizard = () => {
  const [steps, setSteps] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    state: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      city: "",
      state: "",
      password: "",
      confirmPassword: "",
    });
    setSteps(1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    setSteps((step) => step + 1);
  };

  const handlePre = () => {
    setSteps((step) => step - 1);
  };

  return (
    <div>
      <h3>Form Wizard</h3>
      <form action="" onSubmit={handleSubmit}>
        {steps == 1 && (
          <div>
            Name{" "}
            <input
              onChange={handleInputChange}
              value={formData.name}
              type="text"
              name="name"
            />{" "}
            <br />
            Email{" "}
            <input
              onChange={handleInputChange}
              value={formData.email}
              type="email"
              name="email"
            />
          </div>
        )}

        {steps == 2 && (
          <div>
            City{" "}
            <input
              onChange={handleInputChange}
              value={formData.city}
              type="text"
              name="city"
            />{" "}
            <br />
            State{" "}
            <input
              onChange={handleInputChange}
              value={formData.state}
              type="text"
              name="state"
            />
          </div>
        )}

        {steps == 3 && (
          <div>
            password{" "}
            <input
              onChange={handleInputChange}
              value={formData.password}
              type="password"
              name="password"
            />{" "}
            <br />
            confirm password{" "}
            <input
              onChange={handleInputChange}
              value={formData.confirmPassword}
              type="password"
              name="confirmPassword"
            />
          </div>
        )}

        {steps > 1 && (
          <button type="button" onClick={handlePre}>
            Previous
          </button>
        )}

        {steps < 3 && (
          <button type="button" onClick={handleNext}>
            Next
          </button>
        )}

        {steps === 3 && <button>Submit</button>}
      </form>
    </div>
  );
};

export default FormWizard;
