import { useNavigate, useParams } from 'react-router-dom';
import PokeballImg from "../assets/pokeball.png"
import Footer from '../components/Footer';
import styles from "./pokemon.module.css"

const Pokemon = () => {

    const { name } = useParams()

    const navigate = useNavigate()
    return (
        <>
            <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
                <img className={styles.pokeballImg} src={PokeballImg} alt="Pokeball" />Go back
            </button>
            <div className={styles.pokemon}>
                <main className={styles.pokemonInfo}>
                    <div className={styles.pokemonTittle}>{name?.toUpperCase()}</div>
                    <div>Num:</div>
                    <div><img className={styles.pokemonInfoImg} src={PokeballImg} alt="" /></div>
                    <div>HP</div>
                    <div>Attack</div>
                    <div>Defense</div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Pokemon;