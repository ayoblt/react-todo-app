import TodoItem from "./todoItem";

export default function TodoList({ todoItems, onToggleItem, onDeleteItem }) {
  return (
    <ul className="divide-y divide-gray-300 dark:divide-gray-700 text-gray-600 dark:text-gray-400 font-bold text-xs">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onToggleItem={onToggleItem}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </ul>
  );
}
