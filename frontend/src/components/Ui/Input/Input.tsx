import React, { useEffect, useState } from 'react';

import classes from './Input.module.scss';

const Input = React.forwardRef(function Input(props: any,ref:any) {

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        {...props.input}
        ref={ref}
      />
    </div>
  );
});

export { Input };