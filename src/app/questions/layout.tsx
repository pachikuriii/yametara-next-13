'use client'
import { ProgressIndicator } from '../../components/questions/ProgressIndicator'
import Footer from '../../components/questions/footer'
import Header from '../../components/questions/header'

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
