import { Button } from "./utils";

export default function TodoFilter({ mobile, onFilterItems, filterBy }) {
  const classes = `${
    mobile ? "flex sm:hidden" : "hidden sm:flex"
  }  sm:bg-transparent sm:shadow-none sm:rounded-none bg-white dark:bg-[#25273c] text-gray-400 dark:text-gray-400 justify-center gap-3 p-3 sm:p-0 rounded-md shadow-xl text-sm`;
  return (
    <div className={classes}>
      <Button
        className={`bold hover:text-blue-600 font-bold ${
          filterBy === "all" ? "text-gray-700 dark:text-gray-200" : ""
        }`}
        onClick={() => onFilterItems("all")}
      >
        All
      </Button>
      <Button
        className={`bold hover:text-blue-600 font-bold ${
          filterBy === "active" ? "text-gray-700 dark:text-gray-200" : ""
        }`}
        onClick={() => onFilterItems("active")}
      >
        Active
      </Button>
      <Button
        className={`bold hover:text-blue-600 font-bold ${
          filterBy === "completed" ? "text-gray-700 dark:text-gray-200" : ""
        }`}
        onClick={() => onFilterItems("completed")}
      >
        Completed
      </Button>
    </div>
  );
}

// const classSave = `bg-white dark:bg-[#25273c] justify-center gap-3 p-3 rounded-md shadow-xl text-sm text-gray-500`;

// const classG = `${mobile ? 'flex sm:hidden' : 'hidden sm:flex'}  sm:bg-transparent sm:shadow-none sm:rounded-none bg-white justify-center gap-3 p-3 sm:p-0 rounded-md shadow-xl text-sm`
