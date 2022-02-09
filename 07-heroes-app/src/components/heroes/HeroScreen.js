import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { heroImages } from "../../helpers/heroImages";
import { getHeroById } from "../../selectors/getHeroeById";

// import batman from "../../assets/dc-batman.jpg";

export const HeroScreen = () => {
    const { heroId } = useParams();

    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    const navigate = useNavigate();

    if (!hero) return <Navigate to="/" />;

    const handleReturn = () => {
        navigate(-1);
    };

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={heroImages(`./${heroId}.jpg`).default}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{hero.superhero}</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>Alter ego:</b> {hero.alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:</b> {hero.publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance:</b> {hero.first_appearance}
                    </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>

                <button className="btn btn-outline-info" onClick={handleReturn}>
                    Regresar
                </button>
            </div>
        </div>
    );
};
