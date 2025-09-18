function Button({ children, onClick, disabled }) {
  return (
    <button
      className="py-1 sm:py-2 px-4 flex gap-2 bg-neutral-800 rounded-md cursor-pointer focus:ring-neutral-200 focus:ring items-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
