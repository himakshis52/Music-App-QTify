import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";


import styles from "./Navbar.module.css";

const Navbar = () => {
  

  return (
    <div>
     
      <nav className={styles.nav}  id="navbarContainer">
        <Logo />
        <Search />
        <Button
          text="Give Feedback"
        />
      </nav>
    </div>
  );
};

export default Navbar;
