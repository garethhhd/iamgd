import Footer from './footer';
import Mouse from './mouse';

export default function Layout({ preview, children }) {
  return (
    <>
      <Mouse />
      {children}
      <Footer />
    </>
  );
}
