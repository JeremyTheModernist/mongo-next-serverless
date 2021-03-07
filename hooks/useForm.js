import { useState } from "react";

// receives a callback function for handling the submit functionality
export const useForm = (
  callback = (formData = {}) => console.log(formData)
) => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const inputValue = {};
    inputValue[e.target.name] = e.target.value;
    setFormData((prevData) => {
      return {
        ...prevData,
        ...inputValue,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    callback(formData); // call the callback function for submit
  };
  return {
    handleChange,
    handleSubmit,
    formData,
  };
};
