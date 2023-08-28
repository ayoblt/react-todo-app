import IntroBackground from "./components/introBackground";
import Content from "./components/content";
import Header from "./components/header";
import TodoInput from "./components/todoInput";
import { useEffect, useState } from "react";
import TodoCard from "./components/todoCard";
import TodoFilter from "./components/todoFilter";

export default function App() {
  // const [items, setItems] = useState([]);
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [filterBy, setFilterBy] = useState("all");

  // useEffect
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Functions

  function handleSetDarkTheme() {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");

    setTheme("dark");
  }

  function handleSetLightTheme() {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");

    setTheme("light");
  }

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleToggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleClearItems() {
    setItems(items.filter((item) => !item.completed));
  }

  function handleFilterItems(filter) {
    setFilterBy(filter);
  }

  return (
    <div className="relative bg-white dark:bg-[#161722] h-screen">
      <IntroBackground />
      <Content>
        <Header
          theme={theme}
          setDarkTheme={handleSetDarkTheme}
          setLightTheme={handleSetLightTheme}
        />
        <TodoInput onAddItem={handleAddItem} />
        <TodoCard
          todoItems={items}
          onToggleItem={handleToggleItem}
          onDeleteItem={handleDeleteItem}
          onClearItems={handleClearItems}
          filterBy={filterBy}
          onFilterItems={handleFilterItems}
        />
        <TodoFilter
          mobile={true}
          onFilterItems={handleFilterItems}
          filterBy={filterBy}
        />
      </Content>
    </div>
  );
}
