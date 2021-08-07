import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';

import './change-mode.scss';

export default function ChangeMode({activeMode}) {

    let theme = localStorage.getItem('theme');

    const changeTheme = () => {
        if (theme === 'light') {
           localStorage.setItem('theme', null);
            return activeMode('dark');
        }
        localStorage.setItem('theme', 'light');
        return activeMode('light');
    }

    return (
        <div className='change-mode'>
            {
                theme !== 'light' ? <WbSunnyIcon style={{color: "yellow", fontSize: '30px'}} onClick={changeTheme}/> :
                    <Brightness3Icon style={{color: "darkblue", fontSize: '30px'}} onClick={changeTheme}/>

            }
        </div>
    );
}