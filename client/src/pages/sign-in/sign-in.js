import {useState} from 'react';
import { Link } from 'react-router-dom';
import fetchRequest from '../../utils/fetchRequest';
import './sing-in.scss';

export default function SignIn() {

    const [logInData, setLoginData] = useState({email:'', password: ''});

    const loginHandler = (e) => {
        const {name, value} = e.target;
        setLoginData({...logInData, [name]:value});
    }
    const handleSubmit = async e => {
        e.preventDefault();

        const req = await fetchRequest.post('http://localhost:4000/auth/sign-in', logInData);
        console.log(req);
    }

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <input type="text" className="login-name" placeholder='email' name='email' required value={logInData.email} onChange={loginHandler}/>
            <input type="text" className="login-password" placeholder='password' name='password' required value={logInData.password} onChange={loginHandler}/>
            <input type="submit" className="login-submit" value='login'/>
            <div className="login-register">
                You can register <Link to={'/auth/sign-up'}>here</Link>
            </div>
        </form>
    );
}