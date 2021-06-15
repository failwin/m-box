import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './footer.scss';
import Logo from '../logo/logo';

export default function Footer() {
    return (
        <footer className='footer'>
            <Logo/>
            <div className="footer-links">
                <ul className="footer-social">
                    <li className="footer-social-icon">
                        <a href='/'>
                            <FacebookIcon />
                        </a>
                    </li>
                    <li className="footer-social-icon">
                        <a href='/'>
                            <TwitterIcon />
                        </a>
                    </li>
                    <li className="footer-social-icon">
                        <a href='/'>
                            <InstagramIcon />
                        </a>
                    </li>
                    <li className="footer-social-icon">
                        <a href='/'>
                            <LinkedInIcon />
                        </a>
                    </li>
                </ul>
            </div>
            <ul className="footer-private-policy">
                <li className="footer-private-policy-item">
                    <a href="/" className="footer-private-policy-link">Voice over and Subtitle</a>
                </li>
                <li className="footer-private-policy-item">
                    <a href="/" className="footer-private-policy-link">Media Center</a>
                </li>
                <li className="footer-private-policy-item">
                    <a href="/" className="footer-private-policy-link">Privacy</a>
                </li>
                <li className="footer-private-policy-item">
                    <a href="/" className="footer-private-policy-link">Contact us</a>
                </li>
            </ul>
        </footer>
    );
}