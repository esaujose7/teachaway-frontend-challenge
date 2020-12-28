import { FC } from 'react';

interface IErrorProps {
  error: Error;
  retry?: Function
}

const Error: FC<IErrorProps> = ({ error }) => (
  <div>
    {error.message}
  </div>
);

export default Error;
