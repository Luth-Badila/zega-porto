import React, { useState } from "react";
import myPhoto from "../assets/images/my-photo-circle.png";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormStatus {
  success: string;
  error: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    success: "",
    error: "",
  });

  const validateForm = () => {
    let isValid = true;
    /* eslint-disable no-useless-escape */
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.name.length < 3 || formData.name.length > 50) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Name must be between 3 and 50 characters" }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }

    if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Invalid email address" }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (!phoneRegex.test(formData.phone)) {
      setErrors((prevErrors) => ({ ...prevErrors, phone: "Invalid phone number" }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
    }

    //     // Message validation
    if (formData.message.length < 10 || formData.message.length > 250) {
      setErrors((prevErrors) => ({ ...prevErrors, message: "Message must be between 10 and 250 characters" }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, message: "" }));
    }

    return isValid;
  };

  const isFormValid = () => {
    return Object.values(errors).every((error) => error === "") && Object.values(formData).every((value) => value !== "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setFormStatus({
        success: "Form submitted successfully!",
        error: "",
      });
    } else {
      alert("Form has errors. Please fix them.");
      setFormStatus({
        success: "",
        error: "Form has errors. Please fix them.",
      });
    }
  };

  return (
    <section id="contact">
      <div className="form-section">
        <form onSubmit={handleSubmit} className="form">
          <div className="photo-section">
            <img src={myPhoto} alt="circle-photo" />
            <h1>Feel Free To Contact Me</h1>
          </div>
          <div className="form-input">
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
              <input type="text" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="08xxxxxxxxxx" />
              <div className="error">{errors.phone}</div>
            </div>
            <div className="input">
              <label>Message:</label>
              <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Write uour message ..." />
              <div className="error">{errors.message}</div>
            </div>

            <button type="submit" disabled={!isFormValid()}>
              Submit
            </button>
            {formStatus.success && <div className="success-message">{formStatus.success}</div>}
            {formStatus.error && <div className="message">{formStatus.error}</div>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
