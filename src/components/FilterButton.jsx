export const FilterButton = ({ content, isActive, onClick }) => {
  return (
    <button
      className={`py-2 px-3 text-xs bg-slate-300 border rounded-3xl ${isActive ? `scale-110 bg-violet-600 text-slate-100` : ``}   `}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
