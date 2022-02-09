import { HeroList } from "../heroes/HeroList";

export const MarvelScreen = () => {
    return (
        <div>
            <h1>MarverScreen</h1>
            <hr />

            <HeroList pulisher="Marvel Comics" />
        </div>
    );
};
