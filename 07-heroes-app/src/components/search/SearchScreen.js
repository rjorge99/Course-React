import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../heroes/HeroCard";
import { useMemo } from "react";
export const SearchScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { q = "" } = queryString.parse(location.search);

    const [formVaules, handleInputChange] = useForm({ searchText: q });

    const { searchText } = formVaules;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    };

    return (
        <>
            <div>Busquedas</div>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Buscar un heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            className="btn btn-outline-primary mt-1"
                            type="submit"
                        >
                            Buscar
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />

                    {q === "" ? (
                        <div className="alert alert-info">Buscar un heroe</div>
                    ) : (
                        !heroesFiltered.length && (
                            <div className="alert alert-danger">
                                No hay resultados: {q}
                            </div>
                        )
                    )}

                    {heroesFiltered.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </>
    );
};
