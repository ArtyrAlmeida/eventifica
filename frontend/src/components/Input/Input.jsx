import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Input = React.forwardRef(function Input(props,ref) {

  return (
    <div className='form-input'>
      <label className="form-label" htmlFor={props.input.id}>{props.label}</label>
      <input className="form-control"
        {...props.input}
        ref={ref}
      />
    </div>
  );
});

export { Input };