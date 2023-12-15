import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 3) return;
    onAddCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};
