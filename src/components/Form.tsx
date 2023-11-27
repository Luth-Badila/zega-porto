import React, { useState } from "react";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;

    // Name validation
    if (formData.name.length < 3 || formData.name.length > 50) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Name must be between 3 and 50 characters" }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }

    //     // Email validation with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Invalid email address" }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    //     // Phone validation with regex
    // const phoneRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    // if (!phoneRegex.test(formData.phone)) {
    //   setErrors((prevErrors) => ({ ...prevErrors, phone: "Invalid phone number" }));
    //   isValid = false;
    // } else {
    //   setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
    // }

    //     // Message validation
    if (formData.message.length < 10 || formData.message.length > 250) {
      setErrors((prevErrors) => ({ ...prevErrors, message: "Message must be between 10 and 250 characters" }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, message: "" }));
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Process the form data
      console.log("Form submitted:", formData);
      //   setFormData({
      //     name: "",
      //     email: "",
      //     phone: "",
      //     message: "",
      //   });
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input">
        <label>Name:</label>
        <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="min 3 characters" />
        <div className="error">{errors.name}</div>
      </div>

      <div className="input">
        <label>Email:</label>
        <input type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="name@.email.com" />
        <div className="error">{errors.email}</div>
      </div>

      <div className="input">
        <label>Phone:</label>
        <input type="text" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        <div className="error">{errors.phone}</div>
      </div>

      <div className="input">
        <label>Message:</label>
        <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
        <div className="error">{errors.message}</div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
