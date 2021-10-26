import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import fetchRequests from "../../utils/fetchRequest";

import './sign-up.scss';


export default function SignUp() {
    const history = useHistory();

    const [signUpData, setSingUpData] = useState({email:'', password: '', name: ''});
    const [errorRequest, setErrorRequest] = useState('');

    const signUpHandler = (e) => {
        const {name, value} = e.target;
        setSingUpData({...signUpData, [name]:value});
    }
    const handleSubmit = async e => {
        e.preventDefault();

        const req = await fetchRequests.signUpUser(signUpData);

        if(req.message) {
            setErrorRequest(req.message);
        } else {
            history.push('/auth/sign-in');
        }
    }

    return (
        <form className='sign-up-form' onSubmit={handleSubmit}>
            <input type="text" className="sign-up-name" placeholder='name' name='name' required onChange={signUpHandler}/>
            <input type="text" className="sign-up-name" placeholder='email' name='email' required onChange={signUpHandler}/>
            <input type="text" className="sign-up-password" placeholder='password' name='password' required onChange={signUpHandler}/>
            <input type="submit" className="sign-up-submit" value='send' />
            {
                errorRequest && <div className='sign-up-error'>{errorRequest}</div>
            }
        </form>
    );
}
