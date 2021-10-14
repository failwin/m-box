import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './nav-menu.scss';

export default function NavMenu(props) {

    const {pathname} = useLocation();


    return (
        <nav>
            <ul className='menu-list'>
                <li className='menu-list-item active'>
                    <Link className={pathname === '/' ? 'menu-list-link active' : 'menu-list-link'} to={'/'}>Home</Link>
                </li>
                <li className='menu-list-item'>
                    <Link className={pathname === '/movies' ? 'menu-list-link active' : 'menu-list-link'} to={'/movies'}>Movies</Link>
                </li>
            </ul>
        </nav>
    );
}