export function Button({ hoverColor, fontWeight, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`hover:${hoverColor} font-${fontWeight}`}
    >
      {children}
    </button>
  );
}
