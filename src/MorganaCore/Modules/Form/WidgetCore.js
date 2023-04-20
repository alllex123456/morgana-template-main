import React from 'react';
import { motion } from 'framer-motion';
import { defaultTheme } from '../../theme';
import { useForm } from '../../../hooks/useForm';
import './style.css';

const WidgetCore = ({
  themeParam,
  titleParam,
  textParam,
  inputParams,
  buttonParam,
}) => {
  let theme = themeParam ? themeParam : defaultTheme;
  let title = titleParam ? titleParam : 'Default Title';
  let formInputs = inputParams ? inputParams : [];
  let text = textParam ? textParam : 'Default text';
  let button = buttonParam ? buttonParam : <DefaultButton />;

  const { inputs, formIsValid, handleChangeInput, handleTouchInput } = useForm(
    formInputs.map((input) => input.id)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="section contact"
      style={{
        backgroundColor: theme.colors.color_10,
        color: theme.colors.font_dark,
        fontFamily: theme.fonts.content,
      }}
    >
      <h2
        className="contact_title"
        style={{
          fontFamily: theme.fonts.title,
        }}
      >
        {title}
      </h2>
      <p>{text}</p>
      <form className="contact_form" onSubmit={handleSubmit}>
        {formInputs.map((input, index) => (
          <div key={index}>
            <input.element
              className="contact_input"
              type={input.type}
              rows="10"
              placeholder={input.placeholder}
              value={inputs[`${input.id}`].value}
              onChange={(e) => handleChangeInput(e.target.value, input.id)}
              onBlur={() => handleTouchInput(input.id)}
            />
            {!inputs[`${input.id}`].isValid &&
              inputs[`${input.id}`].isTouched && (
                <p className="contact_input--error">{input.errorText}</p>
              )}
          </div>
        ))}
        <button.item {...button.props} type="submit" disabled={!formIsValid} />
      </form>
    </div>
  );
};

const DefaultButton = () => {
  return <button>default</button>;
};

export default WidgetCore;
