import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'yametara',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <Providers>{children} </Providers>
      </body>
    </html>
  )
}
