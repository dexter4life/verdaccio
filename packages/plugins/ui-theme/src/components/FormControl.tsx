import { FormControlProps, default as MaterialUIFormControl } from '@mui/material/FormControl';
import React, { forwardRef } from 'react';

type FormControlRef = HTMLElementTagNameMap[keyof HTMLElementTagNameMap];

const FormControl = forwardRef<FormControlRef, FormControlProps>(function FormControl(props, ref) {
  return <MaterialUIFormControl {...props} innerRef={ref} />;
});

export default FormControl;
