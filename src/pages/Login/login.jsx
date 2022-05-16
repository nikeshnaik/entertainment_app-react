import styles from "./login.module.css";
import { ReactComponent as WebAppIcon } from '../../assets/logo.svg'

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useDispatch } from "react-redux";
import { setLogin } from "../../features/globalState/globalStateSlice";


function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [passwordWarning, setPasswordWarning] = useState(false)

    const [emailWarning, setEmailWarning] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (event) => {

        event.preventDefault()

        setPasswordWarning(false)
        setEmailWarning(false)

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {

                // Verify Email step shortcut

                if (!auth.currentUser.emailVerified) {
                    dispatch(setLogin(true))
                    navigate("/")
                }
            })
            .catch((err) => {
                console.log(err.message)
                setPasswordWarning(true)
                setEmailWarning(true)
            })

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
                            onChange={({ target }) => setEmail(target.value)
                            } />

                        {passwordWarning ? <span className={styles.warningtext}>InValid</span> : null}
                    </div >

                    <div className={passwordWarningClass} >
                        <input type="password" value={password} name="Password" placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)} />

                        {passwordWarning ? <span className={styles.warningtext}>InValid</span> : null}
                    </div>


                    <button type="submit">Login to your account</button>
                </form >
                <h3>Don't have an account?<Link to="/signup">Sign Up</Link></h3>
            </div >
        </div >
    )


}

export default Login;
