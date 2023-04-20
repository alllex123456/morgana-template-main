import { useState } from 'react';

const emailValidRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const inputIsValid = (input, field) => {
  if (field === 'email') {
    return emailValidRegex.test(input);
  }
  return input.length > 1;
};

export const useForm = (source) => {
  const [inputs, setInputs] = useState(
    source.reduce(
      (state, item) => ({
        ...state,
        [item]: { value: '', isValid: false, isTouched: false },
      }),
      {}
    )
  );

  const handleChangeInput = (input, field) => {
    setInputs((previousState) => ({
      ...previousState,
      [field]: {
        ...previousState[field],
        value: input,
        isValid: inputIsValid(input, field),
      },
    }));
  };

  const handleTouchInput = (field) => {
    setInputs((previousState) => ({
      ...previousState,
      [field]: {
        ...previousState[field],
        isTouched: true,
      },
    }));
  };

  const formIsValid =
    Object.values(inputs).filter((input) => input.isValid).length ===
    source.length;

  return { inputs, formIsValid, handleChangeInput, handleTouchInput };
};
