import './header.scss';

import NavMenu from '../nav-menu/nav-menu';
import ChangeMode from '../change-mode/change-mode';
import Cabinet from '../cabinet/cabinet';
import SearchPanel from '../search-panel/search-panel';
import Logo from '../logo/logo';

export default function Header({activeMode}) {

    return (
        <header className='header'>
            <Logo />
            <NavMenu />
            <SearchPanel />
            <Cabinet />
            <ChangeMode activeMode={activeMode}/>
        </header>
    );
}