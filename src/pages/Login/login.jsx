import styles from "./login.module.css";
import { ReactComponent as WebAppIcon } from '../../assets/logo.svg'
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../features/globalState/globalStateSlice";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [passwordWarning, setPasswordWarning] = useState(false)

    const [emailWarning, setEmailWarning] = useState(false)

    const navigate = useNavigate()

    const dispatch = useDispatch(setUserInfo)


    const handleLogin = (event) => {

        event.preventDefault()
        event.stopPropagation()

    }

    let passwordWarningClass = passwordWarning ? `${styles.warningPassword} ${styles.passwordField}` : `${styles.passwordField}`
    let emailWarningClass = emailWarning ? `${styles.warningPassword} ${styles.emailField}` : `${styles.emailField}`

    return (
        <div className={styles.container}>
            <WebAppIcon />
            <div className={styles.loginform}>
                <h2 id={styles.formtitle}>Login</h2>

                <form onSubmit={handleLogin} className={styles.form}>
                    <div className={emailWarningClass}>
                        <input type="text" value={email} name="Email" placeholder="Email address"
                            onChange={({ target }) => setEmail(target.value)} />

                        {passwordWarning ? <span className={styles.warningtext}>InValid</span> : null}
                    </div>

                    <div className={passwordWarningClass} >
                        <input type="password" value={password} name="Password" placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)} />

                        {passwordWarning ? <span className={styles.warningtext}>InValid</span> : null}
                    </div>


                    <button type="submit">Login to your account</button>
                </form>
                <h3>Don't have an account?<Link to="/sign_up">Sign Up</Link></h3>
            </div >
        </div >
    )


}

export default Login;
