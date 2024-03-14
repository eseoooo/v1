export default function ButtonOutline({ children, ...otherProps }) {
  return (
    <button {...otherProps} className="focused-button button-outline">
      {children}
    </button>
  );
}
