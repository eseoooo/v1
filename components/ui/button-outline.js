export default function ButtonOutline({ children, ...otherProps }) {
  return (
    <button
      {...otherProps}
      className="focused-button px-7 py-2 border-0.5 border-gold-700 rounded-sm font-montserrat text-sm text-gold-700 hover:bg-gold-700 hover:text-bg-gray-800 focus-visible:bg-gold-700 focus-visible:text-bg-gray-800 ease-out duration-300 uppercase tracking-wider font-medium"
    >
      {children}
    </button>
  );
}
