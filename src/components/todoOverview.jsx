import { Button } from "./utils";

export default function TodoOverview({ todoItems, onClearItems, children }) {
  const incompleteItems = todoItems.filter((item) => item.completed === false);
  return (
    <div className="flex justify-between p-4 text-xs items-center text-gray-500">
      <p className="hover:text-gray-700">{incompleteItems.length} items left</p>
      {children}
      <Button hoverColor={"text-gray-700"} onClick={onClearItems}>
        Clear completed
      </Button>
    </div>
  );
}
