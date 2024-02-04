export default function HeadingDash({ children }) {
  return (
    <h3 className="w-full flex items-center">
      {children}
      <span className="inline-flex flex-1 border-0.5 max-w-xs ml-6 border-dark-800"></span>
    </h3>
  );
}
