import Footer from "./(home)/components/Footer";
import Navbar from "./(home)/components/Navbar";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
