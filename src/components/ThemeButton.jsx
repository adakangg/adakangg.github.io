export const ThemeButton = ({ mode, onClick, isSelected }) => (
  <button 
    onClick={onClick} 
    className={`flex flex-row items-center gap-1 px-1.5 py-0.5 rounded-sm cursor-pointer ${ isSelected ? "bg-[var(--dark-background)]" : "text-gray-500" }`}
  > 
    <span className="material-symbols-outlined" style={{ fontVariationSettings: `"FILL" 0`, fontSize: "1rem" }}>
      {`${mode}_mode`}
    </span>  
  </button>  
);