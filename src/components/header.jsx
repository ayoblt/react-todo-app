import ToggleTheme from "./toggleTheme";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="inline text-3xl uppercase text-white tracking-[12px] font-bold">
        Todo
      </h2>
      <ToggleTheme />
    </div>
  );
}
