const Select = ({ filterOption, setFilterOption, setIsNewItem }) => {
  const handleChangeSelect = (e) => {
    setFilterOption(e.target.value);
    setIsNewItem(false);
  };

  return (
    <li className='selectContainer'>
      <select onChange={handleChangeSelect} value={filterOption}>
        <option value='all'>All</option>
        <option value='complete'>Complete</option>
        <option value='uncomplete'>Uncomplete</option>
      </select>
    </li>
  );
};

export default Select;
