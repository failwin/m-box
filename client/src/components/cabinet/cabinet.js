import {useState, useEffect} from 'react';
import fetchRequests from '../../utils/fetchRequest';
import {Link, useHistory, useLocation} from 'react-router-dom';

import './cabinet.scss';

export default function Cabinet() {

    const [isUserAuth, setIsUserAuth] = useState(false);
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        const profileData = JSON.parse(localStorage.getItem('user'));
        if(profileData) {
            setIsUserAuth(profileData);
        }
    }, [location]);

    const logOut = async () => {
        await fetchRequests.logOutUser();
        localStorage.clear();
        setIsUserAuth(false);
        history.push('/');
    }

    return (
        <div className='cabinet'>

            {
                !isUserAuth ? (
                    <>
                        <Link className='cabinet-btn btn' to={'/auth/sign-in'}>login</Link>
                        <Link className='cabinet-btn btn' to={'/auth/sign-up'}>register</Link>
                    </>
                ) : (
                    <>
                        <button className='cabinet-btn btn' onClick={logOut}>logout</button>
                        <Link className="cabinet-btn btn" to={`/user/${isUserAuth.user?.id}`}>cabinet</Link>
                    </>
                )
            }

        </div>
    );
}