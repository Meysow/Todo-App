import React from "react";

const TabsDisplay = ({ activeTab, setActiveTab }) => {
  const tabHandler = (e) => {
    setActiveTab(e.currentTarget.innerHTML);
  };

  // Function used to toggle the 'active' ClassName on the clicked Tab //
  const isActive = (name) => activeTab === name && "active";

  return (
    <div className="tabsDisplay">
      <ul className="tabsDisplay__list">
        <li
          className={`tabsDisplay__list__item ${isActive("All")}`}
          onClick={tabHandler}
        >
          All
        </li>
        <li
          className={`tabsDisplay__list__item ${isActive("Active")}`}
          onClick={tabHandler}
        >
          Active
        </li>
        <li
          className={`tabsDisplay__list__item ${isActive("Completed")}`}
          onClick={tabHandler}
        >
          Completed
        </li>
      </ul>
      <hr className="tabsDisplay__separator" />
    </div>
  );
};

export default TabsDisplay;
