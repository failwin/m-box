import {Link} from 'react-router-dom';

import './logo.scss';

export default function logo() {
    return (
        <div className="logo">
            <Link to={'/'}>
                <img src='/images/logo.svg' alt='logo'/>
            </Link>
        </div>
    );
}