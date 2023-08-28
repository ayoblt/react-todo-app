import TodoFilter from "./todoFilter";
import TodoList from "./todoList";
import TodoOverview from "./todoOverview";

export default function TodoCard({
  todoItems,
  onToggleItem,
  onDeleteItem,
  onClearItems,
  filterBy,
  onFilterItems,
}) {
  let filteredItems;

  if (filterBy === "all") filteredItems = todoItems;

  if (filterBy === "active")
    filteredItems = todoItems.slice().filter((item) => !item.completed);
  if (filterBy === "completed")
    filteredItems = todoItems.slice().filter((item) => item.completed);

  return (
    <div className="bg-neutral-50 dark:bg-[#25273c] rounded-md divide-y divide-gray-300 dark:divide-gray-700 shadow-2xl">
      <TodoList
        todoItems={filteredItems}
        onToggleItem={onToggleItem}
        onDeleteItem={onDeleteItem}
      />
      <TodoOverview todoItems={todoItems} onClearItems={onClearItems}>
        <TodoFilter mobile={false} onFilterItems={onFilterItems} filterBy={filterBy} />
      </TodoOverview>
    </div>
  );
}
