export default function TextArea({ name, otherStyles, ...otherProps }) {
  // TODO: Add validation
  return (
    <textarea
      name={name}
      className={`outline-none tracking-wide font-montserrat py-7 bg-transparent border-b border-dark-800 placeholder:font-montserrat placeholder:tracking-wide placeholder:font-medium placeholder:text-base-base placeholder:md:text-base focus:border-gold-700 hover:border-gold-700 motion-safe:duration-300 motion-safe:ease-out ${otherStyles}`}
      {...otherProps}
    />
  );
}
