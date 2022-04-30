import styles from "./login.module.css";
import { ReactComponent as WebAppIcon } from '../../assets/logo.svg'
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../features/globalState/globalStateSlice";
import { useState } from "react";


function Login(props) {

    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [passwordWarning, setPasswordWarning] = useState(false)

    const dispatch = useDispatch(setUserInfo)

    const handleLogin = (event) => {
        event.preventDefault()
        console.log('Logging in with', userName, password)

        // User Administartion yet to be done

        let user = {
            userName: userName,
            image: '../assets/image-avatar.png',
            name: 'John Doe',
            password: password
        }

        dispatch(setUserInfo, user)
        setPasswordWarning(!passwordWarning)

    }

    let passwordWarningIDStyle = passwordWarning ? styles.warningPassword : null

    return (
        <div className={styles.container}>
            <WebAppIcon />
            <div className={styles.loginform}>
                <h2 id={styles.formtitle}>Login</h2>

                <form onSubmit={handleLogin} className={styles.form}>
                    <input type="text" value={userName} name="Username" placeholder="Email address"
                        onChange={({ target }) => setUsername(target.value)} />

                    <div className={styles.passwordField} id={passwordWarningIDStyle}>
                        <input type="password" value={password} name="Password" placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)} id={passwordWarningIDStyle} />

                        {passwordWarning ? <span className={styles.warningtext}>Can't be empty</span> : null}
                    </div>


                    <button type="submit">Login to your account</button>
                </form>
                <h3>Don't have an account?<span>Sign Up</span></h3>
            </div >
        </div >
    )


}

export default Login;
