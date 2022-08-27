import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import ModalWindow from "./modal/ModalWindow";

const Sign = ({ item }) => {

    const { pic, name } = item;

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <figure className="sign" data-aos="flip-left" >
            <img className="sign__img" src={pic} alt="Technology avatar" />
            <figcaption className="sign__wrapper">
                <h3 className="sign__heading">{name}</h3>
                <ModalWindow item={item} />
            </figcaption>
        </figure>
    )
}

export default Sign;