export default function HeaderOne({ children }) {
  return (
    <h1 className="mb-4 text-3xl font-black leading-tight text-white md:text-7xl md:leading-none md:mb-12">
      {children}
    </h1>
  );
}
