import NavMenu from '../nav-menu/nav-menu';
import ChangeMode from '../change-mode/change-mode';
import Cabinet from '../cabinet/cabinet';
import Logo from '../logo/logo';

import './header.scss';

export default function Header({activeMode}) {

    return (
        <header className='header'>
            <Logo />
            <NavMenu />
            <Cabinet />
            <ChangeMode activeMode={activeMode}/>
        </header>
    );
}