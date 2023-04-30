import React, { useEffect, useState } from 'react';

const Input = React.forwardRef(function Input(props: any,ref:any) {

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