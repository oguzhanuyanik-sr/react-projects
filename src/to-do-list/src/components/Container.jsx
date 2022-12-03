import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = ({ children }) => {
  const props = {
    toast: {
      position: 'bottom-right',
      draggable: false,
      autoClose: 1000,
      newestOnTop: false,
      closeOnClick: true,
    },
  };

  return (
    <main className='mainContainer'>
      <ToastContainer {...props.toast} />
      {children}
    </main>
  );
};

export default Container;
