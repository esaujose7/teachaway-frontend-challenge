import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Modal from 'react-modal';
import { ImgurContextProvider } from './context/Imgur';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

Modal.setAppElement(rootElement as HTMLElement);

ReactDOM.render(
  <React.StrictMode>
    <ImgurContextProvider>
      <App />
    </ImgurContextProvider>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
