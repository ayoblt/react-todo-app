import CheckIcon from "../assets/images/icon-check.svg";
import CrossIcon from "../assets/images/icon-cross.svg";

export default function TodoItem({ item, onToggleItem, onDeleteItem }) {
  return (
    <li
      draggable={true}
      className="p-4 flex justify-between cursor-pointer group items-center"
      onClick={() => onToggleItem(item.id)}
    >
      <div className="flex gap-3 items-center w-full">
        <div className="bg-gray-200 dark:bg-gray-600 hover:bg-gradient-to-br from-blue-400 to-purple-500 p-[1px] rounded-full">
          {item.completed ? (
            <img
              className="bg-gradient-to-br from-blue-400 to-purple-500 p-1.5 rounded-full h-6 w-6"
              src={CheckIcon}
              alt="check"
            />
          ) : (
            <div className="bg-neutral-50 dark:bg-[#25273c] p-3 rounded-full"></div>
          )}
        </div>

        <p
          className={`${
            item.completed
              ? "line-through text-gray-300 dark:text-gray-600"
              : ""
          } group-hover:scale-105`}
        >
          {item.description}
        </p>
      </div>
      <img
        src={CrossIcon}
        alt="cross"
        onClick={(e) => {
          e.stopPropagation();
          onDeleteItem(item.id);
        }}
        className="invisible group-hover:visible"
      />
    </li>
  );
}
