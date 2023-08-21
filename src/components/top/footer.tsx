import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='text-center'>
      <Link href='/terms'>利用規約</Link>
      <Link href='https://twitter.com/'>twitter</Link>
    </footer>
  )
}

export default Footer
