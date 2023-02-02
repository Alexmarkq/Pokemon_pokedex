import Pokedex from "../assets/loading.gif"
import styles from "./loadingScreen.module.css"

const LoadingScreen = () => {
    return (
        <>
            <div className={styles.loadingScreen}>
                <img className={styles.loadingScreenIcon} src={Pokedex} alt="Pokedex" />

            </div>

        </>
    );
};

export default LoadingScreen;