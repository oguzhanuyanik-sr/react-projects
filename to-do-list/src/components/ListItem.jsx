import { BsCheck2, BsTrash } from 'react-icons/bs';
import { toast } from 'react-toastify';

const ListItem = ({ current, data, setData, isNewItem }) => {
  const handleChangeInput = (e) => {
    setData(
      data.map((prevItem) =>
        prevItem.id === current.id
          ? { ...prevItem, text: e.target.value }
          : prevItem
      )
    );
  };

  const handleClickComplete = () => {
    setData(
      data.map((prevItem) =>
        prevItem.id === current.id
          ? { ...prevItem, done: !prevItem.done }
          : prevItem
      )
    );
  };

  const handleClickRemove = () => {
    setData(data.filter((prevItem) => prevItem.id !== current.id));
    toast.error('Delete Successful!');
  };

  return (
    <li className='listItem'>
      <span
        onClick={handleClickComplete}
        className={`${current.done ? 'text-green' : 'text-darkGrey'} checkIcon`}
      >
        <BsCheck2 />
      </span>
      <input
        type='text'
        onChange={handleChangeInput}
        className={`${
          current.done
            ? 'line-through text-grey focus:text-grey'
            : 'text-black focus:text-green'
        }`}
        value={current.text}
        spellCheck={false}
        autoFocus={isNewItem}
        onKeyPress={(e) => e.key === 'Enter' && e.currentTarget.blur()}
      />
      <span onClick={handleClickRemove} className='trashIcon'>
        <BsTrash />
      </span>
    </li>
  );
};

export default ListItem;
