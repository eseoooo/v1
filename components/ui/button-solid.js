export default function ButtonSolid({ children, ...otherProps }) {
  return (
    <button
      {...otherProps}
      className="px-7 py-2 bg-gold-700 rounded-sm font-sans text-base-sm text-bg-gray-800 border-[0.5px] border-transparent hover:bg-transparent hover:text-gold-700 hover:border-gold-700 ease-out duration-300"
    >
      {children}
    </button>
  );
}
