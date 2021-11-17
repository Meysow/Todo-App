import React, { useState } from "react";

const AddItem = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandle = (e) => {
    setInputValue(e.target.value);
  };

  const clickHandler = () => {
    if (inputValue) {
      let maxId =
        todos.length > 0
          ? todos.reduce(
              (max, item) => (item.id > max ? item.id : max),
              todos[0].id
            )
          : 0;
      let newArray = [...todos];
      newArray.push({ id: maxId + 1, text: inputValue, state: false });
      setTodos(newArray);
      setInputValue("");
    }
  };

  return (
    <div className="addItem">
      <input
        type="text"
        className="addItem__input"
        placeholder="add details"
        onChange={onChangeHandle}
        value={inputValue}
      />
      <button className="addItem__btn" onClick={() => clickHandler()}>
        Add
      </button>
    </div>
  );
};

export default AddItem;
