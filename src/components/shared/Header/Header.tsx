import Link from "next/link";

export const Header = () =>{
    console.log('Hola mundo Header');
    return(
        <header>
        <nav>
          <ul>
          <li>
            <Link href="/">
            Home
            </Link>
            </li>
            <li>
            <Link href="/store">
            Store
            </Link>
            </li>
            <li>
            <Link href="/test">
            Test
            </Link>
            </li>
          </ul> 
        </nav>
      </header>
    )
} 