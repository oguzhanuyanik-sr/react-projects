import { BsPlusSquareFill } from 'react-icons/bs';
import { toast } from 'react-toastify';

const Footer = ({ data, setData, setFilterOption, setIsNewItem }) => {
  const handleClickAdd = () => {
    setData([...data, { id: Math.random(), text: '', done: false }]);
    setFilterOption('all');
    setIsNewItem(true);
    toast.success('Adding Successful!');
  };

  return (
    <footer className='footerContainer'>
      <p>What have for today?</p>
      <span onClick={handleClickAdd}>
        <BsPlusSquareFill />
      </span>
    </footer>
  );
};

export default Footer;
