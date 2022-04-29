import styles from "./login.module.css";
import { ReactComponent as WebAppIcon } from '../../assets/logo.svg'


function Login(props) {

    return (
        <div className={styles.container}>
            <WebAppIcon />
            <div className={styles.loginform}>
                <h2 id={styles.formtitle}>Login</h2>


            </div>
        </div>
    )


}

export default Login;
