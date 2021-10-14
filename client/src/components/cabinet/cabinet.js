import {Link} from 'react-router-dom';

import './cabinet.scss';

export default function cabinet() {
    return (
        <div className='cabinet'>
            <Link className='cabinet-btn btn' to={'/auth/sign-in'}>login</Link>
            <Link className='cabinet-btn btn' to={'/auth/sign-up'}>register</Link>
        </div>
    );
}