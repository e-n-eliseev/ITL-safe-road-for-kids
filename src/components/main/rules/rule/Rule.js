import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Rule = ({ item }) => {

    const { pic, name, desc } = item;

    useEffect(() => {
        AOS.init({
            duration: 3000
        });
    }, []);

    return (
        <figure className="rule" data-aos="fade" >
            <div className="rule__pic-wrapper">
                <img className="rule__pic" src={pic} alt="Rule" />
            </div>
            <figcaption className="rule__description" >
                <h3 className="rule__heading">{name}</h3>
                <p className="rule__text">{desc}</p>
            </figcaption>
        </figure>
    )
}

export default Rule;