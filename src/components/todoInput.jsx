import { useState } from "react";

export default function TodoInput({ onAddItem }) {
  const [description, setDescription] = useState("");

  function handleSubmitItem(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      id: Date.now(),
      completed: false,
    };

    onAddItem(newItem);
    setDescription("");
  }

  return (
    <form
      className="flex gap-3 items-center bg-gray-50 dark:bg-[#25273c] px-3 rounded-md text-sm"
      onSubmit={(e) => handleSubmitItem(e)}
    >
      <button className="bg-gray-200 dark:bg-gray-600 hover:bg-gradient-to-br from-blue-400 to-purple-500 p-[1px] rounded-full">
        <div className="bg-neutral-50 dark:bg-[#25273c] p-3 rounded-full"></div>
      </button>
      <input
        className="bg-transparent dark:placeholder:text-gray-600 text-gray-600 dark:text-gray-200 w-full py-3 outline-none focus:placeholder:text-transparent caret-gray-400"
        placeholder="Create a new todo..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );
}
