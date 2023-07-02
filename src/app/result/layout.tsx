import Header from "../../components/questions/header";
import Footer from "../../components/questions/footer";
import Providers from "@/redux/provider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
      <Footer />
    </html>
  );
}
