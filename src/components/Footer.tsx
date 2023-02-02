import { Link } from "react-router-dom";
import styles from "./footer.module.css"
import PokemonPic from "../assets/bomba.png";
import LocationPic from "../assets/pointer.png";
import ItemsPic from "../assets/pokeball.png";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link className={styles.footerLink} to="/pokemons">
                <img className={styles.footerIcon} src={PokemonPic} alt="Pokeball" />
                Pokemons
            </Link>
            <Link className={styles.footerLink} to="https://github.com/Alexmarkq">
                <img className={styles.footerIcon} src={ItemsPic} alt="Item" />
                Github
            </Link>
            <Link className={styles.footerLink} to="https://www.linkedin.com/in/alexis-marquez-de-eugenio/?locale=en_US">
                <img className={styles.footerIcon} src={LocationPic} alt="Location" />
                Linkedin
            </Link>
        </footer>
    );
};

export default Footer;