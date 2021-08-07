import {useSelector} from 'react-redux';

import './company.scss';

export default function Company({company}) {
    const {imgUrl} = useSelector(({films}) => films);

    return (
        <li className='company-item'>
            {
                <img src={imgUrl + 'w300' + company?.logo_path} alt="company"/>
            }
        </li>
    );
}