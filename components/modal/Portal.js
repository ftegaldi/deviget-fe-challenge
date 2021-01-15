import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const Portal = ({ children }) => {
  const element = document.createElement('div');
  useEffect(() => {
    document.body.appendChild(element);

    return () => {
      document.body.removeChild(element);
    };
  }, [element]);

  return ReactDOM.createPortal(children, element);
};

export default Portal;
