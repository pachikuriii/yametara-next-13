import Footer from '../../components/questions/footer'
import Header from '../../components/questions/header'
import { ProgressIndicator } from '@/components/questions/ProgressIndicator'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <ProgressIndicator />
      {children}
      <Footer />
    </>
  )
}
