import Link from 'next/link'


const Header = () => {
  return (
    <header>
      <h1><Link href={"/"}>Header</Link></h1>
      <nav>
        <ul className='flex gap-4'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header