import React, { useState, useEffect } from "react";
import Header from "./Header";
import TabsDisplay from "./TabsDisplay";
import AddItem from "./AddItem";
import Items from "./Items";

function App() {
  const savedTodos = localStorage.getItem("todos");
  const [todos, setTodos] = useState(
    savedTodos
      ? JSON.parse(savedTodos)
      : [
          { id: 1, text: "Do coding challenges", state: false },
          { id: 2, text: "Do coding challenges", state: false },
          {
            id: 3,
            text: "Do coding challenges",
            state: true,
          },
        ]
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="App">
      <Header />
      <TabsDisplay activeTab={activeTab} setActiveTab={setActiveTab} />
      <AddItem todos={todos} setTodos={setTodos} />
      <Items todos={todos} setTodos={setTodos} activeTab={activeTab} />
    </div>
  );
}

export default App;
