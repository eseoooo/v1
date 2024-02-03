export default function ButtonSolid({ children, ...otherProps }) {
  return (
    <button
      {...otherProps}
      className="focused-button px-7 py-2 bg-gold-700 rounded-sm font-montserrat text-base-sm text-bg-gray-800 border-0.5 border-transparent hover:bg-transparent hover:text-gold-700 hover:border-gold-700 focus-visible:bg-transparent focus-visible:text-gold-700 focus-visible:border-gold-700 ease-out duration-300"
    >
      {children}
    </button>
  );
}
