import styles from "./signup.module.css";
import { ReactComponent as WebAppIcon } from '../../assets/logo.svg'
import { useDispatch } from "react-redux";
import { setCurrentUser, setLogin } from "../../features/globalState/globalStateSlice";
import { useState } from "react";

import { auth, validatePassword } from "../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function SignUp(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const [passwordWarning, setPasswordWarning] = useState(false)
    const [emailWarning, setEmailWarning] = useState(false)
    const [repeatWarning, setRepeatPasswordWarning] = useState(false)

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault()
        setEmailWarning(false)
        setRepeatPasswordWarning(false)
        setPasswordWarning(false)
        console.log('Logging in with', email, password)

        // User Administartion yet to be done

        if (validatePassword(password, repeatPassword)) {

            createUserWithEmailAndPassword(auth, email, password)
                .then((response) => {
                    console.log("New user created")

                    let user = {
                        email: email,
                        password: password
                    }

                    dispatch(setCurrentUser, user)
                    dispatch(setLogin, true)

                    setEmail('')
                    setPassword('')
                    setRepeatPassword('')
                    setEmailWarning(false)
                    setPasswordWarning(false)
                    setRepeatPasswordWarning(false)
                    navigate("/")

                })
                .catch((err) => {

                    console.log("insie caach", err.message)

                    if (err.message === "INVALID_EMAIL") {
                        console.log("sdaf")
                        setEmailWarning(true)
                    }

                    setPasswordWarning(true)
                    setRepeatPasswordWarning(true)

                })

        }

        else {
            setEmailWarning(false)
            setRepeatPasswordWarning(true)
            setPasswordWarning(true)
        }

    }

    let passwordWarningClass = passwordWarning ? `${styles.warningPassword} ${styles.passwordField}` : `${styles.passwordField}`
    let emailWarningClass = emailWarning ? `${styles.warningPassword} ${styles.emailField}` : `${styles.emailField}`
    let repeatPasswordWarningClass = repeatWarning ? `${styles.warningPassword} ${styles.repeatPasswordField}` : `${styles.repeatPasswordField}`

    return (
        <div className={styles.container}>
            <WebAppIcon />
            <div className={styles.signupform}>
                <h2 id={styles.formtitle}>Sign Up</h2>

                <form onSubmit={handleLogin} className={styles.form}>
                    <div className={emailWarningClass}>
                        <input type="text" value={email} name="Email" placeholder="Email address"
                            onChange={({ target }) => setEmail(target.value)} />

                        {emailWarning ? <span className={styles.warningtext}>InValid</span> : null}
                    </div>

                    <div className={passwordWarningClass} >
                        <input type="password" value={password} name="Password" placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)} />

                        {passwordWarning ? <span className={styles.warningtext}>InValid</span> : null}
                    </div>


                    <div className={repeatPasswordWarningClass} >
                        <input type="password" value={repeatPassword} name="RepeatPassword" placeholder="Repeat Password"
                            onChange={({ target }) => setRepeatPassword(target.value)} />

                        {repeatWarning ? <span className={styles.warningtext}>Doesn't Match</span> : null}
                    </div>


                    <button type="submit">Create an account</button>
                </form>
                <h3>Already have an account?<a href="/login">Login</a></h3>
            </div >
        </div >
    )


}

export default SignUp;
