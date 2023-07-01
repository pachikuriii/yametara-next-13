import Header from "../../components/questions/header";
import Footer from "../../components/questions/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="background-color: rgb(167 243 208)">
        <Header />
        {children}
      </body>
      <Footer />
    </html>
  );
}
