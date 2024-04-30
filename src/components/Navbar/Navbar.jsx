import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import Feedback from "../Feedback/Feedback";
import styles from "./Navbar.module.css";

const Navbar = ({ data, page, songsData }) => {
  const [isFeedbackClicked, setIsFeedbackClicked] = useState(false);

  const handleClick = () => {
    setIsFeedbackClicked(!isFeedbackClicked);
  };

  useEffect(() => {
    let feedback = document.getElementById("feedback");
    let body = document.body;
    if (feedback) {
      if (isFeedbackClicked) {
        body.style.overflowY = "hidden";
        feedback.classList.add("feedbackClicked");
      } else {
        body.style.overflowY = "auto";
        feedback.classList.remove("feedbackClicked");
      }
    }
  }, [isFeedbackClicked]);

  return (
    <div>
      {isFeedbackClicked && (
        <Feedback onClose={() => setIsFeedbackClicked(false)} />
      )}
      <nav className={styles.nav}  id="navbarContainer">
        <Logo />
        <Search data={page === "home" ? data : songsData} page={page} />
        <Button
          text="Give Feedback"
          eventHandler={{ event: "onClick", handler: handleClick }}
        />
      </nav>
    </div>
  );
};

export default Navbar;
