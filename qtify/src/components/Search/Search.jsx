import searchIcon from "../../assets/search-icon.svg";
import styles from "./search.module.css";
import navbarStyles from "../Navbar/Navbar.module.css";

const Search = () => {

  return (
    <>
      <div className={navbarStyles.searchField}>
        <input
          type="search"
          placeholder={
            "Search a Song of Your Choice"
          }
        />
        <div>
          <img
            src={searchIcon}
            alt="Search Icon"
            className={styles.searchIcon}
          />
        </div>
      </div>
    </>
  );
};

export default Search;
