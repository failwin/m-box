import {Link} from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import ButtonInfo from "../button-info/button-info";

import "./hero.scss";

export default function Hero() {
    return (
        <section className="hero" style={{backgroundImage: "url('images/bg-top2.png')"}}>
            <div className="hero-offer">
                <h1 className="hero-title">
                    Venom
                </h1>
                <h4 className="hero-rate">
                    2021
                    <span className="hero-rate-year">
                        18+
                    </span>
                    <div className="hero-rate-star">
                        <StarIcon style={{color: 'yellow'}}/>
                        9
                    </div>

                </h4>
                <p className="hero-description">
                    Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally
                    becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his
                    newfound powers to protect the world from a shadowy organization looking for a symbiote of their
                    own.
                </p>
                <div className="hero-btns-group">
                    <Link to={'/movies/335983'}>
                        <ButtonInfo text={'More Information'}/>
                    </Link>
                </div>
            </div>
        </section>
    );
}
