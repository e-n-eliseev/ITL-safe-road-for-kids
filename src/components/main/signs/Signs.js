import { roadSign } from "../../../info/roadSign";
import uniqid from "uniqid";
import Sign from "./sign/Sign";

const Signs = () => {
    return (
        <section className="signs">
            <h2 className="signs__heading">
                Дорожные знаки.
            </h2>
            <p className="signs__info">
                Ниже приведены некоторые дорожные знаки значения которых нужно знать, для того , чтобы ознакомиться с каждым нужно нажать кнопку "подробнее".
            </p>
            <div className="signs__container">
                {roadSign.map(item => <Sign key={uniqid()} item={item} />)}
            </div>
        </section>
    )
}

export default Signs;