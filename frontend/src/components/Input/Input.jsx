import React from 'react';

const Input = React.forwardRef(function Input(props,ref) {

  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        {...props.input}
        ref={ref}
      />
    </div>
  );
});

export { Input };