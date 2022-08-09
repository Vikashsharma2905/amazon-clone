import React,{useState} from 'react'
import './Login.css'
import { auth } from './firebase';
import { useHistory , Link } from 'react-router-dom';
function Login() {

    const history  = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            history.push('/');
        })
        .catch( e => alert(e.message));
    }


    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then( auth => {
            history.push('/');
        })
        .catch( e => alert( e.message));
    }
    return (
        <div className='login'>
            <Link to = '/'>
                <img className="login_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
            </Link>
            <div className='login_container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E Mail</h5>
                    <input value={email} onChange = {e => setEmail(e.target.value)} type='email' placeholder='email'></input>
                    <h5>Password</h5>
                    <input value={password} onChange = {e => setPassword(e.target.value)}type='password' placeholder='password'></input>
                    <button  onClick={login}className='signin'>Sign In</button>
                    <br></br>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <br></br>
                    <button onClick={register}className='signup'>Create your account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
