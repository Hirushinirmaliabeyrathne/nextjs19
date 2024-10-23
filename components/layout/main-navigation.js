import Link from 'next/link';
import Logo from './logo';
import classes from './main-navigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/' legacyBehavior>
        
        <Logo />
        
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts' legacyBehavior>Posts</Link>
          </li>
          <li>
            <Link href='/contact' legacyBehavior>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
