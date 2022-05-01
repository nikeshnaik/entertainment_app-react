import styles from "./signup.module.css";
import { ReactComponent as WebAppIcon } from '../../assets/logo.svg'
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../features/globalState/globalStateSlice";
import { useState } from "react";


function SignUp(props) {

    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

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

    let passwordWarningClass = passwordWarning ? `${styles.warningPassword} ${styles.passwordField}` : `${styles.passwordField}`
    let emailWarningClass = passwordWarning ? `${styles.warningPassword} ${styles.emailField}` : `${styles.emailField}`
    let repeatPasswordWarningClass = passwordWarning ? `${styles.warningPassword} ${styles.repeatPasswordField}` : `${styles.repeatPasswordField}`

    return (
        <div className={styles.container}>
            <WebAppIcon />
            <div className={styles.signupform}>
                <h2 id={styles.formtitle}>Sign Up</h2>

                <form onSubmit={handleLogin} className={styles.form}>
                    <div className={emailWarningClass}>
                        <input type="text" value={userName} name="Username" placeholder="Email address"
                            onChange={({ target }) => setUsername(target.value)} />

                        {passwordWarning ? <span className={styles.warningtext}>InValid</span> : null}
                    </div>

                    <div className={passwordWarningClass} >
                        <input type="password" value={password} name="Password" placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)} />

                        {passwordWarning ? <span className={styles.warningtext}>InValid</span> : null}
                    </div>


                    <div className={repeatPasswordWarningClass} >
                        <input type="password" value={repeatPassword} name="RepeatPassword" placeholder="Repeat Password"
                            onChange={({ target }) => setRepeatPassword(target.value)} />

                        {passwordWarning ? <span className={styles.warningtext}>Doesn't Match</span> : null}
                    </div>


                    <button type="submit">Create an account</button>
                </form>
                <h3>Already have an account?<a href="/login">Login</a></h3>
            </div >
        </div >
    )


}

export default SignUp;
