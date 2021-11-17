import React from "react";
import { BsCheckLg } from "react-icons/bs";

const Item = ({ name, checkedState, handleOnChange, itemId }) => {
  const isChecked = checkedState && "checked"; // toggle the checked class //
  const isIcon = checkedState && <BsCheckLg />; // Add Icon for the checked Items //

  return (
    <label className="item">
      {isIcon}
      <input
        type="checkbox"
        id={`custom-checkbox-${itemId}`}
        className={`item__input ${isChecked}`}
        name={name}
        value={name}
        checked={checkedState}
        onChange={() => handleOnChange(itemId)}
      />
      <span>{name}</span>
    </label>
  );
};

export default Item;
