import Footer from '../../components/questions/footer'
import Header from '../../components/questions/header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
