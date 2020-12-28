import { FC } from 'react';
import './style.css';

const FormControl: FC<{ direction: "row" | "column" }> = ({ children, direction }) => (
  <div className={`form-control flex-direction-${direction}`}>
    {children}
  </div>
);

export default FormControl;
