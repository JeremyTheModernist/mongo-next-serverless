import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  label {
    color: var(--white);
    margin-bottom: var(--padding-small);
  }
`;

const InputStyles = styled.input`
  outline: none;
  border: none;
  border-radius: var(--border-normal);
  background-color: var(--gray-9);
  color: var(--white);
  padding: var(--padding-large);
`;

// values are stored in formData from useForm
// each input name corresponds to a value
// hence value={formData.name}
const Input = ({ id, name, type, handleOnChange, formData }) => {
  const handleChange = (e) => {
    // console.log(e.target.value)
    handleOnChange ? handleOnChange(e) : null;
  };
  return (
    <InputWrapper>
      <label htmlFor={id}>{id}</label>
      <InputStyles {...{ id, name, type }} onChange={handleChange} value={formData.name} />
    </InputWrapper>
  );
};

export default Input;
