import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "../hooks/useForm";
import Button from "./Button";
import Input from "./Input";

const FormStyles = styled.form`
  display: flex;
  flex-flow: column wrap;
  max-width: 100%;
  > * {
    margin-bottom: var(--padding-large);
  }
`;

const Form = ({ formInputs = [], handleOnSubmit = (formData = {}) => console.log(formData) }) => {
  const { handleChange, handleSubmit } = useForm(handleOnSubmit);
  return (
    <FormStyles onSubmit={handleSubmit}>
      {formInputs.map((input, key) => {
        return <Input key={key} {...input} handleOnChange={handleChange} />;
      })}
      <Button>Submit</Button>
    </FormStyles>
  );
};

export default Form;
