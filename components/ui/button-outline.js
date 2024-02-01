export default function ButtonOutline({ children, ...otherProps }) {
  return (
    <button
      {...otherProps}
      className="px-7 py-2 border-[0.5px] border-gold-700 rounded-sm font-sans text-sm text-gold-700 hover:bg-gold-700 hover:text-bg-gray-800 ease-out duration-300"
    >
      {children}
    </button>
  );
}
