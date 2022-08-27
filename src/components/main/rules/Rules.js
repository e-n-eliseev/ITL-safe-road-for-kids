import { rules } from "../../../info/rules";
import Rule from "./rule/Rule.js";
import uniqid from "uniqid";

const Rules = () => {
    return (
        <section className="rules">
            <h2 className="rules__heading">
                Правила дорожного движения.
            </h2>
            <p className="rules__info">
                Ниже приведены правила дорожного движения, которые нужно знать и соблюдать каждому школьнику для своей безопасности.
            </p>
            <div className="rules__container">
                {rules.map(item => <Rule key={uniqid()} item={item} />)}
            </div>
        </section>
    )
}

export default Rules;