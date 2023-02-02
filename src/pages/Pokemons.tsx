import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import styles from "./pokemons.module.css"
import { fetchPokemons } from "../api/fetchPokemons";
import { Pokemon } from "../types/types";
import LoadingScreen from "../components/LoadingScreen";
import { waitFor } from "../utils/utils";

const Pokemons = () => {

    const [isLoading, setIsLoading] = useState(false)

    const [query, setQuery] = useState("")

    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {
        const fetchAllPokemons = async () => {
            setIsLoading(true)
            await waitFor(700)
            const allPokemons = await fetchPokemons()
            setPokemons(allPokemons)
            setIsLoading(false)
        }
        fetchAllPokemons()
    }, [])

    if (isLoading || !pokemons) {
        return <LoadingScreen />
    }

    const filteredPokemons = pokemons?.slice(0, 300).filter((pokemon) => {
        return pokemon.name.toLocaleLowerCase().match(query.toLocaleLowerCase())
    })


    return (
        <>
            <Header query={query} setQuery={setQuery} />
            <main>
                <nav className={styles.nav}>
                    {filteredPokemons.slice(0, 300).map((pokemon) => {
                        return (
                            <Link key={pokemon.id} className={styles.listItem} to={`/pokemons/${pokemon.name.toLowerCase()}`}>
                                <img
                                    className={styles.listItemIcon}
                                    src={pokemon.imgSrc}
                                    alt={pokemon.name}
                                />
                                <div className={styles.listItemText}>
                                    <span>{pokemon.name}</span>
                                    <span>{pokemon.id}</span>
                                </div>
                            </Link>
                        )
                    })}



                </nav>
            </main>
            <Footer />
        </>
    )
};

export default Pokemons;