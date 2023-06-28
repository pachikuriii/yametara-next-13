import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="p-2">
        <ul className="flex items-center space-x-2">
          <li>
            <p>Header</p>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/result">Result</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
