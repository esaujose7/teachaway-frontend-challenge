import { FC, ChangeEvent } from 'react';
import FormControl from '../FormControl';
import './style.css';

type SelectorProps = {
  id: string,
  dispatcher: Function,
  values: string[],
  selected: string
};

const uppercaseFirstLetter = (string: string) => {
  return string.slice(0, 1).toUpperCase().concat(string.slice(1, string.length));
}

const Select: FC<SelectorProps> = ({ id, dispatcher, values, selected, children }) => (
  <FormControl direction="column">
    <label htmlFor={id} className="select-description bold">{children}</label>  
    <select id={id} name={id} onChange={(e: ChangeEvent<HTMLSelectElement>) => { dispatcher({ key: id, value: e.target.value }) }} value={selected}>
      {values.map((value) => <option key={value} value={value}>{uppercaseFirstLetter(value)}</option>)}
    </select>
  </FormControl>
)

export default Select;
