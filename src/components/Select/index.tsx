import { FC, ChangeEvent } from 'react';

function onChanger(fn: Function) {
  return (e: ChangeEvent<HTMLSelectElement>) => {
    fn(e.target.value);
  }
}

type SelectorProps = {
  id: string,
  dispatcher: Function,
  values: string[],
  selected: string
};

const Select: FC<SelectorProps> = ({ id, dispatcher, values, selected }) => (
  <select id={id} name={id} onChange={onChanger(dispatcher)} value={selected}>
    {values.map((value) => <option key={value} value={value}>{value}</option>)}
  </select>
)

export default Select;
