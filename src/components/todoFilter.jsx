import { Button } from "./utils";

export default function TodoFilter({ mobile, onFilterItems }) {
  const classes = `${
    mobile ? "flex sm:hidden" : "hidden sm:flex"
  }  sm:bg-transparent sm:shadow-none sm:rounded-none bg-white dark:bg-[#25273c] text-gray-600 dark:text-gray-400 justify-center gap-3 p-3 sm:p-0 rounded-md shadow-xl text-sm`;
  return (
    <div className={classes}>
      <Button
        fontWeight={"bold"}
        hoverColor={"text-blue-600"}
        onClick={() => onFilterItems("all")}
      >
        All
      </Button>
      <Button
        fontWeight={"bold"}
        hoverColor={"text-blue-600"}
        onClick={() => onFilterItems("active")}
      >
        Active
      </Button>
      <Button
        fontWeight={"bold"}
        hoverColor={"text-blue-600"}
        onClick={() => onFilterItems("completed")}
      >
        Completed
      </Button>
    </div>
  );
}

// const classSave = `bg-white dark:bg-[#25273c] justify-center gap-3 p-3 rounded-md shadow-xl text-sm text-gray-500`;

// const classG = `${mobile ? 'flex sm:hidden' : 'hidden sm:flex'}  sm:bg-transparent sm:shadow-none sm:rounded-none bg-white justify-center gap-3 p-3 sm:p-0 rounded-md shadow-xl text-sm`
