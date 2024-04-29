import styles from "./hero.module.css";
import heroImg from "../../assets/Hero-Image.svg";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div>
            <h1> 100 Thousand Songs, ad - free </h1>
            <h1> Over thousands podcast episodes</h1>
            </div>
            <img src={heroImg} alt="heroImage" />
        </div>
    )
}

export default Hero;
