import React from "react";
import Item from "./Item";
import { FaTrashAlt } from "react-icons/fa";

const Items = ({ todos, setTodos, activeTab }) => {
  const handleOnChange = (idToChange) => {
    // Get the Index of the item to change in the array //
    let elementsIndex = todos.findIndex((element) => element.id === idToChange);

    // Create a copy of the original Array (to prevent changing the state without useState) //
    let newArray = [...todos];

    // Make the modification to the new array : toggle 'state' Value //
    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      state: !newArray[elementsIndex].state,
    };

    // replace the original array with the new array //
    setTodos(newArray);
  };

  const removeSingleHandler = (idToRemove) => {
    // Find the Index of the element to remove from the Araay //
    let elementIndex = todos.findIndex((element) => element.id === idToRemove);

    // Create a copy of the original Array (to prevent changing the state without useState) //
    let newArray = [...todos];

    // Make the modification to the new array : toggle 'state' Value //
    newArray.splice(elementIndex, 1);

    // replace the original array with the new array //
    setTodos(newArray);
  };

  // Create a variable to store all the ID to remove //
  const removeAllItems = () => {
    let newItems = todos.filter((item) => item.state === false);
    let newArray = [...newItems];
    setTodos(newArray);
  };
  // Create a variable to store the items to show depending on the active Tab //
  let itemsToShow;

  if (activeTab === "Active") {
    itemsToShow = (
      <ul className="items__list">
        {todos
          .filter((item) => item.state === false)
          .map((item) => (
            <li className="items__list__item" key={item.id}>
              <Item
                name={item.text}
                checkedState={item.state}
                handleOnChange={handleOnChange}
                itemId={item.id}
              />
            </li>
          ))}
      </ul>
    );
  } else if (activeTab === "Completed") {
    itemsToShow = (
      <>
        <ul className="items__list">
          {todos
            .filter((item) => item.state === true)
            .map((item) => (
              <li className="items__list__item" key={item.id}>
                <Item
                  name={item.text}
                  checkedState={item.state}
                  handleOnChange={handleOnChange}
                  itemId={item.id}
                />
                <span onClick={() => removeSingleHandler(item.id)}>
                  <FaTrashAlt />
                </span>
              </li>
            ))}
        </ul>
        <div className="btn__wrapper">
          <button onClick={() => removeAllItems()}>
            <FaTrashAlt />
            delete all
          </button>
        </div>
      </>
    );
  } else {
    itemsToShow = (
      <ul className="items__list">
        {todos.map((item) => (
          <li className="items__list__item" key={item.id}>
            <Item
              name={item.text}
              checkedState={item.state}
              handleOnChange={handleOnChange}
              itemId={item.id}
            />
          </li>
        ))}
      </ul>
    );
  }

  return <div className="items">{itemsToShow}</div>;
};

export default Items;
