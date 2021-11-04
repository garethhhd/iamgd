import Mouse from './cursor';

export default function Layout({ preview, children }) {
  return (
    <>
      <Mouse />
      {children}
    </>
  );
}
