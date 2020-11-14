import React, {useState} from 'react';
import './SearchPanel.css'

const SearchPanel = ({onChangeTerm}) => {
  const [inputValue, setInputValue] = useState('');

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
    onChangeTerm(inputValue);
  };

  return (
    <input
      className="form-control search-input"
      type="text"
      placeholder="Search post..."
      value={inputValue}
      onChange={changeInputValue}
    />
  );
};

export default SearchPanel;
