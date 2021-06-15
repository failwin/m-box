import './hero.scss';

import StarIcon from '@material-ui/icons/Star';
import ButtonInfo from '../button-info/button-info';

export default function Hero() {
    return (
        <section className="hero" style={{backgroundImage: "url('images/bg-top2.png')"}}>
            <div className="hero-offer">
                <h1 className="hero-title">
                    Venom 2
                </h1>
                <h4 className="hero-rate">
                    2021
                    <span className="hero-rate-year">
                        18+
                    </span>
                    <div className="hero-rate-star">
                        <StarIcon style={{color: 'yellow'}} />
                        9
                    </div>

                </h4>
                <p className="hero-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae earum et eveniet officia porro,
                    sint suscipit voluptate? Ab, amet aperiam at, corporis cum cumque delectus eaque eius et eveniet
                    exercitationem expedita illum itaque labore minus modi molestiae natus numquam placeat.
                </p>
                <div className="hero-btns-group">
                    <ButtonInfo text={'More Information'}/>
                </div>
            </div>
        </section>
    );
}