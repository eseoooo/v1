export default function ButtonSolid({ children, ...otherProps }) {
  return (
    <button {...otherProps} className="focused-button button-solid">
      {children}
    </button>
  );
}
