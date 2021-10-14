import {useState} from 'react';
import './sign-up.scss';
import fetchRequest from "../../utils/fetchRequest";

export default function SignUp() {

    const [signUpData, setSingUpData] = useState({email:'', password: '', name: ''});

    const signUpHandler = (e) => {
        const {name, value} = e.target;
        setSingUpData({...signUpData, [name]:value});
        console.log(signUpData);
    }
    const handleSubmit = async e => {
        e.preventDefault();

        const req = await fetchRequest.post('http://localhost:4000/auth/sign-up', signUpData);
    }

    return (
        <form className='sign-up-form' onSubmit={handleSubmit}>
            <input type="text" className="sign-up-name" placeholder='name' name='name' required onChange={signUpHandler}/>
            <input type="text" className="sign-up-name" placeholder='email' name='email' required onChange={signUpHandler}/>
            <input type="text" className="sign-up-password" placeholder='password' name='password' required onChange={signUpHandler}/>
            <input type="submit" className="sign-up-submit" value='send'/>
        </form>
    );
}